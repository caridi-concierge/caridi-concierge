import Link from "next/link";
import { Accordion, AccordionItem } from "@/components/Accordion";
import Eyebrow from "@/components/Eyebrow";
import { COMPANY } from "@/lib/constants/company";

export default function FAQSection() {
  return (
    <section className="bg-ivory text-ink">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
          {/* Left: heading */}
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              Considerations
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[52px] leading-[1.05]">
              Frequently{" "}
              <em className="not-italic italic font-light">asked.</em>
            </h2>
            <p className="mt-6 font-body text-sm leading-[1.7] text-ink/70 max-w-[320px]">
              For anything not covered here, the practice replies personally—
              usually within the day.
            </p>
          </div>

          {/* Right: accordion */}
          <div>
            <Accordion>
              <AccordionItem title="How do I schedule an appointment?">
                <p>
                  Book online, or call/text the practice directly through{" "}
                  <Link href="/book?source=home_faq" className="text-brass underline underline-offset-2">
                    our booking page
                  </Link>
                  . New clients begin with a 60-minute consultation in your
                  home or our studio. Same-day visits are available on a
                  limited basis.
                </p>
                <p className="mt-3">
                  Call/text:{" "}
                  <a href={COMPANY.phoneHref} className="text-brass underline underline-offset-2">
                    {COMPANY.phone}
                  </a>
                  <br />
                  Email:{" "}
                  <a href={COMPANY.emailHref} className="text-brass underline underline-offset-2">
                    {COMPANY.email}
                  </a>
                </p>
              </AccordionItem>

              <AccordionItem title="What treatments do you offer?">
                <p>
                  Neuromodulators (Botox, Xeomin, Daxxify), dermal fillers
                  (RHA, Juvederm, Radiesse), biostimulators (Sculptra),
                  medical-grade peels, and aesthetic consultations. Treatments
                  are tailored to face, lips, neck, and jawline.
                </p>
              </AccordionItem>

              <AccordionItem title="Are in-home treatments safe?">
                <p>
                  Yes. All treatments are performed personally by Dr. Caridi
                  using sterile technique and medical-grade supplies—the same
                  standard you&apos;d expect in a medical office, with the
                  privacy of your own setting.
                </p>
              </AccordionItem>

              <AccordionItem title="Where are your NYC service areas?">
                <p>
                  Concierge service throughout Brooklyn, Manhattan, and Queens,
                  with a private studio in Gowanus. Select appointments available 
                  in Staten Island, the Bronx, and Long Island.
                </p>
                <p className="mt-3">
                  See{" "}
                  <Link href="/locations" className="text-brass underline underline-offset-2">
                    our locations page
                  </Link>{" "}
                  for more information.
                </p>
              </AccordionItem>

              <AccordionItem title="How is privacy handled?">
                <p>
                  Discretion is the practice. No signage, no shared waiting
                  rooms, no record of your visit beyond your medical chart.
                  Communication is direct, by your preferred channel.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
