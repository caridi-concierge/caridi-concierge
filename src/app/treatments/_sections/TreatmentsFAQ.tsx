import { Accordion, AccordionItem } from "@/components/Accordion";
import Eyebrow from "@/components/Eyebrow";

export default function TreatmentsFAQ() {
  return (
    <section className="bg-ivory text-ink">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
          {/* Left: heading */}
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              Treatment questions
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[52px] leading-[1.08]">
              Honest answers,{" "}
              <em className="not-italic italic font-light text-brass">
                before you book.
              </em>
            </h2>
          </div>

          {/* Right: accordion */}
          <div>
            <Accordion>
              <AccordionItem title="How long do results last?">
                <p>
                  Neuromodulators last 3–4 months on average. Dermal fillers,
                  depending on the product and area, last 9–18 months.
                  Biostimulators build collagen gradually and can support skin
                  quality for up to two years. Peels are typically performed
                  in a series of three to six.
                </p>
              </AccordionItem>

              <AccordionItem title="Do the treatments hurt?">
                <p>
                  Discomfort is minimal. Topical anesthetic is applied before
                  injection treatments; many filler products include
                  lidocaine. Most clients describe the experience as a series
                  of brief pinches.
                </p>
              </AccordionItem>

              <AccordionItem title="What about downtime?">
                <p>
                  Neuromodulators have no real downtime. Filler and
                  biostimulator visits may produce small bruises or swelling
                  for 24–72 hours. We plan around your calendar and important
                  dates.
                </p>
              </AccordionItem>

              <AccordionItem title="Can I combine treatments in one visit?">
                <p>
                  Often, yes. Many clients pair Botox with a small filler
                  refresh, or a peel with a consult. We sequence carefully—
                  what to do today, what to wait on—as part of your plan.
                </p>
              </AccordionItem>

              <AccordionItem title="How is pricing structured?">
                <p>
                  Neuromodulators are priced per unit. Fillers and
                  biostimulators per syringe or vial. Peels and consultations
                  are flat. Plans and series receive concierge pricing—we&apos;ll
                  review with you transparently before treatment.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
