import type { LocationContent } from './types';

export const redHookStudioContent: LocationContent = {
  slug: 'red-hook',
  metadata: {
    title: "Red Hook Private Studio | Caridi Concierge",
    description:
        "Physician-led Botox, dermal fillers, and treatment planning in a private Red Hook studio setting, designed for discretion and unhurried care.",
    keywords: [
        "Red Hook Botox",
        "private Botox studio Brooklyn",
        "private dermal fillers Brooklyn",
        "physician-led Botox Red Hook",
        "discreet Botox Brooklyn",
        "Red Hook aesthetic doctor"
    ]
    },
  studioExperience: {
    title: "A private studio setting in Red Hook",
    description:
        "The Red Hook studio is a private setting designed for patients who prefer a quieter, more discreet appointment. I use it for unhurried visits focused on careful planning and natural-looking results. Appointments are scheduled in advance, and the address is shared after confirmation."
    },
  offerings: {
  title: "Treatments offered in Red Hook",
  subtitle: "Physician-led care in a private studio setting",
  services: [
    {
      title: "Wrinkle Reduction",
      subtitle: "Botox treatments with a conservative approach",
      whyHere:
        "This setting works well when you want privacy and time for thoughtful assessment before treatment, especially for patients who prefer ongoing, consistent care.",
      bullets: [
        "Softens forehead lines, frown lines, and crow’s feet",
        "Dosing planned to preserve natural expression",
        "Focused on balance and long-term outcomes",
      ],
      ctaHref: "/treatments/wrinkle-reduction",
      ctaText: "Learn about wrinkle reduction",
    },
    {
      title: "Dermal Fillers",
      subtitle: "Conservative contour and volume refinement",
      whyHere:
        "Red Hook allows for unhurried planning when refining proportion, symmetry, or structural support over time, without the feel of a public clinic.",
      bullets: [
        "Restore soft volume with a conservative approach",
        "Focused on proportion and natural results",
        "Planned for gradual improvement when appropriate",
      ],
      ctaHref: "/treatments/dermal-fillers",
      ctaText: "Learn about dermal fillers",
    },
    {
      title: "Long-Term Treatment Planning",
      subtitle: "Extended planning for ongoing care",
      whyHere:
        "If your goal is gradual, intentional change, this setting supports longer conversations around priorities, timing, and what will make the most difference.",
      bullets: [
        "Review of goals, anatomy, and prior treatments",
        "Discussion of what makes sense now versus later",
        "Clear recommendations without pressure",
      ],
      ctaHref: "/treatments/consult",
      ctaText: "Learn about treatment planning",
    },
  ],
  features: [
    {
      title: "Private studio setting",
      description:
        "A quieter environment for patients who prefer discretion and a more personal appointment experience.",
    },
    {
      title: "Unhurried appointments",
      description:
        "Time is built in for careful consultation, planning, and conservative treatment.",
    },
    {
      title: "Continuity of care",
      description:
        "Well suited for patients who prefer consistent follow-up and gradual, natural-looking results.",
    },
  ],
},
  faqs: [
  {
    question: "What treatments do you offer at the Red Hook studio?",
    answer:
      "Just about everything! The Red Hook studio offers physician-led wrinkle reduction with Botox, dermal fillers, and long-term treatment planning. Treatments are approached conservatively and tailored to your anatomy and goals."
  },
  {
    question: "What makes the Red Hook studio different?",
    answer:
      "Appointments in Red Hook take place in a private studio setting designed for discretion and unhurried care. This environment allows more time for thoughtful consultation, planning, and gradual refinement without the feel of a public clinic."
  },
  {
    question: "What do I need to know before my appointment?",
    answer:
      "Appointments are scheduled in advance, and visit details are shared after confirmation. You’ll receive guidance ahead of time so you know what to expect, with time built in for questions before any treatment begins."
  }
]
};