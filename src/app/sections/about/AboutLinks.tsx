import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

type LinkCard = {
  eyebrow: string;
  title: string;
  italicTail: string;
  body: string;
  ctaLabel: string;
  href: string;
};

const LINKS: LinkCard[] = [
  {
    eyebrow: "Treatments",
    title: "What I",
    italicTail: "do.",
    body: "Five treatments, performed personally — neuromodulators, dermal fillers, biostimulators, chemical peels, and consultations.",
    ctaLabel: "See the menu",
    href: "/treatments",
  },
  {
    eyebrow: "Locations",
    title: "Where I",
    italicTail: "work.",
    body: "A clinic in Gowanus on Wednesdays, a private studio in Red Hook by invitation, and in-home visits across Manhattan and Brooklyn.",
    ctaLabel: "All locations",
    href: "/locations",
  },
  {
    eyebrow: "Journal",
    title: "Notes from the",
    italicTail: "practice.",
    body: "Pre-treatment guides, aftercare, and the occasional clinical aside — written by me.",
    ctaLabel: "Read the journal",
    href: "/blog",
  },
];

export default function AboutLinksSection() {
  return (
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="max-w-[760px]">
          <Eyebrow className="text-brass mb-6" withDash>
            More to read
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.01em] text-ink">
            The rest of the{" "}
            <em className="not-italic italic font-light text-brass">
              practice.
            </em>
          </h2>
        </div>

        <div className="mt-12 lg:mt-16 grid gap-px bg-line lg:grid-cols-3">
          {LINKS.map((m) => (
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
