"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

interface CarouselSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  content?: string[];
  cta?: {
    text: string;
    href: string;
  };
}

interface CarouselBannerProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  height?: number;
  width?: number;
}

export default function CarouselBanner({
  slides,
  autoPlay = false,
  interval = 5000,
  height = 600,
  width = 1920,
}: CarouselBannerProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  if (!slides.length) return null;

  return (
    <section className="bg-merino py-8">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="relative group overflow-hidden rounded-lg shadow-card">
          {/* Images */}
          <div className="relative w-full">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`transition-opacity duration-700 ${
                  i === current ? "opacity-100 z-10" : "opacity-0 absolute inset-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={width}
                  height={height}
                  className="w-full h-auto object-cover"
                  priority={i === 0}
                />
                {(slide.title || slide.subtitle || slide.content || slide.cta) && (
                  <div className="absolute inset-0 flex items-center px-12 pointer-events-none">
                    <div className="p-8 text-white font-fraunces max-w-2xl pointer-events-auto">
                      {slide.title && (
                        <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">
                          {slide.title}
                        </h2>
                      )}
                      {slide.subtitle && (
                        <p className="text-xl drop-shadow-md mb-4">
                          {slide.subtitle}
                        </p>
                      )}
                      {slide.content && slide.content.length > 0 && (
                        <ul className="space-y-2 mb-6 drop-shadow-md text-gray-200">
                          {slide.content.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-gray-200">•</span>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {slide.cta && (
                        <PrimaryButton
                          href={slide.cta.href}
                          ariaLabel={slide.cta.text}
                          variant="light"
                        >
                          {slide.cta.text}
                        </PrimaryButton>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-8 bg-white" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}