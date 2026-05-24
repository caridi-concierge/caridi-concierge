import type { LocationContent } from "@/content/locations/types";
import Eyebrow from "@/components/Eyebrow";

type Props = {
  studioExperience: LocationContent["studioExperience"];
  overview?: string[];
  whatWeBring?: LocationContent["whatWeBring"];
};

export default function LocationOverview({
  studioExperience,
  overview,
  whatWeBring,
}: Props) {
  const hasOverview = overview && overview.length > 0;
  const hasWhatWeBring = whatWeBring && whatWeBring.length > 0;

  if (!hasOverview && !hasWhatWeBring) {
    return (
      <section className="bg-ivory-2 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink mb-6">
              {studioExperience.title}
            </h2>
            <p className="font-body text-[16px] sm:text-[17px] leading-[1.75] text-ink/70">
              {studioExperience.description}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (hasWhatWeBring) {
    return (
      <section className="bg-ivory-2 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
          <div className="max-w-[760px] mb-12 lg:mb-16">
            <Eyebrow className="text-brass mb-5" withDash>
              The service
            </Eyebrow>
            <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
              {studioExperience.title}
            </h2>
          </div>

          <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
            {hasOverview && (
              <div className="space-y-5 font-body text-[15px] sm:text-[16px] leading-[1.75] text-ink/70 font-light max-w-[560px]">
                {overview!.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
            <div>
              <Eyebrow className="text-brass mb-5" withDash>
                What I bring
              </Eyebrow>
              <dl className="m-0 border-t border-line">
                {whatWeBring!.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[140px_1fr] gap-6 py-4 border-b border-line"
                  >
                    <dt className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55 self-baseline">
                      {item.label}
                    </dt>
                    <dd className="m-0 font-body text-[14px] leading-[1.6] text-ink/70">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Single-column centered essay (studio pages without whatWeBring)
  return (
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="mx-auto max-w-[680px] text-center">
          <Eyebrow className="text-brass mb-5 justify-center" withDash>
            The service
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
            {studioExperience.title}
          </h2>
          <div className="mt-10 space-y-5 font-body text-[15px] sm:text-[16px] leading-[1.75] text-ink/70 font-light text-left">
            {overview!.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
