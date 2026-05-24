"use client";
import { useRef, useState } from "react";
import Script from "next/script";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";
import { noPhoneNumberFormat, formatPhoneNumber } from "@/app/utils/formatters";
import { pushEvent } from "@/lib/analytics";

// Turnstile activates only when the public site key is configured, so the form
// keeps working in environments where the key isn't set yet.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type HelpfulItem = { title: string; copy: string };

const HELPFUL: HelpfulItem[] = [
  {
    title: "What you're considering.",
    copy: "Botox, filler, a peel, or just a consultation — even rough is fine.",
  },
  {
    title: "Where you'd like to be seen.",
    copy: "Concierge at home, the Gowanus clinic, or no preference yet.",
  },
  {
    title: "A window that works.",
    copy: "Weekday evenings, Saturday morning — whatever fits.",
  },
  {
    title: "Anything I should know.",
    copy: "Past treatments, sensitivities, an event you're planning around.",
  },
];

export default function ContactFormCard() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  // Captured at first render; the server rejects submissions completed too fast.
  const renderedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const phoneDigits = noPhoneNumberFormat(form.phone.value);

    if (phoneDigits.length < 10) {
      form.phone.setCustomValidity(
        "Please enter a valid phone number (10+ digits)"
      );
      form.phone.reportValidity();
      return;
    } else {
      form.phone.setCustomValidity("");
    }

    const preferInput = form.elements.namedItem(
      "prefer"
    ) as RadioNodeList | null;
    const prefer = preferInput?.value ?? "Text";

    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
      prefer,
      company: form.company.value, // honeypot — must stay empty
      t: renderedAt.current, // form-render timestamp for the timing check
      turnstileToken:
        (form.elements.namedItem("cf-turnstile-response") as HTMLInputElement | null)
          ?.value ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json().catch(() => ({}));
        setStatus("success");
        // Only count real (server-accepted) submissions as a lead; bot-dropped
        // ones return accepted:false and must not pollute the conversion.
        if (result.accepted !== false) {
          pushEvent("generate_lead", { method: "contact_form", contact_pref: prefer });
        }
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      // Turnstile tokens are single-use; refresh for any retry.
      (window as Window & { turnstile?: { reset: () => void } }).turnstile?.reset();
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-line-strong py-3 text-[15px] font-body text-ink placeholder:text-ink/70 focus:outline-none focus:border-brass transition-colors duration-200";

  return (
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <Eyebrow className="text-brass mb-5" withDash>
            Send a note
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
            Or, write the{" "}
            <em className="not-italic italic font-light text-brass">
              longer version.
            </em>
          </h2>
          <p className="mt-5 font-body text-[15px] leading-[1.7] text-ink/70 max-w-[560px]">
            Anything you want me to know in advance — goals, history, timing —
            fits here.
          </p>
        </div>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-label="Send a note to Caridi Concierge"
          >
            {/* Honeypot: hidden from users and assistive tech; bots fill it and
                get silently dropped server-side. */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] top-[-9999px] h-0 w-0 overflow-hidden"
            >
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                name="firstName"
                placeholder="First name *"
                required
                className={inputClass}
              />
              <input
                name="lastName"
                placeholder="Last name *"
                required
                className={inputClass}
              />
            </div>
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="Phone *"
              required
              className={inputClass}
              onInput={(e) => {
                const el = e.currentTarget as unknown as HTMLInputElement;
                el.value = formatPhoneNumber(el.value);
                el.setCustomValidity("");
              }}
              onBlur={(e) => {
                const el = e.currentTarget as unknown as HTMLInputElement;
                const digits = noPhoneNumberFormat(el.value);
                if (digits.length < 10) {
                  el.setCustomValidity(
                    "Please enter a valid phone number (10+ digits)"
                  );
                } else {
                  el.setCustomValidity("");
                }
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="Email *"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              className={`${inputClass} resize-y`}
            />

            <fieldset className="m-0 p-0 border-0 pt-4">
              <legend className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-brass mb-4">
                Preferred reply
              </legend>
              <div className="flex flex-wrap gap-7">
                {(["Text", "Call", "Email"] as const).map((opt, i) => (
                  <label
                    key={opt}
                    className="inline-flex items-center gap-2.5 font-body text-[14px] text-ink/80 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="prefer"
                      value={opt}
                      defaultChecked={i === 0}
                      className="accent-brass"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {TURNSTILE_SITE_KEY && (
              <>
                <Script
                  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                  strategy="afterInteractive"
                />
                <div
                  className="cf-turnstile"
                  data-sitekey={TURNSTILE_SITE_KEY}
                  data-theme="light"
                />
              </>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-x-7 gap-y-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 hover:bg-teal-deep"
              >
                Send the note <IconArrow />
              </button>
              <p className="m-0 font-body text-[12px] leading-[1.6] text-ink/55 max-w-[360px] font-light">
                By sending, you consent to a reply on the channel above. Your
                information stays with the practice.
              </p>
            </div>

            {status === "success" && (
              <p
                role="status"
                className="font-body text-[14px] text-ink/70"
              >
                Thanks — your note is in. I&apos;ll reply within the next
                business day.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="font-body text-[14px] text-ink/70"
              >
                Something went wrong sending the note. Please try again, or
                reach us by text or email.
              </p>
            )}
          </form>

          <aside aria-label="Helpful to mention" className="lg:pl-10 lg:border-l lg:border-line">
            <Eyebrow className="text-brass mb-5" withDash>
              Helpful to mention
            </Eyebrow>
            <ul className="m-0 list-none p-0 border-t border-line">
              {HELPFUL.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-line py-5"
                >
                  <h3 className="font-display font-normal text-[18px] sm:text-[19px] leading-[1.2] text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="m-0 font-body text-[13.5px] leading-[1.65] text-ink/70 font-light">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-body text-[12.5px] leading-[1.7] text-ink/55 font-light">
              None of this is required — I&apos;ll ask in the reply if I need
              more. New clients always begin with a 60-minute consultation.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
