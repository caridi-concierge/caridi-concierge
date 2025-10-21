// src/components/TreatmentAreasSection.tsx
"use client";

import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/Accordion";
import type { TreatmentAreasProps } from "@/model/treatments/Treatment";
import PrimaryButton from "@/components/PrimaryButton";
import Container from "@/components/Container";

export default function TreatmentAreasLayout({
  sectionTitle,
  summary,
  areas,
  ctaHref,
  ctaText,
}: TreatmentAreasProps) {
  return (
    <section className="py-16 bg-champagne">
      <Container className="container mx-auto px-4">
        {/* Decorative SVG */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/Decor01.svg"
            alt=""
            width={93}
            height={108}
            className="h-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="font-fraunces text-3xl md:text-4xl text-center text-outer-space mb-12">
          {sectionTitle}
        </h2>

        {/* Short summary paragraph */}
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
          {summary}
        </p>

        {/* Accordion grid */}
        <div className="max-w-4xl mx-auto">
          <Accordion className="space-y-6">
              {areas.map((area, index) => (
                <AccordionItem key={index} title={area.title} defaultOpen={index === 0}>
                  <ul className="list-none space-y-3 text-md text-gray-700">
                    {area.items.map((item) => (
                      <li key={item.label}>
                        <strong itemProp="name">{item.label}</strong> —{" "}
                        <span itemProp="description">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <PrimaryButton
            href={ctaHref}
            variant="secondary"
            className="bg-steel-blue hover:text-outer-space hover:border-outer-space"
          >
            {ctaText}
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
