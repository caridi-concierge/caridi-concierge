import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-teal text-ivory"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] min-h-[640px] lg:min-h-[720px]">
        {/* Copy column */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
          <Eyebrow className="text-brass-soft mb-9 flex items-center gap-3.5">
            <span
              aria-hidden="true"
              className="inline-block w-6 h-px bg-brass-soft"
            />
            For private NYC clients
          </Eyebrow>

          <h1 className="font-display font-light text-[44px] sm:text-6xl lg:text-[84px] leading-[1.02] tracking-[-0.01em] text-pretty">
            Premium aesthetic care,{" "}
            <em className="not-italic font-light italic text-brass-soft">
              delivered.
            </em>
          </h1>

          <p className="mt-8 max-w-[460px] text-base lg:text-[16px] leading-[1.7] font-light text-ivory/80">
            Physician-led Botox and dermal filler, performed in the privacy of
            your own setting—across Manhattan, Brooklyn, and Queens. Effortless
            results, on your schedule.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              id="hero-booking-cta"
              href="/book"
              aria-label="Schedule a consultation"
              className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-8 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-teal-deep transition-colors duration-200 hover:bg-brass-soft hover:text-teal-deep"
            >
              Schedule a consultation <IconArrow />
            </Link>
            <Link
              href="/treatments"
              aria-label="View treatments"
              className="inline-flex items-center px-2 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-brass-soft transition-colors duration-200 hover:text-ivory"
            >
              View treatments
            </Link>
          </div>
        </div>

        {/* Portrait column */}
        <div className="relative px-6 sm:px-10 lg:pl-0 lg:pr-20 pb-12 lg:py-15">
          <div className="relative w-full h-full min-h-[420px] lg:min-h-0 overflow-hidden rounded-[2px]">
            <Image
              src="/images/cc_headshot_white_hq_crop_edit.webp"
              alt="Dr. Cristina Caridi, founder and physician"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[center_30%]"
              style={{ filter: "saturate(0.85) brightness(0.97)" }}
            />
            {/* Bottom scrim — keeps the nameplate readable without darkening the face */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(20,32,38,0.78) 0%, rgba(20,32,38,0.45) 45%, rgba(20,32,38,0) 100%)",
              }}
            />
            {/* Nameplate overlay */}
            <div className="absolute inset-x-7 bottom-7 flex items-end justify-between text-ivory">
              <div>
                <Eyebrow className="text-brass-soft text-[10px] mb-1.5">
                  Founder &amp; physician
                </Eyebrow>
                <div className="font-display italic text-[22px] leading-tight drop-shadow-[0_1px_2px_rgba(20,32,38,0.5)]">
                  Cristina Caridi, MD
                </div>
              </div>
              <Eyebrow className="text-ivory/85 text-[10px]">Est. NYC</Eyebrow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
