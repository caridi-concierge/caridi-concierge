import Link from "next/link";
import type {
  TreatmentDetailContent,
  TreatmentDetailPricingRow,
} from "@/content/treatments/types";
import IconArrow from "@/components/icons/IconArrow";

type Props = {
  treatment: TreatmentDetailContent;
};

function getMinPricing(
  treatment: TreatmentDetailContent
): TreatmentDetailPricingRow | undefined {
  if (!treatment.pricing || treatment.pricing.length === 0) return undefined;
  return treatment.pricing.reduce((a, b) => (a.from <= b.from ? a : b));
}

function formatPrice(row: TreatmentDetailPricingRow): string {
  const amount = `$${row.from.toLocaleString("en-US")}`;
  const unit = row.unit.split(" · ")[0].trim();
  return unit ? `${amount} ${unit}` : amount;
}

function getVisitDuration(
  treatment: TreatmentDetailContent
): string | undefined {
  const row = treatment.spec.find((s) => s.l.toLowerCase() === "visit");
  return row?.v;
}

export default function LocationTreatmentCard({ treatment }: Props) {
  const minPrice = getMinPricing(treatment);
  const visit = getVisitDuration(treatment);

  return (
    <Link
      href={`/treatments/${treatment.slug}`}
      className="group flex h-full flex-col gap-5 bg-ivory p-7 sm:p-9"
      aria-label={`About ${treatment.title}`}
    >
      {treatment.subtitle && (
        <div className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-brass">
          {treatment.subtitle}
        </div>
      )}

      <h3 className="font-display font-normal text-[26px] sm:text-[30px] leading-[1.1] text-ink transition-colors duration-200 group-hover:text-brass">
        {treatment.title}
        {treatment.italic && (
          <>
            {" "}
            <em className="not-italic italic font-light text-brass">
              {treatment.italic}
            </em>
          </>
        )}
      </h3>

      <p className="font-body text-[14px] leading-[1.7] text-ink/70 flex-1">
        {treatment.lede}
      </p>

      <div className="mt-auto flex flex-wrap items-baseline justify-between gap-3 border-t border-line pt-5">
        <div className="flex flex-wrap items-baseline gap-2">
          {minPrice && (
            <>
              <span className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55">
                From
              </span>
              <span className="font-display font-light italic text-[18px] leading-none text-brass">
                {formatPrice(minPrice)}
              </span>
            </>
          )}
          {minPrice && visit && (
            <span aria-hidden="true" className="text-ink/30">
              ·
            </span>
          )}
          {visit && (
            <span className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55">
              Visit {visit}
            </span>
          )}
        </div>
        <span className="inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 group-hover:text-brass">
          Read more <IconArrow className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
