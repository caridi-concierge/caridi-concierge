import type { TreatmentDetailContent } from "@/model/treatments/TreatmentDetail";
import { botoxFAQSchema } from "@/content/schemas/treatments/botoxFAQSchema";

/**
 * Neuromodulators (Botox / Xeomin / Daxxify) detail-page content.
 *
 * Source notes:
 * - `overview` paragraphs preserved from the previous WrinkleReductionIntro.
 * - `faqs` pulled verbatim from `botoxFAQSchema` so the FAQ rich-results stay in sync.
 * - `areas` flattened from the previous Upper / Lower / Jaw / Hyperhidrosis grouping.
 */
export const wrinkleReductionDetail: TreatmentDetailContent = {
  id: "wrinkle-reduction",
  slug: "wrinkle-reduction",
  category: "Neuromodulators",
  number: "01",

  title: "Neuromodulators",
  italic: "tailored to you.",
  eyebrow: "Botox · Xeomin · Daxxify",
  subtitle: "Botox · Xeomin · Daxxify",

  lede:
    "Soften expression lines while keeping your face yours. Physician-led Botox, Xeomin, and Daxxify, dosed conservatively, placed precisely, calibrated so your expression still reads as you.",

  heroImage: {
    src: "/images/treatments/botox_crowsfeet_tx.webp",
    alt: "Neuromodulator treatment — Botox, Xeomin, Daxxify — at Caridi Concierge.",
  },

  spec: [
    { l: "Visit", v: "30–45 min" },
    { l: "Onset", v: "5–7 days" },
    { l: "Longevity", v: "3–4 months" },
    { l: "Downtime", v: "None" },
    { l: "Anesthetic", v: "Optional ice or topical" },
    { l: "Performed by", v: "Cristina Caridi, MD" },
  ],

  overview: [
    "Physician-led wrinkle reduction treatments using Botox, Xeomin, and Daxxify, designed to smooth lines while preserving natural movement. Care is offered in-home or at our Gowanus clinical space, with every treatment personally performed by Dr. Cristina Caridi.",
    "Your skin will look smoother, your features appear lifted, and your expression will reflect how you truly feel.",
  ],

  pullquote: {
    body:
      "Botox should never erase expression. It should soften what feels overactive while preserving what makes your face feel like you.",
    attr: "Dr Caridi",
  },

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
    ],
  },

  // Product copy adapted from manufacturer descriptions.
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
        "Peptide-powered for improved skin quality. Longer-lasting in many clients, up to six to nine months. Newer to market; we use it where the duration trade-off makes sense.",
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
      copy: "Relax the platysma to smooth the neckline and gently lift the jawline. No surgery.",
    },
    {
      name: "Hyperhidrosis",
      copy: "Reduce excessive underarm, hand, or foot sweating for comfort across the year.",
    },
  ],

  pricing: [
    { area: "Botox / Xeomin · per unit", from: 12, unit: "/ unit" },
    {
      area: "Daxxify · per unit (longer-lasting)",
      from: 20,
      unit: "/ unit",
    },
    {
      area: "Lip flip",
      from: 80,
      unit: "/ visit · 5–7 units",
    },
    {
      area: "Forehead + glabella + crow's feet",
      from: 480,
      unit: "/ visit · 40–60 units",
    },
    {
      area: "Masseter / TMJ",
      from: 720,
      unit: "/ visit · 50–80 units",
    },
    {
      area: "Hyperhidrosis (underarms)",
      from: 1100,
      unit: "/ visit · ~100 units",
    },
  ],

  process: [
    {
      n: "01",
      t: "Consult & plan",
      c: "We discuss goals, watch how your muscles move, and plan a conservative dose. No pressure to treat the day-of.",
    },
    {
      n: "02",
      t: "Numb & prep",
      c: "Optional topical anesthetic or ice. Photographs from three angles for your chart.",
    },
    {
      n: "03",
      t: "Treatment",
      c: "Brief, precise injections placed by Dr. Caridi personally. The whole appointment is usually under an hour.",
    },
    {
      n: "04",
      t: "Two-week review",
      c: "Onset is gradual, most clients see results within a week and full effect at two. Virtual follow-up included.",
    },
  ],

  downtime: {
    immediate: [
      { t: "Pinpoint redness", c: "Resolves within 30 minutes." },
      {
        t: "Mild swelling",
        c: "Localized. Most clients see none.",
      },
      {
        t: "Headache",
        c: "Possible in the first 24–48 hours, especially for first-time treatments.",
      },
    ],
    aftercare: [
      "Stay upright for 4 hours after treatment.",
      "Gently activate the treated muscles (smile, frown, raise your brows) over the first afternoon, this helps even settling.",
      "Skip strenuous exercise, saunas, and hot yoga for 24 hours.",
      "No facials, peels, or laser for two weeks in the treated area.",
      "Avoid rubbing or massaging the area for 24 hours.",
      "Text the practice if anything feels asymmetric or unexpected, Dr. Caridi answers personally.",
    ],
    workReady:
      "Botox is the original lunchtime treatment. Most clients return to work or onto a camera immediately. Plan onset (5–7 days) around any high-stakes events.",
  },

  beforeAfter: [
    {
      src: "/images/results/botox-crowsfeet-before-after.webp",
      alt: "Crow's feet, before and after neuromodulator treatment",
      label: "Softened crow's feet",
    },
    {
      src: "/images/results/botox-cheek-filler-before-after.webp",
      alt: "Forehead botox treatment",
      label: "Forehead botox",
    },
  ],

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
      subtitle: "RHA · Juvederm",
      copy: "Often paired with Botox — filler restores volume and structure while neuromodulators soften expression lines.",
      img: { src: "/images/treatments/filler_lip_tx.webp", alt: "Dermal fillers treatment" },
    },
    {
      id: "biostim",
      slug: "biostimulatory-fillers",
      title: "Biostimulators",
      subtitle: "Radiesse",
      copy: "The long game on skin quality. Stages well alongside Botox over a six- to twelve-month plan.",
      img: { src: "/images/treatments/filler_chin_tx.webp", alt: "Biostimulator treatment" },
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
