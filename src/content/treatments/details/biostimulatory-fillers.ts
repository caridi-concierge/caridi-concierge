import type { TreatmentDetailContent } from "@/model/treatments/TreatmentDetail";
import { biostimulatoryFillersFAQSchema } from "@/content/schemas/treatments/biostimulatoryFillersFAQSchema";

/**
 * Biostimulatory fillers (Sculptra · Radiesse) detail-page content.
 *
 * Source notes — review before publishing:
 * - `overview` paragraphs preserved from the previous BiostimulatoryFillersIntro.
 * - `faqs` pulled verbatim from `biostimulatoryFillersFAQSchema` so the FAQ rich-results stay in sync.
 * - `areas` flattened from the previous Face / Neck & Chest / Body grouping.
 * - `pullquote`, `bestFor`, `pricing`, `process`, `downtime`, `products` are editorial
 *   drafts and need the practice's review before publishing — pricing in particular.
 */
export const biostimulatoryFillersDetail: TreatmentDetailContent = {
  id: "biostimulatory-fillers",
  slug: "biostimulatory-fillers",
  category: "Skin",
  number: "04",

  title: "Biostimulatory Fillers",
  italic: "the long game.",
  eyebrow: "Sculptra · Radiesse",
  subtitle: "Sculptra · Radiesse",

  lede:
    "Rebuild the collagen scaffold underneath your skin. Sculptra and Radiesse work gradually—results that look like skin quality, not product. Planned in a series, calibrated to your skin, paced to your calendar.",

  heroImage: {
    src: "/images/treatments/filler_chin_tx.webp",
    alt:
      "Biostimulatory filler treatment — Sculptra and Radiesse — at Caridi Concierge.",
  },

  spec: [
    { l: "Visit", v: "45 min" },
    { l: "Onset", v: "4–6 weeks" },
    { l: "Longevity", v: "Up to 2 years" },
    { l: "Downtime", v: "24–48 hours" },
    { l: "Anesthetic", v: "Topical" },
    { l: "Performed by", v: "Dr. Caridi, MD" },
  ],

  overview: [
    "Biostimulatory fillers like Radiesse and Sculptra stimulate your body’s natural collagen production, improving skin firmness, texture, and structure gradually over time.",
    "At Caridi Concierge, these physician-led treatments are performed by Dr. Caridi as private in-home visits (or in our Gowanus clinic), designed to restore lift and skin quality across the face, neck, chest, and arms without adding bulk or weight.",
  ],

  // DRAFT — practice should review/replace before publishing.
  pullquote: {
    body:
      "Biostimulators are patient work. We aren't adding volume — we're rebuilding the structure underneath it.",
    attr: "Dr. Cristina Caridi, MD",
  },

  // DRAFT — review with practice.
  bestFor: {
    yes: [
      "Restoring midface, cheek, and temple volume with collagen support",
      "Defining the jawline and chin with subtle structural lift",
      "Improving skin firmness on the neck and décolletage",
      "Long-term skin-quality investment — staged over 6–12 months",
      "Pairing with HA filler for an immediate-plus-gradual plan",
      "Non-surgical contouring on the body (upper arms, glute)",
    ],
    no: [
      "Lips and tear troughs — biostimulators are not indicated for these areas",
      "Wanting an immediately visible volumising result — choose HA filler instead",
      "Pregnancy or active breastfeeding",
      "Active autoimmune flare or recent infection without specialist clearance",
      "Known allergy to product components (calcium hydroxylapatite, PLLA)",
    ],
  },

  // DRAFT — verify clinical claims with practice.
  products: [
    {
      name: "Sculptra",
      by: "Galderma",
      note:
        "Poly-L-lactic acid microspheres. Diluted heavily and placed broadly — best for gradual midface and cheek restoration. Effect builds over 3–6 months and is staged across a series.",
      use: "Cheek · Temple · Lower face",
    },
    {
      name: "Radiesse",
      by: "Merz",
      note:
        "Calcium hydroxylapatite. Provides immediate contour plus collagen stimulation. Built for the jawline, chin, and hands; not for delicate areas.",
      use: "Jawline · Chin · Hand",
    },
    {
      name: "Hyperdilute Radiesse",
      by: "Merz",
      note:
        "Radiesse diluted further to improve skin quality over broader areas. Less contour, more collagen — used on the neck, décolletage, and arms.",
      use: "Neck · Chest · Arms",
    },
  ],

  // Flattened from previous Face / Neck & Chest / Body grouping.
  areas: [
    {
      name: "Cheek & midface",
      copy: "Rebuild collagen support in the upper cheek, restoring the angle that quietly drops with time.",
    },
    {
      name: "Jawline & lower face",
      copy: "Define the jawline and soften deeper folds with subtle, structural lift — not bulk.",
    },
    {
      name: "Neck",
      copy: "Smooth crepey skin and horizontal lines by stimulating new collagen in the platysma.",
    },
    {
      name: "Décolletage",
      copy: "Restore elasticity and even tone on sun-exposed chest skin — gradually, with hyperdilute Radiesse.",
    },
    {
      name: "Upper arms",
      copy: "Firm and refine loose skin on the upper arms with hyperdilute placement over a series.",
    },
    {
      name: "Non-surgical glute lift",
      copy: "Add subtle volume and structural lift to the buttocks while stimulating long-term collagen.",
    },
  ],

  // DRAFT — pricing is best-guess concierge-tier ranges.
  // The practice must validate these numbers before publishing.
  pricing: [
    {
      area: "Sculptra · per vial",
      from: 850,
      to: 1100,
      unit: "/ vial · typical series: 2–3",
    },
    { area: "Radiesse · per syringe", from: 900, to: 1200, unit: "/ syringe" },
    {
      area: "Hyperdilute Radiesse (neck / chest)",
      from: 1200,
      to: 1800,
      unit: "/ visit · 1–2 vials",
    },
    {
      area: "Three-visit collagen plan (cheek + midface)",
      from: 2400,
      to: 3200,
      unit: "/ 3 visits",
    },
    {
      area: "Body contouring (arms / glute)",
      from: 1800,
      to: 3500,
      unit: "· quoted at consult",
    },
  ],

  // DRAFT — review with practice. Includes Sculptra-specific massage step.
  process: [
    {
      n: "01",
      t: "Consult & plan",
      c: "We map where collagen is thinning, set realistic timelines, and plan a series. Biostim is staged work — most plans run two to three visits over 6–12 weeks.",
      meta: "30–45 min",
    },
    {
      n: "02",
      t: "Numb & prep",
      c: "Topical anesthetic, sterile prep, photographs from three angles for your chart and a baseline for future comparison.",
      meta: "15 min",
    },
    {
      n: "03",
      t: "Treatment",
      c: "Injections placed by Dr. Caridi personally — typically via cannula across broad areas. Calm, conservative, never rushed.",
      meta: "30 min",
    },
    {
      n: "04",
      t: "Massage protocol",
      c: "Sculptra requires the 5-5-5 massage protocol (five minutes, five times a day, for five days). We walk you through it before you leave.",
      meta: "5 days at home",
    },
  ],

  // DRAFT — review with practice. Maps to existing aftercare copy.
  downtime: {
    immediate: [
      {
        t: "Mild swelling",
        c: "Localized for 24–48 hours. Slightly more pronounced with Sculptra than Radiesse.",
      },
      {
        t: "Bruising",
        c: "Possible — most visible days 2–4. Arnica and cold compress help.",
      },
      {
        t: "Tenderness",
        c: "Most clients describe the area as briefly sore for a day.",
      },
    ],
    aftercare: [
      "Sculptra clients: perform the 5-5-5 massage protocol as directed (five minutes, five times a day, for five days).",
      "Other than the massage protocol, avoid touching or pressing the treated area for 24 hours.",
      "No strenuous exercise, alcohol, saunas, or hot yoga for 24–48 hours.",
      "Avoid retinol, exfoliants, or active ingredients in the treated area for several days.",
      "Sleep slightly elevated the first night.",
      "Results build gradually — visible improvement begins around 4–6 weeks and continues for several months.",
      "Text the practice with any concerns — Dr. Caridi answers personally.",
    ],
    workReady:
      "Most clients return to work the same afternoon. Plan camera-on meetings 2–3 days out if swelling is a concern. Final results unfold over months — not days.",
  },

  beforeAfter: [],

  // FAQs pulled verbatim from biostimulatoryFillersFAQSchema.
  faqs: biostimulatoryFillersFAQSchema.mainEntity.map((q) => ({
    q: q.name,
    a: q.acceptedAnswer.text,
  })),

  related: [
    {
      id: "fillers",
      slug: "dermal-fillers",
      title: "Dermal Fillers",
      subtitle: "RHA · Juvederm · Radiesse",
      copy: "Frequently staged with biostimulators — HA filler restores volume now while collagen rebuilds underneath.",
      img: { src: "/images/treatments/filler_lip_tx.webp", alt: "Dermal fillers treatment" },
    },
    {
      id: "botox",
      slug: "wrinkle-reduction",
      title: "Neuromodulators",
      subtitle: "Botox · Xeomin · Daxxify",
      copy: "Softens expression lines while biostim does the long-game work on skin quality and structure.",
      img: { src: "/images/treatments/botox_crowsfeet_tx.webp", alt: "Neuromodulators treatment" },
    },
    {
      id: "consult",
      slug: "consult",
      title: "Aesthetic Consultations",
      subtitle: "60 min · Private",
      copy: "Not sure where to begin? Start with a conversation. The fee is credited toward your first treatment.",
      img: { src: "/images/treatments/consult_2.webp", alt: "Consultation" },
    },
  ],
};
