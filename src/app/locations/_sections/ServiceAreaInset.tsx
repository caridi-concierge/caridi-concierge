import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

type ReachRow = { label: string; areas: string };

const REACH: ReachRow[] = [
  {
    label: "Manhattan",
    areas: "Upper East · Upper West · West Village · Tribeca · SoHo · LES",
  },
  {
    label: "Brooklyn",
    areas: "Park Slope · Cobble Hill · Carroll Gardens · Red Hook · DUMBO",
  },
  {
    label: "On request",
    areas: "Queens · The Bronx · Staten Island",
  },
];

export function ServiceAreaInset() {
  return (
    <section
      aria-label="In-home reach"
      className="mt-5 border border-line bg-ivory px-5 py-5"
    >
      <Eyebrow className="text-brass mb-4" withDash>
        In-home reach
      </Eyebrow>
      <dl className="m-0">
        {REACH.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-[110px_1fr] gap-4 py-2.5 ${
              i === 0 ? "" : "border-t border-line"
            }`}
          >
            <dt className="self-baseline font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink">
              {r.label}
            </dt>
            <dd className="m-0 font-body text-[13px] leading-[1.55] text-ink/70">
              {r.areas}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-3 flex items-baseline justify-between border-t border-line pt-3">
        <span className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55">
          Outside this map?
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 font-body text-[10px] font-medium tracking-[0.32em] uppercase text-brass transition-colors duration-200 hover:text-ink"
        >
          Ask the practice <IconArrow className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
