// src/components/TreatmentIntroSection.tsx
import type { TreatmentIntroProps } from "@/model/treatments/Treatment";
import Container from "@/components/Container";
import TreatmentPricingCard from "@/components/TreatmentPricingCard";
import Link from "next/link";
import Image from "next/image";

export default function TreatmentIntroSection({
  title,
  description,
  frequencyCtaHref,
  frequencyCtaText,
  beforeCare,
  afterCare,
  frequency,
  note,
  startingPrice,
}: TreatmentIntroProps) {
  return (
    <section className="pb-16 pt-10 bg-cream">
      <Container className="container mx-auto px-4">
        {/* Grid: 3 rows, 2 columns */}
        <Link
            href="/treatments"
            className="inline-flex items-center mb-4 text-sm hover:underline"
          >
            <Image
              src="/images/arrow-left.svg"
              alt="Back to Treatments"
              width={16}
              height={16}
              className="mr-2 bg-outer-space"
            />
            Treatments
            </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Row 1, Col 1 */}
          <div>
            <h1 className="font-fraunces text-2xl md:text-2xl font-bold text-outer-space mb-6">
              {title}
            </h1>
            {description.map((para, i) => (
              <p
                key={i}
                className="text-gray-700 leading-relaxed text-md md:text-base mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Row 1, Col 2 */}
          <div>
            <TreatmentPricingCard
              startingPrice={startingPrice}
              note={note}
              frequency={frequency}
              bookHref={frequencyCtaHref}
              bookButtonText={frequencyCtaText}
            />
          </div>

          {/* Row 2 spans 2 cols */}
          {beforeCare && beforeCare.trim().length > 0 && (
          <div className="md:col-span-2">
            <h2 className="font-fraunces font-bold text-xl text-outer-space mb-4">
              What to do before your treatment
            </h2>
            <p className="text-gray-700 text-base md:text-base leading-relaxed">
              {beforeCare}
            </p>
          </div>
          )}

          {/* Row 3 spans 2 cols */}
          {afterCare && afterCare.trim().length > 0 && (
            <div className="md:col-span-2">
              <h2 className="font-fraunces font-bold text-xl text-outer-space mb-4">
                What to do after your treatment
              </h2>
              <p className="text-gray-700 text-base md:text-base leading-relaxed">
                {afterCare}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
