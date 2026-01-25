"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

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