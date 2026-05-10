import Link from "next/link";
import { treatments } from "@/content/treatments/treatments";
import TreatmentCard from "@/components/TreatmentCard";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

export default function TreatmentsSection() {
  // Pad partial rows. The grid uses `bg-line` + `gap-px` to draw hairlines, which
  // means empty cells in the last row show as a tinted band. Fillers match the
  // section bg so they read as continuation of the page.
  const len = treatments.length;
  const smFillers = (2 - (len % 2)) % 2; // 2-col last-row gap
  const lgFillers = (3 - (len % 3)) % 3; // 3-col last-row gap
  const fillerCount = Math.max(smFillers, lgFillers);

  return (
    <section className="bg-ivory-3 text-ink">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        {/* Section header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10 mb-14">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              Signature services
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] max-w-[640px]">
              A discreet repertoire{" "}
              <em className="not-italic italic font-light">of refinements.</em>
            </h2>
          </div>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2.5 self-start md:self-end pb-1.5 border-b border-ink font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass hover:border-brass"
          >
            All treatments <IconArrow />
          </Link>
        </div>

        {/* Hairline-separated grid */}
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, i) => (
            <TreatmentCard key={treatment.id} {...treatment} index={i} />
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
      </div>
    </section>
  );
}
