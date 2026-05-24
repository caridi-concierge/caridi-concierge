import type { TreatmentDetailContent } from "@/model/treatments/TreatmentDetail";
import { biostimulatoryFillersFAQSchema } from "@/content/schemas/treatments/biostimulatoryFillersFAQSchema";

/**
 * Biostimulatory fillers (Radiesse) detail-page content.
 *
 * Source notes:
 * - `overview` paragraphs preserved from the previous BiostimulatoryFillersIntro.
 * - `faqs` pulled verbatim from `biostimulatoryFillersFAQSchema` so the FAQ rich-results stay in sync.
 * - `areas` flattened from the previous Face / Neck & Chest / Body grouping.
 */
export const biostimulatoryFillersDetail: TreatmentDetailContent = {
  id: "biostimulatory-fillers",
  slug: "biostimulatory-fillers",
  category: "Skin",
  number: "04",

  title: "Biostimulatory Fillers",
  italic: "the long game.",
  eyebrow: "Radiesse",
  subtitle: "Radiesse",

  lede:
    "Rebuild the collagen scaffold underneath your skin. Radiesse works gradually, results that look like skin quality, not product. Planned in a series, calibrated to your skin, paced to your calendar.",

  heroImage: {
    src: "/images/treatments/filler_chin_tx.webp",
    alt:
      "Biostimulatory filler treatment with Radiesse at Caridi Concierge.",
  },

  spec: [
    { l: "Visit", v: "45 min" },
    { l: "Onset", v: "4–6 weeks" },
    { l: "Longevity", v: "Up to 2 years" },
    { l: "Downtime", v: "24–48 hours" },
    { l: "Anesthetic", v: "Topical" },
    { l: "Performed by", v: "Cristina Caridi, MD" },
  ],

  overview: [
    "Biostimulatory fillers like Radiesse stimulate your body’s natural collagen production, improving skin firmness, texture, and structure gradually over time.",
    "At Caridi Concierge, these physician-led treatments are performed by Dr. Caridi as private in-home visits (or in our Gowanus clinic), designed to restore lift and skin quality across the face, neck, chest, and arms without adding bulk or weight.",
  ],

  pullquote: {
    body:
      "Biostimulators help your body to build collagen, adding structure and support over time.",
    attr: "Dr. Caridi",
  },

  bestFor: {
    yes: [
      "Restoring midface, cheek, and temple volume with collagen support",
      "Defining the jawline and chin with structural lift",
      "Improving skin firmness on the neck and décolletage",
      "Long-term skin-quality investment, staged over 6–12 months",
      "Pairing with HA filler for an immediate-plus-gradual plan",
      "Non-surgical contouring on the body (upper arms, glute)",
    ],
    no: [
      "Lips and tear troughs, biostimulators are not indicated for these areas",
      "Wanting an immediately visible volumising result, choose HA filler instead",
      "Pregnancy or active breastfeeding",
      "Active autoimmune flare or recent infection without specialist clearance",
      "Known allergy to product components (calcium hydroxylapatite, PLLA)",
      "Planning face lift or neck lift in the next 2 years? Dermal filler is a better option in this case",
    ],
  },

  products: [
    {
      name: "Radiesse",
      by: "Merz",
      note:
        "Calcium hydroxylapatite. Provides immediate contour plus collagen stimulation. Built for the jawline, chin, and hands; not for delicate areas.",
      use: "Jawline · Chin · Hand",
    },
    {
      name: "Diluted Radiesse",
      by: "Merz",
      note:
        "Radiesse diluted further to improve skin quality over broader areas. Less contour, more collagen, used on the neck, décolletage, and arms.",
      use: "Neck · Chest · Arms",
    },
  ],

  areas: [
    {
      name: "Cheek & midface",
      copy: "Rebuild collagen support in the upper cheek, restoring the angle that drops with time.",
    },
    {
      name: "Jawline & lower face",
      copy: "Define the jawline and soften deeper folds with subtle, structural lift, not bulk.",
    },
    {
      name: "Neck",
      copy: "Smooth crepey skin and horizontal lines by stimulating new collagen.",
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
      name: "Non-surgical butt lift",
      copy: "Add volume and structural lift to the buttocks while stimulating long-term collagen.",
    },
  ],

  pricing: [
    { area: "Radiesse · per syringe", from: 850, unit: "/ syringe" },
    {
      area: "Three-visit collagen plan (cheek + midface)",
      from: 2550,
      unit: "/ 3 visits",
    },
    {
      area: "Body contouring (arms / glute)",
      from: 1800,
      unit: "· quoted at consult",
    },
  ],

  process: [
    {
      n: "01",
      t: "Consult & plan",
      c: "We map where collagen is thinning, set realistic timelines, and plan a series. Biostim is staged work — most plans run two to three visits over 6–12 weeks.",
    },
    {
      n: "02",
      t: "Numb & prep",
      c: "Topical anesthetic, sterile prep, photographs from three angles for your chart and a baseline for future comparison.",
    },
    {
      n: "03",
      t: "Treatment",
      c: "Injections placed by Dr. Caridi personally — typically via cannula across broad areas. Calm, conservative, never rushed.",
    }
  ],

  downtime: {
    immediate: [
      {
        t: "Mild swelling",
        c: "Localized for 24–48 hours. Slightly more pronounced with Sculptra than Radiesse.",
      },
      {
        t: "Bruising",
        c: "Possible — most visible days 2–4. Arnica and cold compress may help.",
      },
      {
        t: "Tenderness",
        c: "Most clients describe the area as briefly sore for a day.",
      },
    ],
    aftercare: [
      "Avoid touching or pressing the treated area for 24 hours.",
      "No strenuous exercise, alcohol, saunas, or hot yoga for 24–48 hours.",
      "Avoid retinol, exfoliants, or active ingredients in the treated area for several days.",
      "Sleep slightly elevated the first night.",
      "Results build gradually — visible improvement begins around 4–6 weeks and continues for several months.",
      "Text the practice with any concerns. Dr. Caridi answers personally.",
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
      subtitle: "RHA · Juvederm",
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
      subtitle: "Tailored",
      copy: "Not sure where to begin? Start with a conversation. The fee is credited toward your first treatment.",
      img: { src: "/images/treatments/consult_2.webp", alt: "Consultation" },
    },
  ],
};
