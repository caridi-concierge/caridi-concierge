import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, message } = await req.json();

  const fullName = [firstName, lastName].filter(Boolean).join(" ").trim() || "Unknown";
  const bodyText = `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message || ""}`;

  try {
    await resend.emails.send({
      from: "Caridi Concierge <contact@notifications.caridiconcierge.com>",
      to: "booking@caridiconcierge.com",
      subject: `New contact form submission from ${fullName}`,
      replyTo: email,
      text: bodyText,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}