import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

export default function TreatmentsHero() {
  return (
    <section className="bg-ivory text-ink border-b border-line">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
        {/* Copy */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-24 lg:pt-[100px] pb-12 lg:pb-[90px] lg:border-r lg:border-line">
          <Eyebrow className="text-brass mb-9 flex items-center gap-3.5">
            <span
              aria-hidden="true"
              className="inline-block w-6 h-px bg-brass"
            />
            Treatments · The Repertoire
          </Eyebrow>
          <h1 className="font-display font-light text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.015em]">
            Botox, Fillers, and Peels–{""}
            <em className="not-italic italic font-light text-brass">refined.</em>
          </h1>
          <p className="mt-8 max-w-[520px] text-base leading-[1.7] font-light text-ink/70">
            Five services, one physician. Each treatment is calibrated to your
            face, your downtime, your calendar—not a menu of upsells.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/book?source=treatments_hero"
              id="treatments-hero-cta"
              aria-label="Schedule a consultation"
              className="inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 hover:bg-teal-deep"
            >
              Schedule a consultation <IconArrow />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full min-h-[420px] lg:min-h-[600px] overflow-hidden bg-bone">
          <Image
            src="/images/treatments/botox_appt_drcaridi.webp"
            alt="Dr. Cristina Caridi performing an aesthetic treatment at Caridi Concierge."
            fill
            priority
            sizes="(min-width: 1024px) 47vw, 100vw"
            className="object-cover"
            style={{ filter: "saturate(0.85)" }}
          />
        </div>
      </div>
    </section>
  );
}
