import type { TreatmentMetadata } from "@/content/treatments/types";
import { PRICES } from "@/lib/constants/pricing";

export const facts: TreatmentMetadata = {
  id: "chemical-peels",
  slug: "chemical-peels",
  title: "Chemical Peels",
  hook: "Reveal brighter, smoother, more even skin.",
  description:
    "Chemical peels gently exfoliate damaged skin and stimulate healthy renewal. VI Peel improves uneven tone, surface texture, acne, and pigmentation with minimal downtime.",
  highlights: [
    "<strong>Targets discoloration</strong> including sun spots and melasma",
    "<strong>Improves acne</strong> by clearing clogged pores and reducing post-acne marks",
    "<strong>Refines texture</strong> for smoother, more even skin",
    "<strong>Brightens dullness</strong> and restores overall radiance",
    "<strong>Safe for most skin tones</strong> with a customized in-home approach",
  ],
  products: "VI Peel®",
  imgSrc: "/images/treatments/facial_chemical_peel_1500px.webp",
  imgAlt:
    "Chemical peel treatment illustration for the Caridi Concierge chemical peels page. VI Peel®. VI Peel® can be used to improve uneven tone, surface texture, acne, and pigmentation with minimal downtime.",
  startingPrice: `$${PRICES.chemicalPeel}/treatment`,
  note: "Treatment series recommended",
  frequency: "This treatment should be repeated every 2-4 months.",
  bookHref: "/book?source=card_chemical-peels",
  ctaHref: "/treatments/chemical-peels",
  ctaText: "Learn More",
  category: "Skin",
  from: PRICES.chemicalPeel,
  unit: "",
  duration: "30 min",
};
