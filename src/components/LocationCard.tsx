import Link from "next/link";
import { Location } from "@/lib/constants/locations";

export function LocationCard({ loc }: { loc: Location }) {
  const { address } = loc;

  // Prefer `complete`, otherwise combine numbered address fields
  const primaryAddress =
    address.complete ||
    [address.streetAddress1, address.streetAddress2]
      .filter(Boolean)
      .join(", ");

  const hasAddress = Boolean(primaryAddress);

  return (
    <article className="rounded-2xl border border-outer-space/10 bg-white/70 backdrop-blur-sm p-5 md:p-6 shadow-sm flex flex-col gap-4">
      <div className="relative">
        {/* Clickable main area */}
        {/* <Link href={loc.slug} className="group block"> */}
          {/* Header */}
          <div className="flex items-start justify-between gap-3 pr-8">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-fraunces text-xl md:text-2xl">
                  {loc.name}
                </h2>
                {loc.badge && (
                  <span className="inline-flex items-center rounded-full border border-outer-space/20 px-2.5 py-0.5 text-xs uppercase tracking-[0.16em] text-outer-space/70">
                    {loc.badge}
                  </span>
                )}
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-outer-space/60 mt-1">
                {loc.type}
              </p>
            </div>
          </div>

          {/* Address as H3 */}
          {hasAddress && (
            <h3 className="font-medium text-base text-outer-space/80 mt-3">
              {primaryAddress}
            </h3>
          )}

          {/* Description */}
          <p className="text-sm md:text-base text-outer-space/80 mt-2">
            {loc.description}
          </p>

          {/* Right-facing arrow */}
          {/* <div className="absolute right-0 top-[1.4rem] pr-1 md:pr-2">
            <svg
              className="h-5 w-5 text-outer-space/60 group-hover:text-outer-space transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div> */}
        {/* </Link> */}
      </div>

      {/* CTAs (separate from main link) */}
      <div className="flex flex-wrap gap-3 pt-1">
        <Link
          href={loc.ctaPrimaryHref}
          className="inline-flex items-center justify-center rounded-full border border-outer-space bg-outer-space px-4 py-2 text-sm font-medium text-merino hover:bg-outer-space/90 transition"
        >
          {loc.ctaPrimaryLabel}
        </Link>

        {loc.ctaSecondaryHref && (
          <Link
            href={loc.ctaSecondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-outer-space/30 px-4 py-2 text-sm font-medium text-outer-space hover:bg-white transition"
          >
            {loc.ctaSecondaryLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
