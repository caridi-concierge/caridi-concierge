import type { LocationContent } from './types';

export const gowanusContent: LocationContent = {
  slug: 'gowanus',
  metadata: {
    title: 'Gowanus Botox and Fillers | Caridi Concierge',
    description: 'Physician-led Botox, fillers, and collagen-builders in a private Gowanus clinical setting, with a conservative, natural approach.',
    keywords: [
      "Gowanus Botox",
      "Botox in Gowanus",
      "Dermal fillers Gowanus",
      "Daxxify Brooklyn",
      "Physician-led Botox Brooklyn",
      "Wrinkle reduction Brooklyn",
    ]
  },
  studioExperience: {
    title: "A private clinical setting in Gowanus",
    description:
      "The Gowanus location offers a quiet, clinical environment for patients who prefer an in-office appointment. I use this setting for treatments that benefit from a controlled space and unhurried consultation. Every visit is physician-led, conservative in approach, and focused on results that look natural and intentional."
  },
  offerings: {
    title: 'Our Treatments',
    subtitle: 'Physician-led injectables, tailored to your anatomy and goals',
    services: [
      {
        title: "Wrinkle Reduction",
        subtitle: "Botox treatments with a conservative approach",
        whyHere:
          "Not sure about in-home treatments? We can treat you here in our private clinical setting.",
        bullets: [
          "Softens forehead lines, frown lines, and crow’s feet",
          "Dosing and placement planned to preserve natural expression",
          "Focused on balance and long-term outcomes, not trends",
        ],
        ctaHref: "/treatments/wrinkle-reduction",
        ctaText: "Learn about wrinkle reduction",
      },
      {
        title: "Dermal Fillers",
        subtitle: "Soft volume restoration and contour refinement",
        whyHere:
          "Fillers benefit from unhurried planning and precision, especially when we’re refining proportion, symmetry, or structure.",
        bullets: [
          "Restore soft volume where it has been lost",
          "Refine contours with a balanced, conservative aesthetic",
          "Planned around facial proportions and your goals",
        ],
        ctaHref: "/treatments/dermal-fillers",
        ctaText: "Learn about dermal fillers",
      },
      {
        title: "Biostimulatory Fillers",
        subtitle: "Collagen-building support over time",
        whyHere:
          "When the goal is gradual improvement in support and skin quality, these treatments work best with clear planning and follow-up.",
        bullets: [
          "Supports collagen production for gradual, natural change",
          "Improves skin quality and structural support over time",
          "Often paired thoughtfully with other treatments when appropriate",
        ],
        ctaHref: "/treatments/biostimulatory-fillers",
        ctaText: "Learn about collagen builders",
        badge: { text: "Long Lasting", variant: "popular" },
      },
    ],
    features: [
      {
        title: "Physician-led treatment planning",
        description:
          "All treatments are performed by Dr. Caridi, with an emphasis on facial anatomy, balance, and long-term outcomes."
      },
      {
        title: "Conservative, natural results",
        description:
          "The goal is refinement, not transformation. Treatments are designed to soften, restore, or rebalance without changing how you look."
      },
      {
        title: "Clear recommendations",
        description:
          "You’ll receive honest guidance about what will help, what can wait, and what isn’t necessary."
      }
    ]
  },
  faqs: [
    {
      question: 'What makes the Gowanus location different?',
      answer: 'The Gowanus location is a private clinical space I use for patients who prefer an in-office setting. Appointments are unhurried and focused on careful assessment and planning.'
    },
    {
      question: "What treatments do you offer at the Gowanus location?",
      answer:
        "The Gowanus location offers physician-led wrinkle reduction with Botox, dermal fillers, and biostimulatory fillers. Treatments are planned conservatively and tailored to your anatomy and goals."
    },
    {
      question: 'Is parking available at the Gowanus location?',
      answer: 'Yes, there is street parking available on 4th Avenue and surrounding streets. The location is also easily accessible by public transportation via the Union St-4th Ave subway station.'
    },
    {
      question: "What do I need to know before my appointment?",
      answer:
        "You’ll receive details ahead of your visit, including what to expect and how to prepare. Appointments include time for consultation and questions before any treatment begins."
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit will include a thorough consultation where we discuss your goals, medical history, and create a personalized treatment plan. We\'ll take time to ensure you\'re comfortable and fully informed before any treatment.'
    }
  ]
};