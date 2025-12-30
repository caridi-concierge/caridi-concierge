import { TreatmentMetadata } from "@/model/treatments/Treatment";

const priceConsult = process.env.PRICE_CONSULT ?? 150;
const priceBotox = process.env.PRICE_BOTOX ?? 12;
const priceFillers = process.env.PRICE_FILLERS ?? 600;
const priceBiostim = process.env.PRICE_BIOSTIM ?? 850;
const priceChemicalPeels = process.env.PRICE_CHEMICAL_PEELS ?? 400;

export const treatments: TreatmentMetadata[] = [
  {
    id: "consult",
    slug: "consult",
    title: "Consult",
    hook: "Discover your perfect treatment plan.",
    description:
      "Get personalized guidance for your aesthetic goals. Our expert will assess your needs and create a customized treatment plan tailored to your unique features and desired results.",
    highlights: [
      "Personalized consultation with Dr. Caridi",
      "Custom treatment plan based on your goals and anatomy",
      "Transparent discussion of options, benefits, and expectations",
      "Flexible scheduling to fit your busy lifestyle",
    ],
    products: "Consultation only",
    imgSrc:
      "/images/consult_tx.webp",
    imgAlt:
      "Decorative image for the Consultation treatment page. Botox and fillers consultation",
    startingPrice: `$${priceConsult}`,
    note: "Decide you want services? We waive the fee.",
    frequency: "Schedule as needed for personalized guidance",
    bookHref: "/book",
    ctaHref: "/treatments/consult",
    ctaText: "Learn More",
    ctaVariant: "alt",
  },
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
    highlights: [
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
    startingPrice: `$${priceBotox}/unit`,
    note: "Typical treatment: 20-60 units",
    frequency: "This treatment should be repeated every 2-4 months.",
    bookHref: "/book",
    ctaHref: "/treatments/wrinkle-reduction",
    ctaText: "Learn More",
    ctaVariant: "alt",
  },
  {
    id: "fillers",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    // badge: {},
    hook: "Restore volume and definition.",
    description:
      "Dermal fillers can improve shape and restore lost volume to areas like the face, lips, neck, butt and arms. Common options include RHA Collection and Juvederm.",
    highlights: [
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
    startingPrice: `$${priceFillers}/syringe`,
    note: "Most areas require 1-2 syringes",
    frequency: "This treatment should be repeated every 4-6 months.",
    bookHref: "/book",
    ctaHref: "/treatments/dermal-fillers",
    ctaText: "Learn More",
    ctaVariant: "alt",
  },
  {
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
    products: "Radiesse, Sculptra",
    imgSrc:
      "/images/biostim2_tx.webp",
    imgAlt:
      "Decorative icon for biostimulatory fillers treatments page. Radiesse, Sculptra.",
    startingPrice: `$${priceBiostim}/syringe`,
    note: "Treatment series recommended",
    frequency: "A series of 3 treatments, spaced 6 weeks apart. Followed by yearly maintenance.",
    bookHref: "/book",
    ctaHref: "/treatments/biostimulatory-fillers",
    ctaText: "Learn More",
    ctaVariant: "alt",
  },
  {
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
      "<strong>Safe for most skin tones</strong> with a customized in-home approach"
    ],
    products: "VI Peel®",
    imgSrc:
      "/images/peel_tx.webp",
    imgAlt:
      "Chemical peel treatment illustration for the Caridi Concierge chemical peels page. VI Peel®.",
    startingPrice: `$${priceChemicalPeels}/treatment`,
    note: "Treatment series recommended",
    frequency: "This treatment should be repeated every 2-4 months.",
    bookHref: "/book",
    ctaHref: "/treatments/chemical-peels",
    ctaText: "Learn More",
    ctaVariant: "alt",
  }
];