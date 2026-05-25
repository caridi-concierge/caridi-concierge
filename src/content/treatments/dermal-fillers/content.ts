import type { TreatmentDetailContent } from "@/content/treatments/types";

export const content: TreatmentDetailContent = {
  id: "dermal-fillers",
  slug: "dermal-fillers",
  category: "Filler",
  number: "02",

  title: "Dermal Fillers",
  italic: "in proportion.",
  eyebrow: "Filler · Volume · Contour",
  subtitle: "RHA · Juvederm",

  lede:
    "Restore volume and define contour. Lips, cheeks, chin, jawline, tear troughs, planned around proportion, never volume for its own sake.",

  heroImage: {
    src: "/images/treatments/filler_lip_tx.webp",
    alt:
      "Editorial portrait — dermal filler treatment by Dr. Cristina Caridi at Caridi Concierge.",
  },

  spec: [
    { l: "Visit", v: "45–60 min" },
    { l: "Onset", v: "Immediate" },
    { l: "Longevity", v: "9–18 months" },
    { l: "Downtime", v: "24–72 hours" },
    { l: "Anesthetic", v: "Topical · in-product lidocaine" },
    { l: "Performed by", v: "Cristina Caridi, MD" },
  ],

  overview: [
    "Filler is a hyaluronic-acid (or calcium-hydroxylapatite) gel used to restore volume the face has lost, refine a contour, or balance proportion. It is not a face-lift, a filter, or a fix for tired sleep. Done well, it is unrecognizable as treatment. You simply look like yourself, refined.",
    "We work proportion-first. That means a plan that begins with the bones of your face: the angle of the jaw, the height of the cheek, the support beneath the eye. Lip projection or chin balance follow from that, never the reverse.",
  ],

  pullquote: {
    body:
      "The art of filler is knowing where support matters, and where restraint matters more.",
    attr: "Dr. Caridi",
  },

  bestFor: {
    yes: [
      "Restoring midface volume after weight loss or aging",
      "Defining the jawline or chin without surgery",
      "Subtle lip hydration, definition, or a gentle flip",
      "Softening tear troughs in the right anatomy",
      "Re-balancing facial proportion after prior work",
    ],
    no: [
      "Acute swelling, infection, or active cold sore in the area",
      "Pregnancy or active breastfeeding",
      "Allergy to lidocaine, hyaluronic acid, bee or wasp venom",
    ],
  },

  products: [
    {
      name: "RHA 2 / 3 / 4",
      by: "Revance",
      note: "Resilient HA, moves with expression. Default for tear trough, lip, perioral.",
      use: "Tear trough · Lip · Perioral",
    },
    {
      name: "RHA Redensity",
      by: "Revance",
      note: "Ideal for dynamic areas like perioral lines, lips, and under-eye areas.",
      use: "Perioral · Lip · Under-eye",
    },
    {
      name: "Juvederm Voluma",
      by: "Allergan",
      note: "Lifting capacity for cheek and midface. Lasts ~18 months in most clients.",
      use: "Cheek · Midface",
    },
  ],

  areas: [
    {
      name: "Cheek & midface",
      copy: "Lift, support, restore the angle that drops with time.",
    },
    {
      name: "Lips",
      copy: "Hydration, definition, a gentle flip, never inflation.",
    },
    {
      name: "Chin & jawline",
      copy: "Bring proportion back to the lower face. Subtle but structural.",
    },
    {
      name: "Tear trough",
      copy: "Soften shadow under the eye when the anatomy supports it.",
    },
    {
      name: "Perioral",
      copy: "Soften lines around the mouth and corners.",
    },
    {
      name: "Temple",
      copy: "Structural support that frames the upper face.",
    },
  ],

  pricing: [
    { area: "RHA · per syringe", from: 600, unit: "/ syringe" },
    {
      area: "Juvederm Voluma · per syringe",
      from: 600,
      unit: "/ syringe",
    },
    {
      area: "Two-syringe plan (cheek + chin, etc.)",
      from: 1200,
      unit: "/ visit",
    },
  ],

  process: [
    {
      n: "01",
      t: "Consult & plan",
      c: "We map the bones of your face, talk through goals, and plan in proportion. No pressure to treat the day-of.",
    },
    {
      n: "02",
      t: "Numb & prep",
      c: "Topical anesthetic, sterile prep, photographs from three angles for your chart.",
    },
    {
      n: "03",
      t: "Treatment",
      c: "Injections placed by Dr. Caridi personally, cannula or needle as the anatomy calls for. Calm and conservative.",
    },
    {
      n: "04",
      t: "Two-week review",
      c: "We will check in with you at two weeks to assess results and discuss any refinements needed.",
    },
  ],

  downtime: {
    immediate: [
      { t: "Pinpoint redness", c: "Resolves within hours." },
      {
        t: "Mild swelling",
        c: "Most visible at 24–48h, gone by day 4–5.",
      },
      {
        t: "Bruising",
        c: "Possible. Most visible at days 2–4. Arnica & cold compress may help.",
      },
    ],
    aftercare: [
      "No strenuous exercise for 24 hours.",
      "No alcohol the evening of treatment.",
      "No facials, peels, or laser for two weeks.",
      "Sleep slightly elevated the first night.",
      "Skip blood thinners (aspirin, fish oil, ibuprofen) 48h before & after, with your physician's blessing.",
      "Text the practice at any sign of asymmetric pain, blanching, or vision change. Dr. Caridi answers personally.",
    ],
    workReady:
      "Most clients return to work the same afternoon. Plan camera-on meetings 3–4 days out for filler in the lower face.",
  },


  beforeAfter: [
    {
      src: "/images/results/botox-cheek-lip-chin-filler-before-after.webp",
      alt: "Cheek, lip, and chin filler, before and after",
      label: "Cheek, lip & chin",
    },
    {
      src: "/images/results/botox-cheek-filler-before-after.webp",
      alt: "Cheek filler, before and after",
      label: "Cheek refinement",
    },
    {
      src: "/images/results/cheek-filler-before-after.webp",
      alt: "Full face refresh result with softened lines and balanced facial contours",
      label: "Full Face Harmony",
    },
  ],

  faqs: [
    {
      q: "Will I look 'done'?",
      a: "Not in our hands. We treat with restraint and proportion. Most people in your life will say you look rested — they will not say you've had filler. If a client asks for a more pronounced result, we discuss it explicitly and stage it.",
    },
    {
      q: "How long does HA filler last?",
      a: "Lip filler typically lasts 9–12 months. Cheek and jawline products (Voluma) last 15–18 months in most clients. Tear trough placement can last well over a year because of how slowly the area metabolises product.",
    },
    {
      q: "Can it be reversed?",
      a: "Hyaluronic acid filler can be dissolved with hyaluronidase if needed. The goal of a careful first plan is to not need to.",
    },
    {
      q: "Does it hurt?",
      a: "Topical anesthetic is applied for 15 minutes. Most filler products contain lidocaine. Most clients describe the experience as a series of brief pressures rather than pain.",
    },
    {
      q: "I had filler years ago and don't love how it looks. Can you help?",
      a: "Yes — frequently. We assess what's still present (filler can persist longer than the literature suggests), dissolve selectively if needed, and rebuild from proportion. This is one of the most common consults in the practice.",
    },
    {
      q: "How do I know which product I need?",
      a: "You don't have to. The product follows the plan, and the plan follows the anatomy. We'll walk you through what we'd recommend and why before we open a single syringe.",
    },
  ],

  related: [
    {
      id: "botox",
      slug: "wrinkle-reduction",
      title: "Neuromodulators",
      subtitle: "Botox · Xeomin · Daxxify",
      copy: "Frequently paired with filler — soften expression lines while volume restores structure.",
      img: { src: "/images/treatments/botox_crowsfeet_tx.webp", alt: "Neuromodulators treatment" },
    },
    {
      id: "biostim",
      slug: "biostimulatory-fillers",
      title: "Biostimulators",
      subtitle: "Radiesse",
      copy: "For the long game on skin quality. Stages well with filler over a 6–12 month plan.",
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
