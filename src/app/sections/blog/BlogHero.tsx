import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export default function BlogHero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-16 lg:pt-[80px] pb-12 lg:pb-[80px]">
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
              Blog
            </li>
          </ol>
        </nav>

        <div className="max-w-[760px]">
          <Eyebrow className="text-brass mb-9 flex items-center gap-3.5">
            <span aria-hidden="true" className="inline-block w-6 h-px bg-brass" />
            Blog
          </Eyebrow>
          <h1 className="font-display font-light text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.015em] text-ink">
            Notes from the{" "}
            <em className="not-italic italic font-light text-brass">
              practice.
            </em>
          </h1>
          <p className="mt-8 max-w-[600px] text-[16px] sm:text-[17px] leading-[1.7] font-light text-ink/70">
            Treatment guides, aftercare notes, press, and writing from the practice. Mostly Dr. Caridi, occasionally guest contributors, never sponsored
          </p>
        </div>
      </div>
    </section>
  );
}
