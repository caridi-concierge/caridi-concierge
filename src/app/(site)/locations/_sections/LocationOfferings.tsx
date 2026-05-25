import Link from "next/link";
import type { LocationContent } from "@/content/locations/types";
import LocationServiceCard from "@/components/LocationServiceCard";
import LocationTreatmentCard from "@/components/LocationTreatmentCard";
import { getTreatmentDetail } from "@/content/treatments";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

interface LocationOfferingsProps {
  content: LocationContent["offerings"];
}

export default function LocationOfferings({ content }: LocationOfferingsProps) {
  const treatments = (content.treatments ?? [])
    .map((slug) => getTreatmentDetail(slug))
    .filter(
      (t): t is NonNullable<ReturnType<typeof getTreatmentDetail>> =>
        Boolean(t)
    );

  const useEditorialCards = treatments.length > 0;

  return (
    <section className="bg-ivory border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <Eyebrow className="text-brass mb-5" withDash>
            Treatments offered
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="mt-5 font-body text-[16px] leading-[1.7] text-ink/70 max-w-[560px]">
              {content.subtitle}
            </p>
          )}
        </div>

        {useEditorialCards ? (
          <div className="grid gap-px bg-line lg:grid-cols-3">
            {treatments.map((t) => (
              <LocationTreatmentCard key={t.slug} treatment={t} />
            ))}
            <AllTreatmentsCard />
          </div>
        ) : (
          <div className="grid gap-px bg-line lg:grid-cols-3">
            {content.services.map((svc) => (
              <div key={svc.title} className="bg-ivory">
                <LocationServiceCard {...svc} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function AllTreatmentsCard() {
  return (
    <Link
      href="/treatments"
      className="group flex h-full flex-col gap-5 bg-ivory p-7 sm:p-9"
      aria-label="See the full treatment menu"
    >
      <Eyebrow className="text-brass" withDash>
        More
      </Eyebrow>
      <h3 className="font-display font-normal text-[26px] sm:text-[30px] leading-[1.1] text-ink transition-colors duration-200 group-hover:text-brass">
        All{" "}
        <em className="not-italic italic font-light text-brass">treatments.</em>
      </h3>
      <p className="font-body text-[14px] leading-[1.7] text-ink/70 flex-1">
        The full menu — five treatments, performed personally. Each detail page
        covers the work, the products, the visit, and the pricing range.
      </p>
      <div className="mt-auto flex items-baseline justify-end border-t border-line pt-5">
        <span className="inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 group-hover:text-brass">
          See the menu <IconArrow className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
