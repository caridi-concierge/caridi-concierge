// src/components/TreatmentAreasSection.tsx
"use client";

import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/Accordion";
import type { TreatmentAreasProps } from "@/model/treatments/Treatment";
import PrimaryButton from "@/components/PrimaryButton";

export default function TreatmentAreasLayout({
  sectionTitle,
  areas,
  ctaHref,
  ctaText,
}: TreatmentAreasProps) {
  return (
    <section className="py-16 bg-champagne">
      <div className="container mx-auto px-4">
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

        {/* Accordion grid */}
        <div className="max-w-4xl mx-auto">
          <Accordion className="space-y-6">
              {areas.map((area) => (
                <AccordionItem key={area.title} title={area.title}>
                  <ul className="list-none space-y-3 text-sm text-gray-700">
                    {area.items.map((item) => (
                      <li key={item.label}>
                        <strong>{item.label}</strong> | {item.description}
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
      </div>
    </section>
  );
}
