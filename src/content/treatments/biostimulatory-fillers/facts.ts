import type { TreatmentMetadata } from "@/content/treatments/types";
import { PRICES } from "@/lib/constants/pricing";

export const facts: TreatmentMetadata = {
  id: "biostim",
  slug: "biostimulatory-fillers",
  title: "Biostimulatory Fillers",
  badge: {
    text: "Long-Lasting",
    variant: "longLasting",
  },
  hook: "Build collagen for lasting rejuvenation.",
  description:
    "Biostimulatory fillers encourage your body to produce its own collagen, gradually restoring volume and improving skin texture from within. Common options include Radiesse and Sculptra.",
  highlights: [
    "Stimulate natural collagen production for long-term results",
    "Restore volume to cheeks, temples, and jawline",
    "Improve skin texture and firmness over time",
    "Ideal for deeper volume loss and facial structure",
    "Results last 2+ years with gradual improvement",
  ],
  products: "Radiesse",
  imgSrc: "/images/treatments/filler_chin_tx.webp",
  imgAlt:
    "Decorative icon for biostimulatory fillers treatments page. Radiesse, Sculptra. Radiesse can be used to build collagen for long-term results, restore lost volume to areas like the face, lips, neck, butt and arms.",
  startingPrice: `$${PRICES.biostimulatoryFiller}/syringe`,
  note: "Treatment series recommended",
  frequency: "A series of 3 treatments, spaced 6 weeks apart. Followed by yearly maintenance.",
  bookHref: "/book?source=card_biostimulatory-fillers",
  ctaHref: "/treatments/biostimulatory-fillers",
  ctaText: "Learn More",
  category: "Skin",
  from: PRICES.biostimulatoryFiller,
  unit: "/ syringe",
  duration: "45 min",
};
