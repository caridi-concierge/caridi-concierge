"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import Container from "@/components/Container";


export type CarouselSlide = {
  src: string;
  alt: string;
  caption?: string;
  hTag?: number;
  link?: string;
};

type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type ImageCarouselProps = {
  slides: CarouselSlide[];
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
  showCaption?: boolean;
  headerText?: string | null;
  ariaLabel?: string;
  onSlideChange?: (index: number) => void;
};

export function ImageCarousel({
  slides,
  className = "",
  showDots = true,
  showArrows = true,
  showCaption = true,
  headerText = "Real outcomes, curated examples",
  ariaLabel = "Image carousel",
  onSlideChange,
}: ImageCarouselProps) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, idx));
      setActive(clamped);
      onSlideChange?.(clamped);
    },
    [onSlideChange, slides.length]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const dx = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;

    // Swipe threshold
    if (dx <= -40) next();
    if (dx >= 40) prev();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  if (slides.length === 0) return null;

  const showHeader = headerText !== null || showArrows;
  const getHeadingTag = (level?: number) => {
    if (level == null) return null;
    const safeLevel = Math.max(1, Math.min(6, level));
    return `h${safeLevel}` as HeadingTagName;
  };
  const renderCaptionContent = (slide: CarouselSlide) => {
    if (!slide.caption) return null;
    if (slide.link) {
      return (
        <Link href={slide.link} className="underline underline-offset-4 hover:text-outer-space">
          {slide.caption}
        </Link>
      );
    }
    return slide.caption;
  };

  return (
    <div className={className}>
      <div className="bg-merino rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm">
        {showHeader && (
          <div className="flex items-center justify-between gap-3">
            {headerText !== null ? (
              <p className="font-satoshi text-sm font-bold text-outer-space/80">{headerText}</p>
            ) : (
              <span aria-hidden="true" />
            )}

            {showArrows && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  disabled={active === 0}
                  className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-outer-space/80 hover:text-outer-space disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous result"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={active === slides.length - 1}
                  className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-outer-space/80 hover:text-outer-space disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next result"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        <div
          className="mt-4 overflow-hidden rounded-xl bg-white"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-label={ariaLabel}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={s.src} className="min-w-full">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>

                {showCaption && (s.caption || slides.length > 1) && (
                  <div className="p-4 flex items-center justify-between gap-4">
                    {s.caption ? (
                      (() => {
                        const HeadingTag = getHeadingTag(s.hTag);
                        if (HeadingTag) {
                          return (
                            <HeadingTag className="text-sm font-semibold text-outer-space/80">
                              {renderCaptionContent(s)}
                            </HeadingTag>
                          );
                        }
                        return (
                          <p className="text-sm text-outer-space/80">
                            {renderCaptionContent(s)}
                          </p>
                        );
                      })()
                    ) : (
                      <span aria-hidden="true" />
                    )}
                    <p className="text-xs text-outer-space/60">
                      {active + 1} / {slides.length}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {showDots && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                  i === active
                    ? "bg-outer-space border-outer-space"
                    : "bg-white border-gray-300 hover:border-outer-space"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResultsCarouselSection() {
  // Curate these, keep to ~5-8 for homepage.
  const slides: CarouselSlide[] = useMemo(
    () => [
      {
        src: "/images/results/result-01.jpg",
        alt: "Subtle lip enhancement result",
        caption: "Balanced lip enhancement",
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
