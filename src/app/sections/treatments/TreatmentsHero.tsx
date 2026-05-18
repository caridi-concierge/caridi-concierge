import Eyebrow from "@/components/Eyebrow";
import { treatments } from "@/content/treatments/treatments";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display font-light text-[44px] leading-none text-ink">
        {n}
      </div>
      <Eyebrow className="text-brass mt-2.5">{label}</Eyebrow>
    </div>
  );
}

export default function TreatmentsHero() {
  const services = treatments.length;
  const categories = new Set(treatments.map((t) => t.category)).size;

  return (
    <section className="bg-ivory text-ink border-b border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-24 lg:pt-[100px] pb-12 lg:pb-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-end">
          {/* Left: lockup */}
          <div>
            <Eyebrow className="text-brass mb-9 flex items-center gap-3.5">
              <span
                aria-hidden="true"
                className="inline-block w-6 h-px bg-brass"
              />
              Treatments · The Repertoire
            </Eyebrow>
            <h1 className="font-display font-light text-[48px] sm:text-[72px] lg:text-[96px] leading-[0.98] tracking-[-0.015em]">
              A discreet repertoire{" "}
              <em className="not-italic italic font-light text-brass">
                of refinements.
              </em>
            </h1>
            <p className="mt-9 max-w-[520px] text-base leading-[1.7] font-light text-ink/70">
              Five services, one physician. Each treatment is calibrated to
              your face, your downtime, your calendar—not a menu of upsells.
            </p>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-3 gap-10 pt-7 border-t border-line">
            <Stat n={pad(services)} label="Services" />
            <Stat n={pad(categories)} label="Categories" />
            <Stat n="01" label="Physician" />
          </div>
        </div>
      </div>
    </section>
  );
}
