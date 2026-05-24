import type { TreatmentDetailContent } from "@/model/treatments/TreatmentDetail";
import { chemicalPeelsFAQSchema } from "@/content/schemas/treatments/chemicalPeelsFAQSchema";
import { PRICES, PACKAGES } from "@/lib/constants/pricing";

/**
 * Chemical peels (VI Peel® medical-grade) detail-page content.
 *
 * Source notes:
 * - `overview` paragraphs preserved from the previous ChemicalPeelsIntro
 *   (split across two paragraphs for editorial pacing — content unchanged).
 * - `faqs` pulled verbatim from `chemicalPeelsFAQSchema` so the FAQ rich-results stay in sync.
 * - `areas` flattened and consolidated from the previous Face / Neck & Chest / Body
 *   grouping. Underarms & inner thighs from the existing site copy did not survive
 *   the 6-area editorial cap — re-add by extending the layout or accepting a 9-cell grid.
 * - The VI Peel® product variants listed (Precision Plus, Purify, Body) are real VI
 *   Aesthetics offerings carried by the clinic.
 */
export const chemicalPeelsDetail: TreatmentDetailContent = {
  id: "chemical-peels",
  slug: "chemical-peels",
  category: "Skin",
  number: "05",

  title: "Chemical Peels",
  italic: "for clarity.",
  eyebrow: "Brightening · Resurfacing",
  subtitle: "VI Peel® · medical-grade",

  lede:
    "Medical-grade peels that refine texture, tone, and clarity—calibrated to your skin, your downtime, your calendar. Brighter skin emerges as the surface sheds; the work underneath continues for weeks.",

  heroImage: {
    src: "/images/treatments/facial_chemical_peel_1500px.webp",
    alt:
      "Chemical peel treatment using medical-grade VI Peel® formulations at Caridi Concierge.",
  },

  spec: [
    { l: "Visit", v: "30 min" },
    { l: "Onset", v: "Within 1 week" },
    { l: "Longevity", v: "4–6 weeks per visit" },
    { l: "Downtime", v: "3–7 days peeling" },
    { l: "Anesthetic", v: "None needed" },
    { l: "Performed by", v: "Cristina Caridi, MD" },
  ],

  overview: [
    "Physician-led chemical peels using medical-grade formulations to improve skin tone, texture, and clarity without compromising skin health.",
    "Dr. Caridi customizes each peel to target concerns such as discoloration, melasma, acne, and fine lines while respecting your skin's integrity and comfort level, resulting in brighter, smoother skin with controlled, predictable results.",
  ],

  pullquote: {
    body:
      "A peel earns its place in a plan. We don't chase the deepest one, we choose the one that respects your skin.",
    attr: "Cristina Caridi, MD",
  },

  bestFor: {
    yes: [
      "Discoloration, sun spots, melasma, and post-acne pigmentation",
      "Refining surface texture, smoothing fine lines, evening tone",
      "Active acne and oily skin (with the appropriate formulation)",
      "All skin tones — when the right peel is chosen",
      "Building a maintenance cadence every 4–6 weeks",
      "Pairing with neuromodulators or filler over a longer plan",
    ],
    no: [
      "Active cold sore, infection, or open lesion in the treatment area",
      "Recent isotretinoin (Accutane) within the last 6–12 months",
      "Pregnancy or active breastfeeding for certain formulations",
      "Active eczema or dermatitis flare in the treatment area",
      "Recent waxing, laser, or significant sun exposure within 1–2 weeks",
    ],
  },


  products: [
    {
      name: "VI Peel® (Original)",
      by: "VI Aesthetics",
      note:
        "Blended medium-depth peel — TCA, retinoic acid, salicylic acid, phenol, vitamin C. Designed to work across skin types and tones. Most commonly used in the practice.",
      use: "All skin types · All concerns",
    },
    {
      name: "VI Peel Precision Plus",
      by: "VI Aesthetics",
      note:
        "Targeted for stubborn pigmentation, sun damage, and melasma. Higher concentration of brightening agents.",
      use: "Melasma · Hyperpigmentation",
    },
    {
      name: "VI Peel Purify",
      by: "VI Aesthetics",
      note:
        "Built for active acne and oily skin. Includes salicylic acid and benzoyl peroxide.",
      use: "Acne · Oily skin",
    },
    {
      name: "VI Peel Body",
      by: "VI Aesthetics",
      note:
        "Formulated for the chest, back, hands, and other body areas. Typically used in a series.",
      use: "Back · Chest · Hands",
    },
  ],

  // Consolidated from existing Face / Neck & Chest / Body grouping to 6 cards.
  areas: [
    {
      name: "Full face",
      copy: "Improve overall tone and texture, brighten dull skin, and support healthy cell turnover.",
    },
    {
      name: "Forehead & cheeks",
      copy: "Target sun damage, fine lines, uneven texture, and post-acne marks across the upper and mid face.",
    },
    {
      name: "Perioral",
      copy: "Address discoloration, fine lines, and roughness around the mouth for a smoother appearance.",
    },
    {
      name: "Neck",
      copy: "Lift superficial pigment and refine crepey texture for a more uniform tone from face to décolletage.",
    },
    {
      name: "Décolletage",
      copy: "Reduce sun spots and uneven pigmentation caused by chronic sun exposure on the chest.",
    },
    {
      name: "Back & hands",
      copy: "Treat post-inflammatory pigmentation, acne marks, and dark spots on commonly exposed body areas.",
    },
  ],

  // Peel prices come from the central pricing module: single visits use the
  // base unit price; the three-visit series and body peel come from PACKAGES.
  pricing: [
    {
      area: "VI Peel® (Original) · single visit",
      from: PRICES.chemicalPeel,
      unit: "/ treatment",
    },
    {
      area: "VI Peel Precision Plus (pigmentation)",
      from: PRICES.chemicalPeel,
      unit: "/ treatment",
    },
    {
      area: "VI Peel Purify (acne)",
      from: PRICES.chemicalPeel,
      unit: "/ treatment",
    },
    {
      area: "Series of three (face)",
      from: PACKAGES.peelSeries3.from,
      unit: "/ 3 treatments",
    },
    {
      area: "VI Peel Body (back / chest / hands)",
      from: PACKAGES.peelBody.from,
      unit: "/ treatment",
    },
  ],

  process: [
    {
      n: "01",
      t: "Consult & skin assessment",
      c: "Skin type, history, and concerns are reviewed. We choose the formulation, plan a series if needed, and set expectations for the peeling phase.",
    },
    {
      n: "02",
      t: "Prep",
      c: "Skin is cleansed and degreased so the peel can absorb evenly.",
    },
    {
      n: "03",
      t: "Application",
      c: "The peel is applied in layers by Dr. Caridi. Warmth and brief tingling are normal.",
    },
    {
      n: "04",
      t: "At-home protocol",
      c: "Specific post-peel regimen for the next 5–7 days, including leave-on time, cleansing, moisturizer, and strict daily SPF.",
    },
  ],

  // Mirrors VI Peel post-care standards.
  downtime: {
    immediate: [
      {
        t: "Warmth & tingling",
        c: "During application, fades within minutes.",
      },
      {
        t: "Tightness",
        c: "Skin feels taut and slightly dry for 24 hours.",
      },
      {
        t: "Mild redness",
        c: "Similar to a light sunburn for up to 48 hours.",
      },
    ],
    aftercare: [
      "Leave the peel solution on as directed (typically 4 hours minimum for VI Peel®).",
      "Do not wash the face for the prescribed leave-on window.",
      "Days 2–3: skin will begin to peel. Use only a gentle cleanser and the provided moisturizer. No picking.",
      "Daily broad-spectrum SPF 30+ is non-negotiable for the next two weeks.",
      "Skip retinol, exfoliants, scrubs, waxing, and laser in the treated area for two weeks.",
      "Avoid strenuous sweating, saunas, hot yoga, and direct sun for one week.",
      "Text the practice with any concerns. Dr. Caridi answers personally.",
    ],
    workReady:
      "Camera-on meetings within 3-5 days are usually fine. Plan visible events 1-2 weeks out, the peeling phase is short but noticeable.",
  },

  beforeAfter: [],

  // FAQs pulled verbatim from chemicalPeelsFAQSchema.
  faqs: chemicalPeelsFAQSchema.mainEntity.map((q) => ({
    q: q.name,
    a: q.acceptedAnswer.text,
  })),

  related: [
    {
      id: "botox",
      slug: "wrinkle-reduction",
      title: "Neuromodulators",
      subtitle: "Botox · Xeomin · Daxxify",
      copy: "Often layered with peels — Botox softens expression while a peel refines surface tone and texture.",
      img: { src: "/images/treatments/botox_crowsfeet_tx.webp", alt: "Neuromodulators treatment" },
    },
    {
      id: "fillers",
      slug: "dermal-fillers",
      title: "Dermal Fillers",
      subtitle: "RHA · Juvederm",
      copy: "Peels work the surface; filler works the structure. We sequence them across visits for a more complete plan.",
      img: { src: "/images/treatments/filler_lip_tx.webp", alt: "Dermal fillers treatment" },
    },
    {
      id: "consult",
      slug: "consult",
      title: "Aesthetic Consultations",
      subtitle: "Tailored",
      copy: "Not sure where to begin? Start with a conversation. The fee is credited toward your first treatment.",
      img: { src: "/images/treatments/consult_2.webp", alt: "Consultation" },
    },
  ],
};
