"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";
import { treatments } from "@/content/treatments/treatments";
import type { TreatmentCategory } from "@/model/treatments/Treatment";

const CATEGORIES: ("All" | TreatmentCategory)[] = [
  "All",
  "Neuromodulators",
  "Filler",
  "Skin",
  "Consults",
];

function categoryCount(category: TreatmentCategory) {
  return treatments.filter((t) => t.category === category).length;
}

export default function TreatmentsIndex({
  showPricing = true,
}: {
  showPricing?: boolean;
}) {
  const [active, setActive] = useState<"All" | TreatmentCategory>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? treatments
        : treatments.filter((t) => t.category === active),
    [active]
  );

  return (
    <section className="bg-ivory text-ink">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-16 lg:pt-[70px] pb-20 lg:pb-[90px]">
        {/* Top row */}
        <div className="pb-6 mb-9 border-b border-line">
          <Eyebrow withDash className="text-brass">
            Index · {filtered.length} of {treatments.length}
          </Eyebrow>
        </div>

        {/* Filter bar */}
        <div className="mb-8 flex flex-wrap items-center gap-x-9 gap-y-3">
          <Eyebrow as="span" className="text-brass">
            Filter
          </Eyebrow>
          {CATEGORIES.map((c) => {
            const on = c === active;
            const count = c === "All" ? treatments.length : categoryCount(c);
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                aria-pressed={on}
                className={[
                  "font-body text-[11px] font-medium uppercase tracking-[0.32em] py-2 transition-colors duration-200 border-b",
                  on
                    ? "text-ink border-brass"
                    : "text-ink/55 border-transparent hover:text-ink",
                ].join(" ")}
              >
                {c}
                {c !== "All" && (
                  <span className="ml-1.5 opacity-50">{count}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dotted-leader rows */}
        <ul className="list-none p-0 m-0">
          {filtered.map((t) => {
            const ordinal =
              treatments.findIndex((x) => x.id === t.id) + 1;
            return (
              <li key={t.id} className="border-b border-line first:border-t">
                <Link
                  href={`#${t.id}`}
                  className="group grid grid-cols-[28px_1fr] sm:grid-cols-[44px_1fr_auto_auto] items-baseline gap-x-4 sm:gap-x-6 py-5 sm:py-[22px] text-ink"
                >
                  <Eyebrow className="text-brass">
                    {ordinal.toString().padStart(2, "0")}
                  </Eyebrow>

                  {/* Title + dotted leader + subtitle */}
                  <div className="flex items-baseline gap-3 sm:gap-4 overflow-hidden">
                    <span className="font-display font-light text-2xl sm:text-3xl whitespace-nowrap transition-colors duration-200 group-hover:text-brass">
                      {t.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden sm:block flex-1 border-b border-dotted border-line-strong mb-2"
                    />
                    <Eyebrow
                      as="span"
                      className="hidden sm:inline text-ink/55 whitespace-nowrap"
                    >
                      {t.products}
                    </Eyebrow>
                  </div>

                  {/* Duration */}
                  <Eyebrow
                    as="span"
                    className="hidden sm:inline text-ink/55 whitespace-nowrap col-start-3"
                  >
                    {t.duration}
                  </Eyebrow>

                  {/* Price or Read more */}
                  <div className="hidden sm:flex sm:items-baseline sm:justify-end sm:min-w-[140px] col-start-4">
                    {showPricing ? (
                      <span className="font-display font-normal italic text-[22px] text-brass whitespace-nowrap">
                        from ${t.from.toLocaleString()}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-body text-[10px] font-medium uppercase tracking-[0.32em] text-ink">
                        Read more <IconArrow className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  {/* Mobile-only price+subtitle row */}
                  <div className="col-span-2 sm:hidden flex flex-wrap items-baseline gap-x-4 gap-y-1 -mt-1.5">
                    <Eyebrow as="span" className="text-ink/55">
                      {t.products}
                    </Eyebrow>
                    <Eyebrow as="span" className="text-ink/55">
                      {t.duration}
                    </Eyebrow>
                    {showPricing && (
                      <span className="font-display font-normal italic text-lg text-brass">
                        from ${t.from.toLocaleString()}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
