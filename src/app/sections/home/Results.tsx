"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
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
        alt: "Before and after placeholder result",
        title: "Subtle Lift, Natural Contour",
        description: "Cheek and midface support with balanced definition.",
      },
      {
        src: "/images/results/placeholder-02.jpg",
        alt: "Skin quality improvement placeholder result",
        title: "Skin Quality Focus",
        description: "Refined texture and glow with a conservative approach.",
      },
      {
        src: "/images/results/placeholder-03.jpg",
        alt: "Jawline definition placeholder result",
        title: "Refined Structure",
        description: "Jawline definition that looks like you, just rested.",
      },
      {
        src: "/images/results/placeholder-04.jpg",
        alt: "Wrinkle reduction placeholder result",
        title: "Natural Movement Preserved",
        description: "Softened expression lines without a frozen look.",
      },
      {
        src: "/images/results/placeholder-05.jpg",
        alt: "Lip balance placeholder result",
        title: "Balanced Lip Shape",
        description: "Hydration and shape with proportion-first planning.",
      },
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
            <p className="font-fraunces text-3xl md:text-4xl font-bold text-outer-space">
              Real People. Real Results.
            </p>
            <p className="mt-3 text-outer-space/80 text-base md:text-lg max-w-2xl">
              A curated look at subtle, physician-led outcomes focused on balance, restraint,
              and skin quality over time.
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
              className="min-w-[80%] md:min-w-[48%] lg:min-w-[32%] snap-start"
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
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
                <div className="p-5">
                  <p className="text-base font-semibold text-outer-space">{card.title}</p>
                  <p className="mt-2 text-sm text-outer-space/70">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border px-8 py-2.5 font-satoshi text-base font-medium transition-colors bg-white border-outer-space text-outer-space hover:bg-carnation hover:text-merino"
            aria-label="View more results on Instagram"
          >
            View more results on Instagram
          </Link>
          <Link
            href="/treatments/consult"
            className="text-sm font-semibold text-carnation underline underline-offset-4 hover:text-outer-space transition-colors"
            aria-label="Request a consultation"
          >
            Request a consultation
          </Link>
        </div> */}
{/* 
        <p className="mt-3 text-xs text-outer-space/60 leading-relaxed">
          Results vary by individual and treatment plan. Images reflect real patients with consent.
        </p> */}
      </Container>
    </section>
  );
}
