"use client";

import { Accordion, AccordionItem } from "@/components/Accordion";
import { COMPANY } from "@/lib/constants/company";

export default function FAQSection() {
  return (
    <section className="bg-merino py-20">
      <div className="container mx-auto grid grid-cols-1 gap-12 items-start">
        {/* Left heading */}
        <div>
          <h2 className="font-fraunces text-3xl md:text-4xl text-outer-space">
            Frequently asked questions
          </h2>
        </div>

        {/* Right accordion */}
        <div>
          <Accordion className="py-5">
            <AccordionItem title="How do I schedule an appointment?">
              <p>
                You can schedule an appointment by calling or booking online
                through the website. Visit our{" "}
                <a href="/book" className="text-carnation font-medium underline">
                  our booking page
                </a>{" "}
                to schedule your tailored experience today!
                <br />
                <br />
                Call/text: <a href={COMPANY.phoneHref} className="text-carnation font-medium underline">{COMPANY.phone}</a>
                <br />
                Email: <a href={COMPANY.emailHref} className="text-carnation font-medium underline">{COMPANY.email}</a>
                <br />
                I am available for in-home treatments in Brooklyn, Manhattan, Queens, Staten Island, The Bronx, and Long Island.
              </p>
            </AccordionItem>

            <AccordionItem title="What kind of services do you offer?">
              <p>
                I offer restorative treatments that enhance your natural
                features. This includes wrinkle reduction, lip flips, gummy
                smile correction, and crow’s feet using neuromodulators like
                Botox, Xeomin, and Daxxify. For volume and contour, I use dermal
                and biostimulatory fillers, such as RHA, Radiesse, and Juvederm.
                Treatments can be tailored to the lips, face, neck, and even the
                butt.
              </p>
            </AccordionItem>

            <AccordionItem title="Do you have same-day appointments available?">
              <p>
                Sometimes, yes. I offer same-day appointments on a limited
                basis. Please{" "}
                <a
                  href={COMPANY.phoneHref}
                  className="text-carnation font-medium underline"
                >
                  call
                </a>{" "}
                to ask about availability.
              </p>
            </AccordionItem>

            <AccordionItem title="Are treatments safe to do at home?">
              <p>
                Yes. Your safety is my top priority. I perform all treatments
                myself, using sterile technique and medical-grade supplies. You
                can expect the same standards you would find in a medical
                office, along with the added comfort and privacy of your own
                space.
              </p>
            </AccordionItem>

            <AccordionItem title="Where are your NYC locations?">
              <div>
                Wherever you are! I can, however, offer a more flexible schedule
                in the following areas:
                <br />
                <br />
                <strong>West Brooklyn</strong> | Red Hook, Columbia Waterfront,
                Carroll Gardens, Boerum Hill, Cobble Hill, Dumbo, Gowanus, Park
                Slope, South Slope, etc.
                <br />
                <strong>Central Brooklyn</strong> | Downtown Brooklyn, Clinton
                Hill, Fort Greene, Prospect Heights, etc.
                <br />
                <strong>Lower Manhattan</strong> | Lower East Side, SoHo,
                Tribeca, Financial District (FiDi), West Village, etc.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
