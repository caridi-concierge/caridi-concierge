import type { ProcessStep } from "@/content/locations/types";
import Eyebrow from "@/components/Eyebrow";

type Props = {
  process: ProcessStep[];
};

export default function LocationProcess({ process }: Props) {
  if (!process || process.length === 0) return null;

  return (
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <Eyebrow className="text-brass mb-5" withDash>
            The visit
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
            In four{" "}
            <em className="not-italic italic font-light text-brass">
              moments.
            </em>
          </h2>
        </div>

        <ol className="grid gap-px bg-line lg:grid-cols-4">
          {process.map((step, i) => (
            <li
              key={i}
              className="flex flex-col gap-4 bg-ivory-2 p-7 sm:p-9"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display font-light italic text-[22px] leading-none text-brass">
                  0{i + 1}
                </span>
                <span className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55">
                  {step.meta}
                </span>
              </div>
              <h3 className="font-display font-normal text-[22px] sm:text-[24px] leading-[1.15] text-ink">
                {step.title}
              </h3>
              <p className="font-body text-[14px] leading-[1.7] text-ink/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
