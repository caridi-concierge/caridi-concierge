import Link from "next/link";
import { LOCATIONS } from "@/content/locations";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

const TYPE_LABEL: Record<string, string> = {
  studio: "Private Studio",
  gowanus: "Clinic",
  concierge: "Concierge",
};

const TITLE_OVERRIDE: Record<string, string> = {
  concierge: "Your home",
};

type Props = {
  currentSlug: string;
};

export default function SisterLocationsSection({ currentSlug }: Props) {
  const others = LOCATIONS.filter((l) => l.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="max-w-[760px] mb-10 lg:mb-14">
          <Eyebrow className="text-brass mb-5" withDash>
            Or, somewhere else
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
            The other ways to{" "}
            <em className="not-italic italic font-light text-brass">
              visit.
            </em>
          </h2>
        </div>

        <div className="grid gap-px bg-line lg:grid-cols-2">
          {others.map((loc) => {
            const label = TYPE_LABEL[loc.id] ?? loc.type;
            const title = TITLE_OVERRIDE[loc.id] ?? loc.name;
            return (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex flex-col gap-4 bg-ivory-2 p-7 sm:p-9"
              >
                <Eyebrow className="text-brass" withDash>
                  {label} · {loc.statusLine}
                </Eyebrow>
                <h3 className="font-display font-normal text-[26px] sm:text-[30px] leading-[1.1] text-ink transition-colors duration-200 group-hover:text-brass">
                  {title}
                </h3>
                <p className="font-body text-[14px] leading-[1.7] text-ink/70 max-w-[460px] flex-1">
                  {loc.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 group-hover:text-brass">
                  Visit detail <IconArrow className="w-3 h-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
