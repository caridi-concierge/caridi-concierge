import { TreatmentMetadata } from "@/model/treatments/Treatment";


export const treatments: TreatmentMetadata[] = [
  {
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
    bullets: [
      "Smooth <strong>forehead lines, crow's feet</strong>, and frown lines (the \"11s\")",
      "<strong>Masseter Botox</strong> for jawline slimming and TMJ relief",
      "<strong>Lip flip</strong> for subtle upper lip enhancement without filler",
      "<strong>Jelly roll treatment</strong> to smooth under-eye wrinkles",
      "Gummy smile correction for balanced aesthetics",
    ],
    products: "Botox, Xeomin, Daxxify",
    imgSrc:
      "/images/facial_tx.webp",
    imgAlt:
      "Decorative image for the Wrinkle Reduction treatment page. Botox, Xeomin, Daxxify.",
    startingPrice: "$12/unit",
    note: "Typical treatment: 20-60 units",
    frequency: "This treatment should be repeated every 2-4 months.",
    bookHref: "/booking",
    learnMoreHref: "/treatments/wrinkle-reduction",
  },
  {
    id: "fillers",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    // badge: {},
    hook: "Restore volume and definition.",
    description:
      "Dermal fillers can improve shape and restore lost volume to areas like the face, lips, neck, butt and arms. Common options include RHA Collection and Juvederm.",
    bullets: [
      "<strong>Lip fillers</strong> and <strong>lip injections</strong> for balanced, natural fullness",
      "Cheek augmentation to restore youthful contours",
      "Under-eye hollows (tear troughs) for a refreshed appearance",
      "Jawline contouring and chin augmentation",
      "Smooth nasolabial folds and marionette lines",
    ],
    products: "Juvederm, RHA Collection",
    imgSrc:
      "/images/lips_tx.webp",
    imgAlt:
      "Decorative image for the Dermal Fillers page. RHA Collection, Juvederm.",
    startingPrice: "$650/syringe",
    note: "Most areas require 1-2 syringes",
    frequency: "This treatment should be repeated every 4-6 months.",
    bookHref: "/booking",
    learnMoreHref: "/treatments/dermal-fillers",
  },
  {
    id: "biostim",
    slug: "biostimulatory-fillers",
    title: "Biostimulatory Fillers",
    badge: {
      text: "Long-Lasting",
      variant: "longLasting",
    },
    hook: "Build your own collagen for gradual, lasting rejuvenation.",
    description:
      "Biostimulatory fillers encourage your body to produce its own collagen, gradually restoring volume and improving skin texture from within. Common options include Radiesse and Sculptra.",
    bullets: [
      "Stimulate natural collagen production for long-term results",
      "Restore volume to cheeks, temples, and jawline",
      "Improve skin texture and firmness over time",
      "Ideal for deeper volume loss and facial structure",
      "Results last 2+ years with gradual improvement",
    ],
    products: "Radiesse, Sculptra",
    imgSrc:
      "/images/biostim2_tx.webp",
    imgAlt:
      "Decorative icon for biostimulatory fillers treatments page. Radiesse, Sculptra.",
    startingPrice: "$800/syringe",
    note: "Treatment series recommended",
    frequency: "Typically administered as a series of 3 treatments, spaced 6 weeks apart, followed by yearly maintenance.",
    bookHref: "/booking",
    learnMoreHref: "/treatments/biostimulatory-fillers",
  },
];