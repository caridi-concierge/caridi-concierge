import Container from "@/components/Container";
import { ImageCarousel, CarouselSlide } from "@/components/ImageCarousel";
import Link from "next/link";
import { useMemo } from "react";


export default function ResultsCarouselSection() {
  // Curate these, keep to ~5-8 for homepage.
  const slides: CarouselSlide[] = useMemo(
    () => [
      {
        src: "/images/cheek-filler-before-after.webp",
        alt: "Cheek filler before and after",
        caption: "Cheek filler before and after",
      },
      {
        src: "/images/results/result-02.jpg",
        alt: "Cheek and midface support result",
        caption: "Soft lift, natural contour",
      },
      {
        src: "/images/results/result-03.jpg",
        alt: "Wrinkle reduction result with natural movement",
        caption: "Natural movement preserved",
      },
      {
        src: "/images/results/result-04.jpg",
        alt: "Skin quality improvement result",
        caption: "Skin quality focus",
      },
      {
        src: "/images/results/result-05.jpg",
        alt: "Jawline definition result",
        caption: "Refined structure",
      },
    ],
    []
  );

  return (
    <section className="bg-merino py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Copy */}
          <div className="lg:col-span-5">
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-outer-space">
              Subtle, Physician-Led Results
            </h2>

            <p className="mt-4 text-outer-space/80 text-base md:text-lg leading-relaxed">
              Thoughtful treatments designed to restore balance, preserve natural movement,
              and enhance skin quality over time.
            </p>

            <p className="mt-4 text-outer-space/80 text-base leading-relaxed">
              Every face is different, and so is every plan. These examples reflect Dr. Caridi’s
              conservative approach, focused on proportion, restraint, and results that age well.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border px-8 py-2.5 font-satoshi text-base font-medium transition-colors bg-white border-outer-space text-outer-space hover:bg-carnation hover:text-merino"
                aria-label="View more results on Instagram"
              >
                View more results on Instagram
              </Link>

              {/* Optional: a secondary link to consult */}
              <Link
                href="/treatments/consult"
                className="text-sm font-semibold text-carnation underline underline-offset-4 hover:text-outer-space transition-colors"
                aria-label="Request a consultation"
              >
                Request a consultation
              </Link>
            </div>
          </div>

          {/* Carousel */}
          <div className="lg:col-span-7">
            <ImageCarousel slides={slides} ariaLabel="Results carousel" />

            {/* Optional small disclaimer (keep it calm, not legalese) */}
            <p className="mt-3 text-xs text-outer-space/60 leading-relaxed">
              Results vary by individual and treatment plan. Images reflect real patients with consent.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}