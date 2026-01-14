import type { LocationContent } from './types';

export const redHookStudioContent: LocationContent = {
  slug: 'red-hook-studio',
  metadata: {
    title: "Red Hook Private Studio (Invite-only) | Caridi Concierge",
    description:
        "Invite-only private studio in Red Hook for established patients seeking physician-led Botox and fillers in a discreet setting.",
    keywords: [
        "Red Hook Botox",
        "private Botox studio Brooklyn",
        "invite-only aesthetic studio",
        "private dermal fillers Brooklyn",
        "physician-led Botox Red Hook",
        "discreet Botox Brooklyn"
    ]
  },
  studioExperience: {
    title: "A private studio for established patients",
    description:
        "The Red Hook studio is a private, invite-only setting reserved for established patients. I use this space for clients who value discretion, continuity of care, and unhurried appointments. It is not a public clinic, and the address is shared after confirmation."
    },
  offerings: {
    title: "Treatments offered at the Red Hook Studio",
    subtitle: "Physician-led care in a private, invite-only setting",
   services: [
        {
            title: "Wrinkle Reduction",
            subtitle: "Botox treatments for established patients",
            whyHere:
            "The Red Hook studio is best suited for established patients who value discretion and continuity of care. I use this setting when longer, unhurried appointments support thoughtful dosing and planning.",
            bullets: [
            "Softens forehead lines, frown lines, and crow’s feet",
            "Dosing planned to preserve natural expression",
            "Ideal for patients with an established treatment history",
            ],
            ctaHref: "/treatments/wrinkle-reduction",
            ctaText: "Learn about wrinkle reduction",
        },
        {
            title: "Dermal Fillers",
            subtitle: "Conservative contour and volume refinement",
            whyHere:
            "Filler treatments in the Red Hook studio allow for additional time and privacy when refining balance, proportion, or structural support over multiple visits.",
            bullets: [
            "Restore soft volume with a conservative approach",
            "Focused on proportion, symmetry, and long-term outcomes",
            "Planned for gradual improvement rather than immediate change",
            ],
            ctaHref: "/treatments/dermal-fillers",
            ctaText: "Learn about dermal fillers",
        },
        {
            title: "Long-Term Treatment Planning",
            subtitle: "Extended consultations for ongoing care",
            whyHere:
            "This setting is well suited for patients who already have an established plan and want dedicated time to reassess goals, timing, and next steps without feeling rushed.",
            bullets: [
            "Review of prior treatments and current goals",
            "Discussion of what makes sense now versus later",
            "Designed for continuity rather than one-time visits",
            ],
            ctaHref: "/treatments/consult",
            ctaText: "Learn about treatment planning",
        },
    ],
    features: [
        {
        title: "Invite-only access",
        description:
            "The studio is reserved for established patients to maintain privacy and a controlled appointment experience."
        },
        {
        title: "Unhurried appointments",
        description:
            "Additional time is built in for thoughtful consultation and careful treatment."
        },
        {
        title: "Continuity of care",
        description:
            "Ideal for patients who have an established treatment plan and prefer a consistent, private setting."
        }
    ]
  },
  faqs: [
    {
    question: "Who is eligible for the Red Hook studio?",
    answer:
        "The Red Hook studio is invite-only and typically reserved for established patients. New patients are encouraged to begin with an appointment in Gowanus or an in-home visit."
    },
    {
        question: "Why is the studio invite-only?",
        answer:
        "Limiting access allows for greater privacy, longer appointments, and a more controlled treatment environment."
    },
    {
        question: "Is the address publicly listed?",
        answer:
        "No. The address is shared after confirmation for eligible appointments."
    },
    {
        question: "Are treatments different at the Red Hook studio?",
        answer:
        "The same treatments are offered, with additional time for consultation and planning in a private setting."
    }
  ]
};