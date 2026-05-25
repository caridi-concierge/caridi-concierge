import { TreatmentMetadata } from "@/model/treatments/Treatment";
import { PRICES } from "@/lib/constants/pricing";

const priceConsult = PRICES.consult;
const priceBotox = PRICES.botox;
const priceFillers = PRICES.dermalFiller;
const priceBiostim = PRICES.biostimulatoryFiller;
const priceChemicalPeels = PRICES.chemicalPeel;

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
      "/images/treatments/consult_2.webp",
    imgAlt:
      "Decorative image for the Consultation treatment page. Botox and fillers consultation",
    startingPrice: `$${priceConsult}`,
    note: "Decide you want services? We waive the fee.",
    frequency: "Schedule as needed for personalized guidance",
    bookHref: "/book?source=card_consult",
    ctaHref: "/treatments/consult",
    ctaText: "Learn More",
    ctaVariant: "alt",
    category: "Consults",
    from: priceConsult,
    unit: "· credited to first visit",
    duration: "60 min",
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
      "/images/treatments/botox_crowsfeet_tx.webp",
    imgAlt:
      "Decorative image for the Wrinkle Reduction treatment page. Botox, Xeomin, Daxxify. Botox can be used to smooth wrinkles and soften fine lines, crows feet, 11s, and lip flips",
    startingPrice: `$${priceBotox}/unit`,
    note: "Typical treatment: 20-60 units",
    frequency: "This treatment should be repeated every 2-4 months.",
    bookHref: "/book?source=card_wrinkle-reduction",
    ctaHref: "/treatments/wrinkle-reduction",
    ctaText: "Learn More",
    ctaVariant: "alt",
    category: "Neuromodulators",
    from: priceBotox,
    unit: "/ unit",
    duration: "30–45 min",
    featured: true,
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
      "/images/treatments/filler_lip_tx.webp",
    imgAlt:
      "Decorative image for the Dermal Fillers page. RHA Collection, Juvederm. Juvederm can be used to restore lost volume to areas like the face, lips, neck, butt and arms.",
    startingPrice: `$${priceFillers}/syringe`,
    note: "Most areas require 1-2 syringes",
    frequency: "This treatment should be repeated every 4-6 months.",
    bookHref: "/book?source=card_dermal-fillers",
    ctaHref: "/treatments/dermal-fillers",
    ctaText: "Learn More",
    ctaVariant: "alt",
    category: "Filler",
    from: priceFillers,
    unit: "/ syringe",
    duration: "45–60 min",
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
      "Biostimulatory fillers encourage your body to produce its own collagen, gradually restoring volume and improving skin texture from within. A popular option is Radiesse.",
    highlights: [
      "Stimulate natural collagen production for long-term results",
      "Restore volume to cheeks, temples, and jawline",
      "Improve skin texture and firmness over time",
      "Ideal for deeper volume loss and facial structure",
      "Results last 2+ years with gradual improvement",
    ],
    products: "Radiesse",
    imgSrc:
      "/images/treatments/filler_chin_tx.webp",
    imgAlt:
      "Patient receiving biostimulatory filler treatment in their chin. Radiesse is injected to build collagen for long-term results.",
    startingPrice: `$${priceBiostim}/syringe`,
    note: "Treatment series recommended",
    frequency: "A series of 3 treatments, spaced 6 weeks apart. Followed by yearly maintenance.",
    bookHref: "/book?source=card_biostimulatory-fillers",
    ctaHref: "/treatments/biostimulatory-fillers",
    ctaText: "Learn More",
    ctaVariant: "alt",
    category: "Skin",
    from: priceBiostim,
    unit: "/ syringe",
    duration: "45 min",
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
      "/images/treatments/facial_chemical_peel_1500px.webp",
    imgAlt:
      "Chemical peel treatment illustration for the Caridi Concierge chemical peels page. VI Peel®. VI Peel® can be used to improve uneven tone, surface texture, acne, and pigmentation with minimal downtime.",
    startingPrice: `$${priceChemicalPeels}/treatment`,
    note: "Treatment series recommended",
    frequency: "This treatment should be repeated every 2-4 months.",
    bookHref: "/book?source=card_chemical-peels",
    ctaHref: "/treatments/chemical-peels",
    ctaText: "Learn More",
    ctaVariant: "alt",
    category: "Skin",
    from: priceChemicalPeels,
    unit: "",
    duration: "30 min",
  }
];