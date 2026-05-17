import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

type Mode = {
  eyebrow: string;
  title: string;
  italicTail: string;
  body: string;
  ctaLabel: string;
  href: string;
};

const MODES: Mode[] = [
  {
    eyebrow: "Concierge",
    title: "In your",
    italicTail: "home.",
    body: "Across Manhattan and Brooklyn primarily. I bring sterile setup and unhurried care to your space.",
    ctaLabel: "About concierge service",
    href: "/locations/in-home",
  },
  {
    eyebrow: "Private studio",
    title: "Or, in",
    italicTail: "Gowanus.",
    body: "A small clinical space, Wednesdays. The same standard, slightly more capacity than an in-home visit.",
    ctaLabel: "The Gowanus clinic",
    href: "/locations/gowanus",
  },
  {
    eyebrow: "Consultation",
    title: "Begin with a",
    italicTail: "conversation.",
    body: "Sixty private minutes. The fee credits to your first treatment.",
    ctaLabel: "Schedule a consult",
    href: "/book",
  },
];

export default function AboutModesSection() {
  return (
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="max-w-[760px]">
          <Eyebrow className="text-brass mb-6" withDash>
            How I work
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.01em] text-ink">
            Three ways{" "}
            <em className="not-italic italic font-light text-brass">
              to begin.
            </em>
          </h2>
        </div>

        <div className="mt-12 lg:mt-16 grid gap-px bg-line lg:grid-cols-3">
          {MODES.map((m) => (
            <article
              key={m.href}
              className="flex flex-col gap-5 bg-ivory-2 p-7 sm:p-9"
            >
              <Eyebrow className="text-brass" withDash>
                {m.eyebrow}
              </Eyebrow>
              <h3 className="font-display font-normal text-[26px] sm:text-[30px] leading-[1.1] text-ink">
                {m.title}{" "}
                <em className="not-italic italic font-light text-brass">
                  {m.italicTail}
                </em>
              </h3>
              <p className="font-body text-[14px] leading-[1.7] text-ink/70 flex-1">
                {m.body}
              </p>
              <Link
                href={m.href}
                className="mt-2 inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass"
              >
                {m.ctaLabel} <IconArrow className="w-3 h-3" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
