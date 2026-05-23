import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** A human cannot complete the form faster than this; below it is a bot. */
const MIN_FILL_MS = 2000;
/** A render timestamp older than this is stale/replayed — treat as suspicious. */
const MAX_AGE_MS = 1000 * 60 * 60 * 24;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isNonEmptyString = (v: unknown): v is string =>
  typeof v === "string" && v.trim() !== "";

/** Verify a Cloudflare Turnstile token. Only enforced when the secret is set. */
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

async function verifyTurnstile(token: string, remoteIp?: string): Promise<boolean> {
  if (!token || !TURNSTILE_SECRET) return false;
  const body = new URLSearchParams({ secret: TURNSTILE_SECRET, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      }
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verification request failed:", err);
    return false;
  }
}

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, phone, message, prefer, company, t, turnstileToken } =
    payload;

  // --- Bot heuristics ---------------------------------------------------------
  // Silently drop (200 + accepted:false): no email, and the client suppresses the
  // generate_lead event. Returning success gives bots no error signal to adapt to.

  // 1) Honeypot: a hidden field real users never see. Bots autofill it.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ success: true, accepted: false });
  }

  // 2) Timing: too-fast, missing, or stale render timestamp means the POST didn't
  //    come from a human filling our rendered form.
  const renderedAt = typeof t === "number" ? t : Number(t);
  const elapsed = Date.now() - renderedAt;
  if (!Number.isFinite(renderedAt) || elapsed < MIN_FILL_MS || elapsed > MAX_AGE_MS) {
    return NextResponse.json({ success: true, accepted: false });
  }

  // 3) Cloudflare Turnstile (only enforced when the secret is configured). A
  //    failure is returned loudly (400) so a real user with a blocked challenge
  //    can retry, rather than being silently dropped.
  if (TURNSTILE_SECRET) {
    const token = typeof turnstileToken === "string" ? turnstileToken : "";
    const remoteIp = req.headers.get("CF-Connecting-IP") ?? undefined;
    if (!(await verifyTurnstile(token, remoteIp))) {
      return NextResponse.json(
        { success: false, error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }
  }

  // --- Validation: loud 400 for genuinely malformed input ---------------------
  const invalid: string[] = [];
  if (!isNonEmptyString(firstName) || firstName.length > 100) invalid.push("firstName");
  if (!isNonEmptyString(lastName) || lastName.length > 100) invalid.push("lastName");
  if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 254) invalid.push("email");
  if (!isNonEmptyString(message) || message.length > 5000) invalid.push("message");
  if (phone != null && (typeof phone !== "string" || phone.length > 40)) invalid.push("phone");
  if (invalid.length > 0) {
    return NextResponse.json(
      { success: false, error: "Validation failed.", fields: invalid },
      { status: 400 }
    );
  }

  // Validated above; narrow for use.
  const safeEmail = email as string;
  const fullName =
    [firstName, lastName].filter(Boolean).join(" ").trim() || "Unknown";
  const preferLabel = typeof prefer === "string" ? prefer : "No preference";
  const phoneLabel = typeof phone === "string" && phone ? phone : "N/A";
  const bodyText = `Name: ${fullName}\nEmail: ${safeEmail}\nPhone: ${phoneLabel}\nPreferred reply: ${preferLabel}\n\nMessage:\n${message as string}`;

  try {
    await resend.emails.send({
      from: "Caridi Concierge <contact@notifications.caridiconcierge.com>",
      to: "booking@caridiconcierge.com",
      subject: `New contact form submission from ${fullName}`,
      replyTo: safeEmail,
      text: bodyText,
    });

    return NextResponse.json({ success: true, accepted: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
