import type { TreatmentMetadata } from "@/content/treatments/types";
import { PRICES } from "@/lib/constants/pricing";

export const facts: TreatmentMetadata = {
  id: "botox",
  slug: "wrinkle-reduction",
  title: "Botox & Neuromodulators",
  badge: {
    text: "Most Popular",
    variant: "popular",
  },
  hook: "Soften wrinkles and lift your features.",
  description:
    "Smooth wrinkles and soften fine lines with targeted wrinkle reduction treatments, including Botox, Xeomin, and Daxxify. Enhance natural beauty and restore youthful balance.",
  highlights: [
    "Smooth <strong>forehead lines, crow's feet</strong>, and frown lines (the \"11s\")",
    "<strong>Masseter Botox</strong> for jawline slimming and TMJ relief",
    "<strong>Lip flip</strong> for subtle upper lip enhancement without filler",
    "<strong>Jelly roll treatment</strong> to smooth under-eye wrinkles",
    "Gummy smile correction for balanced aesthetics",
  ],
  products: "Botox, Xeomin, Daxxify",
  imgSrc: "/images/treatments/botox_crowsfeet_tx.webp",
  imgAlt:
    "Decorative image for the Wrinkle Reduction treatment page. Botox, Xeomin, Daxxify. Botox can be used to smooth wrinkles and soften fine lines, crows feet, 11s, and lip flips",
  startingPrice: `$${PRICES.botox}/unit`,
  note: "Typical treatment: 20-60 units",
  frequency: "This treatment should be repeated every 2-4 months.",
  bookHref: "/book?source=card_wrinkle-reduction",
  ctaHref: "/treatments/wrinkle-reduction",
  ctaText: "Learn More",
  category: "Neuromodulators",
  from: PRICES.botox,
  unit: "/ unit",
  duration: "30–45 min",
  featured: true,
};
