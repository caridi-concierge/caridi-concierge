// src/components/TreatmentIntroSection.tsx
import Image from "next/image";
import type { TreatmentIntroProps } from "@/model/treatments/Treatment";
import PrimaryButton from "@/components/PrimaryButton";
import Container from "@/components/Container";

export default function TreatmentIntroSection({
  title,
  description,
  frequency,
  frequencyCtaHref,
  frequencyCtaText,
  beforeCare,
  afterCare,
}: TreatmentIntroProps) {
  return (
    <section className="py-16 bg-cream">
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

        {/* Grid: 3 rows, 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Row 1, Col 1 */}
          <div>
            <h1 className="font-fraunces text-2xl md:text-2xl font-bold text-outer-space mb-6">
              {title}
            </h1>
            {description.map((para, i) => (
              <p
                key={i}
                className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Row 1, Col 2 */}
          <div>
            <h2 className="font-fraunces font-bold text-xl text-outer-space mb-4">
              Treatment Frequency
            </h2>
            <p className="text-gray-700 text-sm md:text-base">{frequency}</p>
            <div className="mt-6">
              <PrimaryButton href={frequencyCtaHref} variant="secondary">
                {frequencyCtaText}
              </PrimaryButton>
            </div>
          </div>

          {/* Row 2 spans 2 cols */}
          <div className="md:col-span-2">
            <h2 className="font-fraunces font-bold text-xl text-outer-space mb-4">
              What to do before your treatment
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {beforeCare}
            </p>
          </div>

          {/* Row 3 spans 2 cols */}
          <div className="md:col-span-2">
            <h2 className="font-fraunces font-bold text-xl text-outer-space mb-4">
              What to do after your treatment
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {afterCare}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
