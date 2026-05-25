import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import Eyebrow from "@/components/Eyebrow";
import TrackedLink from "@/components/TrackedLink";

type Channel = {
  label: string;
  primary: string;
  primaryHref: string;
  /** GTM event name + element id for the primary link. */
  event: string;
  id: string;
  secondary?: string;
  secondaryHref?: string;
  secondaryEvent?: string;
  secondaryId?: string;
};

const CHANNELS: Channel[] = [
  {
    label: "Call or text",
    primary: COMPANY.phone,
    primaryHref: COMPANY.phoneHref,
    event: "phone_click",
    id: "contact-phone-cta",
    secondary: "Or send a text",
    secondaryHref: COMPANY.smsHref,
    secondaryEvent: "sms_click",
    secondaryId: "contact-sms-cta",
  },
  {
    label: "Email",
    primary: COMPANY.email,
    primaryHref: COMPANY.emailHref + "?subject=Booking%20Inquiry",
    event: "email_click",
    id: "contact-email-cta",
  },
  {
    label: "Instagram",
    primary: "@caridiconcierge",
    primaryHref: COMPANY.social.instagram,
    event: "social_click",
    id: "contact-instagram-cta",
  },
];

export default function ContactHero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-16 lg:pt-[80px] pb-12 lg:pb-[80px]">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 font-body text-[10px] font-medium tracking-[0.32em] uppercase">
            <li>
              <Link
                href="/"
                className="text-ink/55 transition-colors duration-200 hover:text-brass"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/30">
              /
            </li>
            <li className="text-brass" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div className="flex flex-col">
            <Eyebrow className="text-brass mb-9 flex items-center gap-3.5">
              <span aria-hidden="true" className="inline-block w-6 h-px bg-brass" />
              Direct line
            </Eyebrow>
            <h1 className="font-display font-light text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.015em] text-ink max-w-[620px]">
              Your direct{" "}
              <em className="not-italic italic font-light text-brass">
                line.
              </em>
            </h1>
            <p className="mt-8 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.7] font-light text-ink/70">
              We answer directly during clinic hours. After hours, an assistant
              takes a message and we follow up the next business day. For a
              true medical emergency, please call 911 or go to the nearest
              emergency room.
            </p>

            <div className="mt-12 pt-7 border-t border-line flex items-center gap-5 max-w-[520px]">
              <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden bg-bone">
                <Image
                  src="/images/headshots/cc_headshot_white_hq_crop_edit.webp"
                  alt="Dr. Cristina Caridi"
                  fill
                  sizes="56px"
                  className="object-cover"
                  style={{
                    objectPosition: "center 22%",
                    filter: "saturate(0.88)",
                  }}
                />
              </div>
              <div>
                <p className="m-0 font-display font-light italic text-[18px] leading-[1.4] text-ink">
                  Cristina Caridi, MD
                </p>
                <p className="mt-1.5 m-0 font-body text-[11px] font-medium tracking-[0.32em] uppercase text-ink/55">
                  Physician · Founder
                </p>
              </div>
            </div>
          </div>

          <aside aria-label="Contact channels" className="w-full">
            <dl className="m-0 border-t border-line">
              {CHANNELS.map((channel) => (
                <div
                  key={channel.label}
                  className="grid gap-2 py-6 border-b border-line"
                >
                  <dt className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55">
                    {channel.label}
                  </dt>
                  <dd className="m-0">
                    <TrackedLink
                      href={channel.primaryHref}
                      id={channel.id}
                      event={channel.event}
                      eventParams={{ location: "contact_hero" }}
                      className="font-display font-light text-[22px] sm:text-[24px] leading-[1.2] text-ink transition-colors duration-200 hover:text-brass"
                    >
                      {channel.primary}
                    </TrackedLink>
                    {channel.secondary && channel.secondaryHref && (
                      <>
                        {" · "}
                        <TrackedLink
                          href={channel.secondaryHref}
                          id={channel.secondaryId}
                          event={channel.secondaryEvent ?? "link_click"}
                          eventParams={{ location: "contact_hero" }}
                          className="font-body text-[11px] font-medium uppercase tracking-[0.32em] text-brass transition-colors duration-200 hover:text-ink"
                        >
                          {channel.secondary}
                        </TrackedLink>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
