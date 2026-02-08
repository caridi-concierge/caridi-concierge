"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useMemo, useRef } from "react";

type ResultsCard = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export default function ResultsCarouselSection() {
  const cards: ResultsCard[] = useMemo(
    () => [
      {
        src: "/images/results/cheek-filler-before-after.webp",
        alt: "Full face refresh result with softened lines and balanced facial contours",
        title: "Full Face Harmony",
        description: "Full face and neck Botox, plus filler in cheeks, nasolabial folds, and chin to restore harmony.",
      },
      {
        src: "/images/results/botox-cheek-filler-before-after.webp",
        alt: "Before and after placeholder result",
        title: "Gentle Lift & Clean Lines",
        description: "Forehead Botox paired with cheek filler for a gentle lift and cleaner lines.",
      },
      {
        // 3
        src: "/images/results/botox-cheek-lip-chin-filler-before-after.webp",
        alt: "Facial balancing result with refined symmetry through cheeks, lips, and chin",
        title: "Facial Balancing",
        description: "Full face and neck Botox with filler in cheeks, lips, and chin to fine‑tune proportion.",
      },
      // {
      //   src: "/images/results/placeholder-04.jpg",
      //   alt: "Wrinkle reduction placeholder result",
      //   title: "Natural Movement Preserved",
      //   description: "Softened expression lines without a frozen look.",
      // },
      // {
      //   src: "/images/results/placeholder-05.jpg",
      //   alt: "Lip balance placeholder result",
      //   title: "Balanced Lip Shape",
      //   description: "Hydration and shape with proportion-first planning.",
      // },
    ],
    []
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    const card = cardRef.current;
    if (!track || !card) return;
    const gap = 24;
    const amount = card.clientWidth + gap;
    track.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="bg-merino py-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-outer-space">
              Results that still look like you
            </h2>
            <p className="mt-3 text-outer-space/80 text-base md:text-lg max-w-2xl">
              A curated look at physician-led Botox and dermal filler outcomes focused on balance, restraint, and long-term skin quality.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-outer-space/80 hover:text-outer-space hover:border-outer-space transition-colors"
              aria-label="Previous results"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-outer-space/80 hover:text-outer-space hover:border-outer-space transition-colors"
              aria-label="Next results"
            >
              Next
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          aria-label="Results gallery"
        >
          {cards.map((card, index) => (
            <div
              key={card.src}
              ref={index === 0 ? cardRef : null}
              className="flex-none w-[70%] md:w-[45%] lg:w-[30%] snap-start"
            >
              <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 60vw, 90vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-5 min-h-[96px]">
                  <h3 className="text-base font-semibold text-outer-space line-clamp-1">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-outer-space/70 line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
