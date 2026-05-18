import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export default function AboutHero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-16 lg:pt-[80px] pb-12 lg:pb-[72px]">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 font-body text-[10px] font-medium tracking-[0.32em] uppercase">
            <li>
              <Link
                href="/"
                className="text-ink/55 transition-colors duration-200 hover:text-brass"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/30">
              /
            </li>
            <li className="text-brass" aria-current="page">
              About
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div>
            <Eyebrow className="text-brass mb-9 flex items-center gap-3.5">
              <span aria-hidden="true" className="inline-block w-6 h-px bg-brass" />
              In my words
            </Eyebrow>
            <h1 className="font-display font-light text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-0.015em] max-w-[640px]">
              A small practice,{" "}
              <em className="not-italic italic font-light text-brass">
                by design.
              </em>
            </h1>
            <p className="mt-8 max-w-[560px] text-[17px] leading-[1.7] font-light text-ink/70">
              I&apos;m Dr. Cristina Caridi. Caridi Concierge is my practice — a
              small, by-appointment aesthetic medicine clinic serving private
              clients across New York City. Every consultation, plan, and
              treatment is performed personally.
            </p>
          </div>

          <div className="w-full">
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto lg:ml-auto bg-bone overflow-hidden">
              <Image
                src="/images/cc_headshot_white_hq_crop_edit.webp"
                alt="Dr. Cristina Caridi, founder of Caridi Concierge."
                fill
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover"
                style={{ filter: "saturate(0.85) brightness(0.97)" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
