import type { TreatmentDetailContent } from "@/model/treatments/TreatmentDetail";
import { botoxFAQSchema } from "@/content/schemas/treatments/botoxFAQSchema";

/**
 * Neuromodulators (Botox / Xeomin / Daxxify) detail-page content.
 *
 * Source notes — review before publishing:
 * - `overview` paragraphs preserved from the previous WrinkleReductionIntro.
 * - `faqs` pulled verbatim from `botoxFAQSchema` so the FAQ rich-results stay in sync.
 * - `areas` flattened from the previous Upper / Lower / Jaw / Hyperhidrosis grouping.
 * - `pullquote`, `bestFor`, `pricing`, `process`, `downtime`, `products` are editorial
 *   drafts and need the practice's review before publishing — pricing in particular.
 */
export const wrinkleReductionDetail: TreatmentDetailContent = {
  id: "wrinkle-reduction",
  slug: "wrinkle-reduction",
  category: "Neuromodulators",
  number: "01",

  title: "Neuromodulators",
  italic: "without the freeze.",
  eyebrow: "Botox · Xeomin · Daxxify",
  subtitle: "Botox · Xeomin · Daxxify",

  lede:
    "Soften expression lines while keeping your face yours. Physician-led Botox, Xeomin, and Daxxify—dosed conservatively, placed precisely, calibrated so your expression still reads as you.",

  heroImage: {
    src: "/images/botox_tx.webp",
    alt: "Neuromodulator treatment — Botox, Xeomin, Daxxify — at Caridi Concierge.",
  },

  spec: [
    { l: "Visit", v: "30–45 min" },
    { l: "Onset", v: "5–7 days" },
    { l: "Longevity", v: "3–4 months" },
    { l: "Downtime", v: "None" },
    { l: "Anesthetic", v: "Optional ice or topical" },
    { l: "Performed by", v: "Dr. Caridi, MD" },
  ],

  overview: [
    "Physician-led wrinkle reduction treatments using Botox, Xeomin, and Daxxify, designed to smooth lines while preserving natural movement. Care is offered in-home or at our Gowanus clinical space, with every treatment personally performed by Dr. Cristina Caridi.",
    "Your skin will look smoother, your features appear lifted, and your expression will reflect how you truly feel.",
  ],

  // DRAFT — practice should review/replace before publishing.
  pullquote: {
    body:
      "We treat muscles, not expressions. The face still tells your story — just with less effort.",
    attr: "Dr. Cristina Caridi, MD",
  },

  // DRAFT — review with practice. Yes-list maps to current treatment scope;
  // no-list reflects standard contraindications.
  bestFor: {
    yes: [
      "Softening horizontal forehead lines, glabellar 11s, and crow's feet",
      "Subtle eyebrow lift or opening tired-looking eyes",
      "Masseter Botox for jawline slimming and TMJ tension relief",
      "Lip flip, chin dimpling, gummy smile correction",
      "Hyperhidrosis: underarm, hand, or foot sweating",
    ],
    no: [
      "Pregnancy or active breastfeeding",
      "Neuromuscular conditions (myasthenia gravis, Lambert-Eaton, ALS) without specialist clearance",
      "Active infection at the proposed injection sites",
      "Known allergy to botulinum toxin or formulation excipients",
      "Wanting a completely immobile, expressionless result — not our practice",
    ],
  },

  // DRAFT — manufacturer descriptions; verify clinical claims.
  products: [
    {
      name: "Botox",
      by: "Allergan",
      note:
        "The original. Five to seven day onset, three to four month duration. The most thoroughly studied formulation in this category.",
      use: "All areas",
    },
    {
      name: "Xeomin",
      by: "Merz",
      note:
        "Pure neurotoxin, no accessory proteins. Often chosen by clients who have developed resistance or sensitivity to other formulations.",
      use: "All areas",
    },
    {
      name: "Daxxify",
      by: "Revance",
      note:
        "Longer-lasting in many clients — up to six to nine months. Newer to market; we use it where the duration trade-off makes sense.",
      use: "All areas",
    },
    {
      name: "Dysport",
      by: "Galderma",
      note:
        "Faster onset (two to three days) and a slightly broader spread, useful for wider muscle groups like the forehead.",
      use: "Forehead · Glabella",
    },
    {
      name: "Jeuveau",
      by: "Evolus",
      note: "Comparable to Botox in onset and duration. A common alternative.",
      use: "All areas",
    },
  ],

  // Flattened from previous Upper / Lower / Jawline / Hyperhidrosis grouping.
  areas: [
    {
      name: "Forehead & glabella",
      copy: "Smooth horizontal forehead lines and the 11s between the brows while preserving natural movement.",
    },
    {
      name: "Crow's feet & eye area",
      copy: "Soften lines around the eyes and gently lift the brow for a rested, naturally elevated look.",
    },
    {
      name: "Lip flip & lower face",
      copy: "Subtle outward lip lift, marionette softening, chin dimpling, and gummy smile correction.",
    },
    {
      name: "Masseter & TMJ",
      copy: "Slim and sculpt the jawline while easing clenching, grinding, and jaw tension.",
    },
    {
      name: "Nefertiti lift (neck)",
      copy: "Relax the platysma to smooth the neckline and subtly lift the jawline — no surgery.",
    },
    {
      name: "Hyperhidrosis",
      copy: "Reduce excessive underarm, hand, or foot sweating for comfort across the year.",
    },
  ],

  // DRAFT — pricing is best-guess concierge-tier ranges.
  // The practice must validate these numbers before publishing.
  pricing: [
    { area: "Botox / Xeomin · per unit", from: 12, to: 16, unit: "/ unit" },
    {
      area: "Daxxify · per unit (longer-lasting)",
      from: 20,
      to: 26,
      unit: "/ unit",
    },
    {
      area: "Lip flip",
      from: 80,
      to: 140,
      unit: "/ visit · 5–7 units",
    },
    {
      area: "Forehead + glabella + crow's feet",
      from: 480,
      to: 720,
      unit: "/ visit · 40–60 units",
    },
    {
      area: "Masseter / TMJ",
      from: 720,
      to: 1100,
      unit: "/ visit · 50–80 units",
    },
    {
      area: "Hyperhidrosis (underarms)",
      from: 1100,
      to: 1500,
      unit: "/ visit · ~100 units",
    },
  ],

  // DRAFT — review with practice.
  process: [
    {
      n: "01",
      t: "Consult & plan",
      c: "We discuss goals, watch how your muscles move, and plan a conservative dose. No pressure to treat the day-of.",
      meta: "20–30 min",
    },
    {
      n: "02",
      t: "Numb & prep",
      c: "Optional topical anesthetic or ice. Photographs from three angles for your chart.",
      meta: "10 min",
    },
    {
      n: "03",
      t: "Treatment",
      c: "Brief, precise injections placed by Dr. Caridi personally. The whole appointment is usually under an hour.",
      meta: "10–15 min",
    },
    {
      n: "04",
      t: "Two-week review",
      c: "Onset is gradual — most clients see results within a week and full effect at two. Refinements within that window are included.",
      meta: "Included",
    },
  ],

  // DRAFT — review with practice. Maps to standard post-Botox guidance.
  downtime: {
    immediate: [
      { t: "Pinpoint redness", c: "Resolves within 30 minutes." },
      {
        t: "Mild swelling",
        c: "Localized, subtle — most clients see none.",
      },
      {
        t: "Headache",
        c: "Possible in the first 24–48 hours, especially for first-time treatments.",
      },
    ],
    aftercare: [
      "Stay upright for 4 hours after treatment.",
      "Gently activate the treated muscles (smile, frown, raise your brows) over the first afternoon — this helps even settling.",
      "Skip strenuous exercise, saunas, and hot yoga for 24 hours.",
      "No facials, peels, or laser for two weeks in the treated area.",
      "Avoid rubbing or massaging the area for 24 hours.",
      "Text the practice if anything feels asymmetric or unexpected — Dr. Caridi answers personally.",
    ],
    workReady:
      "Botox is the original lunchtime treatment — most clients return to work or onto a camera immediately. Plan onset (5–7 days) around any high-stakes events.",
  },

  beforeAfter: [],

  // FAQs pulled verbatim from botoxFAQSchema so SEO rich-results stay in sync.
  faqs: botoxFAQSchema.mainEntity.map((q) => ({
    q: q.name,
    a: q.acceptedAnswer.text,
  })),

  related: [
    {
      id: "fillers",
      slug: "dermal-fillers",
      title: "Dermal Fillers",
      subtitle: "RHA · Juvederm · Radiesse",
      copy: "Often paired with Botox — filler restores volume and structure while neuromodulators soften expression lines.",
      img: { src: "/images/lips_tx.webp", alt: "Dermal fillers treatment" },
    },
    {
      id: "biostim",
      slug: "biostimulatory-fillers",
      title: "Biostimulators",
      subtitle: "Sculptra · Radiesse",
      copy: "The long game on skin quality. Stages well alongside Botox over a six- to twelve-month plan.",
      img: { src: "/images/biostim2_tx.webp", alt: "Biostimulator treatment" },
    },
    {
      id: "consult",
      slug: "consult",
      title: "Aesthetic Consultations",
      subtitle: "60 min · Private",
      copy: "Not sure where to begin? Start with a conversation. The fee is credited toward your first treatment.",
      img: { src: "/images/consult_tx.webp", alt: "Consultation" },
    },
  ],
};
