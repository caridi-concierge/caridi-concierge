import Image from "next/image";
import Link from "next/link";
import IconArrow from "@/components/icons/IconArrow";

export default function AboutMissionSection() {
  return (
    <section className="bg-ivory py-16 lg:py-[100px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="font-display font-light text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.01em] text-ink max-w-[640px]">
              My mission{" "}
              <em className="not-italic italic font-light text-brass">
                to you.
              </em>
            </h2>

            <div className="mt-10 max-w-[600px] space-y-5 font-body text-[15px] sm:text-[16px] leading-[1.75] text-ink/70 font-light">
              <p>
                Your health and beauty are as unique as you are, and I believe
                your care should reflect that. At Caridi Concierge, I&apos;m
                dedicated to helping you look and feel your best through
                personalized, evidence-based treatments delivered directly to
                your door.
              </p>
              <p>
                My mission is simple: to provide private, customized care that
                enhances your natural beauty and supports your overall
                well-being. Whether it&apos;s wrinkle reduction, HA dermal
                fillers, or biostimulatory fillers, I tailor each treatment to
                your individual needs, without wait times or distractions.
              </p>
              <p>
                Your comfort, privacy, and satisfaction are my top priorities.
                Let me bring the spa experience to you, so you can focus on
                becoming the most confident version of yourself.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/book"
                id="about-mission-book-cta"
                className="inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 hover:bg-teal-deep"
              >
                Book a visit <IconArrow />
              </Link>
            </div>

            <p className="mt-12 font-display font-light italic text-[22px] sm:text-[26px] leading-[1.1] text-brass">
              — Cristina Caridi, MD
            </p>

            <div className="mt-6">
              <Link
                href="/staff/cristina-caridi"
                className="inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass"
              >
                Read the full biography <IconArrow className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto lg:ml-auto bg-bone overflow-hidden">
              <Image
                src="/images/headshots/cc_headshot_white_outside_hq_800px.webp"
                alt="Dr. Cristina Caridi, photographed at the practice."
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
                style={{ filter: "saturate(0.85) brightness(0.97)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
