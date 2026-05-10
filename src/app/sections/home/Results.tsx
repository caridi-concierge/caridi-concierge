"use client";

import Image from "next/image";
import { useMemo } from "react";
import Eyebrow from "@/components/Eyebrow";

type ResultCard = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export default function ResultsSection() {
  const cards: ResultCard[] = useMemo(
    () => [
      {
        src: "/images/results/botox-cheek-filler-before-after.webp",
        alt: "Forehead Botox and cheek filler — before and after",
        title: "Gentle lift, clean lines",
        description:
          "Forehead Botox + cheek filler. Subtle structural support without overcorrection.",
      },
      {
        src: "/images/results/botox-cheek-lip-chin-filler-before-after.webp",
        alt: "Full face balancing — before and after",
        title: "Facial balancing",
        description:
          "Full-face neuromodulator with cheek, lip, and chin filler. Proportion fine-tuning.",
      },
      {
        src: "/images/results/cheek-filler-before-after.webp",
        alt: "Full face refresh result with softened lines and balanced facial contours",
        title: "Full Face Harmony",
        description: "Full face and neck Botox, plus filler in cheeks, nasolabial folds, and chin to restore harmony.",
      },
      // {
      //   src: "/images/results/botox-cheek-filler-before-after.webp",
      //   alt: "Lip refinement — before and after",
      //   title: "Lip refinement",
      //   description:
      //     "Hydration and shape with proportion-first planning. No over-volumization.",
      // },
    ],
    []
  );

  return (
    <section className="bg-ivory text-ink">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="text-center mb-14 lg:mb-16">
          <Eyebrow withDash className="text-brass mb-4">
            Results, with restraint
          </Eyebrow>
          <h2 className="font-display font-light text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] max-w-[720px] mx-auto">
            Outcomes that still{" "}
            <em className="not-italic italic font-light">look like you.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <article key={i} className="flex flex-col gap-[18px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-bone">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <div>
                <Eyebrow className="text-brass text-[10px] mb-2">
                  Case 0{i + 1}
                </Eyebrow>
                <h3 className="font-display font-normal text-2xl leading-[1.15] mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-sm leading-[1.7] text-ink/70">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
