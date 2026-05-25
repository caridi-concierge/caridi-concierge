import type { TreatmentDetailContent } from "@/model/treatments/TreatmentDetail";
import { consultFAQSchema } from "@/content/schemas/treatments/consultFAQShema";
import { PRICES } from "@/lib/constants/pricing";

/**
 * Consultation detail-page content.
 *
 * Source notes:
 * - `overview` paragraph preserved verbatim from the previous ConsultIntro.
 * - `faqs` pulled verbatim from `consultFAQSchema` (7 Q&As) so the FAQ rich-results stay in sync.
 * - `bestFor`, `products`, `areas`, `downtime`, `beforeAfter` are intentionally
 *   omitted — they don't apply to a consultation. The layout hides those sections
 *   and renumbers the remaining ones (01–05) on this page.
 * - The "What we can cover in a consultation" content from the previous ConsultAreas page
 *   is NOT carried into this new layout. If you want a section listing discussion topics,
 *   we can either extend the layout with a new "covers" section type or add the topics
 *   back as a structured list inside the overview.
 */
export const consultDetail: TreatmentDetailContent = {
  id: "consult",
  slug: "consult",
  category: "Consult",
  number: "00",

  title: "Aesthetic Consultations",
  italic: "where we begin.",
  eyebrow: "30 min · Private",
  subtitle: "30 min · Private",

  lede:
    "Begin with a conversation. A clinical assessment and a treatment plan—pressure-free, in your space or ours.",

  heroImage: {
    src: "/images/treatments/consult_2.webp",
    alt: "Aesthetic consultation with Dr. Cristina Caridi at Caridi Concierge.",
  },

  spec: [
    { l: "Visit", v: "30 min" },
    { l: "Format", v: "In-home or studio" },
    { l: "Privacy", v: "Discreet · no signage" },
    { l: "Fee", v: `$${PRICES.consult} · credited to first visit` },
    { l: "Outcome", v: "Personalized plan" },
    { l: "Performed by", v: "Cristina Caridi, MD" },
  ],

  overview: [
    "A consultation with Caridi Concierge is a physician-led conversation focused on understanding your goals, anatomy, and long-term preferences before any treatment decisions are made. Dr. Cristina Caridi takes the time to evaluate skin quality, facial balance, and lifestyle factors to create a personalized, medically appropriate plan. Consultations are designed to be thorough yet comfortable, giving you the clarity and confidence to move forward thoughtfully.",
  ],

  pullquote: {
    body:
      "The first conversation should feel like a clinical assessment, not a sales pitch.",
    attr: "Dr. Cristina Caridi, MD",
  },

  pricing: [
    {
      area: "Aesthetic consultation",
      from: PRICES.consult,
      unit: "/ visit · credited toward first treatment",
    },
    {
      area: "Virtual planning consultation",
      from: PRICES.consult,
      unit: "/ visit · select concerns only",
    },
  ],

  process: [
    {
      n: "01",
      t: "Booking & intake",
      c: "Choose a time online and share basic skin history. We confirm visit details and address before the day-of.",
    },
    {
      n: "02",
      t: "Conversation",
      c: "We sit down at your residence, hotel, or our studio, and talk through what brought you here. Goals, concerns, daily routine, anything you've tried before.",
    },
    {
      n: "03",
      t: "Clinical assessment",
      c: "Dr. Caridi reviews skin quality, facial balance, and the anatomy underneath. Photographs from three angles for your chart.",
    },
    {
      n: "04",
      t: "Plan",
      c: "Recommended treatments, the order to do them in, and the realistic timeline. If treating today makes sense, we'll discuss; if it doesn't, we won't.",
    },
  ],

  beforeAfter: undefined,

  // FAQs pulled verbatim from consultFAQSchema (7 questions).
  faqs: consultFAQSchema.mainEntity.map((q) => ({
    q: q.name,
    a: q.acceptedAnswer.text,
  })),

  related: [
    {
      id: "botox",
      slug: "wrinkle-reduction",
      title: "Neuromodulators",
      subtitle: "Botox · Xeomin · Daxxify",
      copy: "Soften wrinkles and refine expression while keeping your face yours. The most common first treatment after consult.",
      img: { src: "/images/treatments/botox_crowsfeet_tx.webp", alt: "Neuromodulators treatment" },
    },
    {
      id: "fillers",
      slug: "dermal-fillers",
      title: "Dermal Fillers",
      subtitle: "RHA · Juvederm · Radiesse",
      copy: "Restore volume and define contour with restraint — planned around proportion, not volume for its own sake.",
      img: { src: "/images/treatments/filler_lip_tx.webp", alt: "Dermal fillers treatment" },
    },
    {
      id: "biostim",
      slug: "biostimulatory-fillers",
      title: "Biostimulators",
      subtitle: "Radiesse",
      copy: "Long-game collagen support. Built into a thoughtful plan over six to twelve months.",
      img: { src: "/images/treatments/filler_chin_tx.webp", alt: "Biostimulator treatment" },
    },
  ],
};
