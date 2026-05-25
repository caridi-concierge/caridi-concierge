import type { SpaceDetail } from "@/content/locations/types";
import Eyebrow from "@/components/Eyebrow";

type Props = {
  space: SpaceDetail[];
};

export default function LocationSpace({ space }: Props) {
  if (!space || space.length === 0) return null;

  return (
    <section className="bg-ivory border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="grid gap-10 lg:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] items-start">
          <div>
            <Eyebrow className="text-brass mb-5" withDash>
              The space
            </Eyebrow>
            <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
              Up{" "}
              <em className="not-italic italic font-light text-brass">
                close.
              </em>
            </h2>
            <p className="mt-5 font-body text-[14px] leading-[1.6] text-ink/55 max-w-[360px]">
              A few practical notes before your visit.
            </p>
          </div>
          <dl className="m-0">
            {space.map((item, i) => (
              <div
                key={item.label}
                className={`grid gap-3 sm:grid-cols-[160px_1fr] sm:gap-8 py-5 ${
                  i === 0 ? "border-t border-line" : ""
                } border-b border-line`}
              >
                <dt className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55 self-baseline">
                  {item.label}
                </dt>
                <dd className="m-0 font-body text-[15px] sm:text-[16px] leading-[1.6] text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
