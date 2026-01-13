// app/sections/locations/LocationFAQ.tsx
"use client";

import Container from "@/components/Container";
import { Accordion, AccordionItem } from "@/components/Accordion";
import type { LocationContent } from "@/content/locations/types";

interface LocationFAQProps {
  content: LocationContent['faqs'];
  locationName: string;
}

export default function LocationFAQ({ content, locationName }: LocationFAQProps) {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-fraunces text-4xl md:text-5xl text-outer-space mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-outer-space/80">
              Common questions about our {locationName} location
            </p>
          </div>

          <Accordion>
            {content.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <div className="text-outer-space/80 leading-relaxed">
                  {faq.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}