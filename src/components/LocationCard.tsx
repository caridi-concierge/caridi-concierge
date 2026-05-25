import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";
import { Location } from "@/lib/constants/locations";

const TYPE_LABEL: Record<string, string> = {
  studio: "Private Studio",
  gowanus: "Clinic",
  concierge: "Concierge",
};

const TITLE_OVERRIDE: Record<string, string> = {
  concierge: "Your home",
};

export function LocationCard({ loc, ordinal }: { loc: Location; ordinal: number }) {
  const { address } = loc;
  const primaryAddress =
    address.complete ||
    [address.streetAddress1, address.streetAddress2].filter(Boolean).join(", ");
  const eyebrowLabel = TYPE_LABEL[loc.id] ?? loc.type;
  const title = TITLE_OVERRIDE[loc.id] ?? loc.name;
  const padded = ordinal.toString().padStart(2, "0");

  return (
    <article className="border-b border-line first:border-t">
      <Link
        href={`/locations/${loc.slug}`}
        aria-label={`${eyebrowLabel} — ${title}`}
        className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start sm:items-center gap-3 sm:gap-7 py-7 sm:py-8 transition-colors duration-200"
      >
        <div className="min-w-0">
          <Eyebrow className="text-brass text-[10px] mb-2">
            {padded} — {eyebrowLabel}
            <span className="ml-3 text-ink/55">· {loc.statusLine}</span>
            {loc.badge && (
              <span className="ml-3 text-ink/55">· {loc.badge}</span>
            )}
          </Eyebrow>
          <h2 className="font-display font-normal text-2xl sm:text-[28px] leading-[1.1] text-ink transition-colors duration-200 group-hover:text-brass">
            {title}
          </h2>
          {primaryAddress && (
            <p className="font-body text-[13px] leading-[1.6] text-ink/55 mt-1.5">
              {primaryAddress}
            </p>
          )}
          <p className="font-body text-[14px] leading-[1.7] text-ink/70 mt-2 max-w-[520px]">
            {loc.description}
          </p>
        </div>
        <div className="hidden sm:block text-right self-center">
          <span className="inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 group-hover:text-brass">
            Visit <IconArrow className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </article>
  );
}
