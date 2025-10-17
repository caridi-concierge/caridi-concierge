"use client";

import { Accordion, AccordionItem } from "@/components/Accordion";
import Container from "@/components/Container";
import { biostimulatoryFillersFAQSchema } from "@/content/schemas/treatments/biostimulatoryFillersFAQSchema";

export default function BiostimulatoryFillersFAQSection() {
  return (
    <section className="bg-merino py-20">
      <Container className="container mx-auto grid grid-cols-1 gap-12 items-start">
        {/* Left heading */}
        <div>
          <h2 className="font-fraunces text-3xl md:text-4xl text-outer-space">
            Frequently asked questions
          </h2>
        </div>

        {/* Right accordion */}
        <div>
          <Accordion className="py-5">
          {biostimulatoryFillersFAQSchema.mainEntity.map((q, idx) => (
            <AccordionItem key={idx} title={q.name}>
              <p>{q.acceptedAnswer.text}</p>
            </AccordionItem>
          ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
