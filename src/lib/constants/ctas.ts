import type { CTASectionProps } from "@/components/CTA";

export const ctaVariants: Record<string, CTASectionProps> = {
  default: {
    title: "Modern beauty, made effortless.",
    subtitle:
      "Personalized Botox and filler treatments that restore balance, volume, and confidence.",
    ctaHref: "/book",
    ctaText: "Book a Visit",
    variant: "secondary",
    bgColor: "bg-outer-space",
    textColor: "text-alabaster",
    ariaLabel: "Book a visit to Caridi Concierge for personalized Botox and filler treatments",
  },
  consult: {
    title: "Ready to start your journey?",
    subtitle: "Discover treatments tailored just for you.",
    ctaHref: "/contact",
    ctaText: "Get in Touch",
    variant: "primary",
    bgColor: "bg-champagne",
    textColor: "text-outer-space",
    ariaLabel: "Get in touch with Caridi Concierge for personalized Botox and filler treatments",
  },
  promo: {
    title: "Special seasonal offer",
    subtitle: "Book now and enjoy exclusive perks with your first treatment.",
    ctaHref: "/book",
    ctaText: "Claim Offer",
    variant: "secondary",
    bgColor: "bg-steel-blue",
    textColor: "text-alabaster",
    ariaLabel: "Claim a special seasonal offer at Caridi Concierge for personalized Botox and filler treatments",
  },
};
  