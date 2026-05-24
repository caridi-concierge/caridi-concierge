import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";
import { treatments } from "@/content/treatments/treatments";
import type { TreatmentMetadata } from "@/model/treatments/Treatment";

function ordinalOf(t: TreatmentMetadata) {
  return treatments.findIndex((x) => x.id === t.id) + 1;
}

function FeatureRow({
  t,
  reverse,
  showImage,
  showPricing,
}: {
  t: TreatmentMetadata;
  reverse: boolean;
  showImage: boolean;
  showPricing: boolean;
}) {
  return (
    <article
      id={t.id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line scroll-mt-24"
    >
      {showImage && (
        <div className={`bg-ivory-3 ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[480px] overflow-hidden bg-bone">
            <Image
              src={t.imgSrc}
              alt={t.imgAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
        </div>
      )}
      <div
        className={`bg-ivory-3 flex flex-col justify-center gap-5 sm:gap-[22px] px-7 sm:px-14 py-10 sm:py-14 ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <Eyebrow className="text-brass text-[10px]">
          {ordinalOf(t).toString().padStart(2, "0")} · {t.products}
        </Eyebrow>
        <h3 className="font-display font-normal text-4xl sm:text-5xl lg:text-[52px] leading-[1.05]">
          {t.title}
        </h3>
        <p className="font-body text-[15px] leading-[1.7] text-ink/70 max-w-[520px]">
          {t.description}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4 pt-4 mt-1 border-t border-line">
          {showPricing && (
            <div>
              <Eyebrow className="text-brass text-[10px] mb-1.5">From*</Eyebrow>
              <div className="font-display font-normal text-[26px]">
                ${t.from.toLocaleString()}{" "}
                {t.unit && (
                  <span className="font-body italic text-[13px] text-ink/70">
                    {t.unit}
                  </span>
                )}
              </div>
            </div>
          )}
          <div>
            <Eyebrow className="text-brass text-[10px] mb-1.5">Visit</Eyebrow>
            <div className="font-display font-normal text-[22px]">
              {t.duration}
            </div>
          </div>
          <Link
            href={t.ctaHref}
            aria-label={`Read about ${t.title}`}
            className="ml-auto inline-flex items-center gap-2.5 pb-1 border-b border-ink font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass hover:border-brass"
          >
            Learn more <IconArrow className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function TreatmentsDetail({
  showImages = true,
  showPricing = true,
}: {
  showImages?: boolean;
  showPricing?: boolean;
}) {
  return (
    <section className="bg-ivory-3 text-ink border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[90px]">
        {/* Section header */}
        <div className="mb-12 lg:mb-[60px]">
          <Eyebrow withDash className="text-brass mb-4">
            In detail
          </Eyebrow>
          <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05]">
            The full{" "}
            <em className="not-italic italic font-light text-brass">
              repertoire.
            </em>
          </h2>
        </div>

        {/* Alternating full-width rows */}
        <div className="space-y-16 lg:space-y-24">
          {treatments.map((t, i) => (
            <FeatureRow
              key={t.id}
              t={t}
              reverse={i % 2 === 1}
              showImage={showImages}
              showPricing={showPricing}
            />
          ))}
        </div>

        {/* Pricing footnote */}
        {showPricing && (
          <p className="mt-12 font-mono text-[11px] leading-[1.7] text-ink/55">
            * Pricing reflects current concierge ranges and is reviewed at
            consultation. Series and bundled visits receive concierge rates.
          </p>
        )}
      </div>
    </section>
  );
}
