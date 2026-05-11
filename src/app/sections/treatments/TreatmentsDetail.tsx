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
  showImage,
  showPricing,
}: {
  t: TreatmentMetadata;
  showImage: boolean;
  showPricing: boolean;
}) {
  return (
    <article
      id={t.id}
      className={`grid grid-cols-1 ${
        showImage ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.4fr]"
      } gap-px bg-line scroll-mt-24`}
    >
      {showImage && (
        <div className="bg-ivory-3">
          <div className="relative w-full aspect-[5/4] overflow-hidden bg-bone">
            <Image
              src={t.imgSrc}
              alt={t.imgAlt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
        </div>
      )}
      <div className="bg-ivory-3 flex flex-col justify-center gap-5 sm:gap-[22px] px-7 sm:px-14 py-10 sm:py-12">
        <Eyebrow className="text-brass text-[10px]">
          {ordinalOf(t).toString().padStart(2, "0")} · Featured · {t.products}
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
            Read the detail <IconArrow className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function DetailCard({
  t,
  showImage,
  showPricing,
}: {
  t: TreatmentMetadata;
  showImage: boolean;
  showPricing: boolean;
}) {
  return (
    <article
      id={t.id}
      className="bg-ivory-3 p-8 pb-9 flex flex-col gap-[18px] scroll-mt-24"
    >
      {showImage && (
        <div className="relative w-full aspect-[5/4] overflow-hidden bg-bone">
          <Image
            src={t.imgSrc}
            alt={t.imgAlt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            style={{ filter: "saturate(0.9)" }}
          />
        </div>
      )}
      <Eyebrow className="text-brass text-[10px]">
        {ordinalOf(t).toString().padStart(2, "0")} · {t.products}
      </Eyebrow>
      <h3 className="font-display font-normal text-3xl leading-[1.1]">
        {t.title}
      </h3>
      <p className="font-body text-sm leading-[1.7] text-ink/70">
        {t.description}
      </p>
      <div className="mt-auto pt-5 border-t border-line flex items-baseline justify-between gap-3">
        {showPricing ? (
          <div>
            <div className="font-display font-normal text-lg">
              From ${t.from.toLocaleString()}
            </div>
            <Eyebrow className="text-ink/55 mt-1">
              {t.unit ? t.unit : `· ${t.duration}`}
            </Eyebrow>
          </div>
        ) : (
          <Eyebrow className="text-ink/55">{t.duration}</Eyebrow>
        )}
        <Link
          href={t.ctaHref}
          aria-label={`Learn more about ${t.title}`}
          className="inline-flex items-center gap-2 font-body text-[10px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass"
        >
          Learn more <IconArrow className="w-3 h-3" />
        </Link>
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
  const featured = treatments.find((t) => t.featured) ?? treatments[0];
  const rest = treatments.filter((t) => t.id !== featured.id);

  // Pad partial last row in the 3-col grid (matches home Treatments approach).
  const smFillers = (2 - (rest.length % 2)) % 2;
  const lgFillers = (3 - (rest.length % 3)) % 3;
  const fillerCount = Math.max(smFillers, lgFillers);

  return (
    <section className="bg-ivory-3 text-ink border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:pt-[90px] lg:pb-[110px]">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 lg:mb-[50px]">
          <div>
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
          <Eyebrow className="text-ink/55">
            Showing {treatments.length}{" "}
            {treatments.length === 1 ? "service" : "services"}
          </Eyebrow>
        </div>

        {/* Featured row */}
        <FeatureRow t={featured} showImage={showImages} showPricing={showPricing} />

        {/* Rest in a hairline 3-col grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 mt-px">
            {rest.map((t) => (
              <DetailCard
                key={t.id}
                t={t}
                showImage={showImages}
                showPricing={showPricing}
              />
            ))}
            {Array.from({ length: fillerCount }).map((_, i) => {
              const visibleAtSm = i < smFillers;
              const visibleAtLg = i < lgFillers;
              return (
                <div
                  key={`filler-${i}`}
                  aria-hidden="true"
                  className={[
                    "bg-ivory-3",
                    "hidden",
                    visibleAtSm ? "sm:block" : "sm:hidden",
                    visibleAtLg ? "lg:block" : "lg:hidden",
                  ].join(" ")}
                />
              );
            })}
          </div>
        )}

        {/* Pricing footnote */}
        {showPricing && (
          <p className="mt-9 font-mono text-[11px] leading-[1.7] text-ink/55">
            * Pricing reflects current concierge ranges and is reviewed at
            consultation. Series and bundled visits receive concierge rates.
          </p>
        )}
      </div>
    </section>
  );
}
