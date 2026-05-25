import type { TreatmentMetadata } from "@/content/treatments/types";
import { PRICES } from "@/lib/constants/pricing";

export const facts: TreatmentMetadata = {
  id: "consult",
  slug: "consult",
  title: "Consult",
  hook: "Discover your perfect treatment plan.",
  description:
    "Get personalized guidance for your aesthetic goals. Dr Caridi will assess your needs and create a customized treatment plan tailored to your unique features and desired results.",
  highlights: [
    "Personalized consultation with Dr. Caridi",
    "Custom treatment plan based on your goals and anatomy",
    "Transparent discussion of options, benefits, and expectations",
    "Flexible scheduling to fit your busy lifestyle",
  ],
  products: "Consultation only",
  imgSrc: "/images/treatments/consult_2.webp",
  imgAlt:
    "Decorative image for the Consultation treatment page. Botox and fillers consultation",
  startingPrice: `$${PRICES.consult}`,
  note: "Decide you want services? We waive the fee.",
  frequency: "Schedule as needed for personalized guidance",
  bookHref: "/book?source=card_consult",
  ctaHref: "/treatments/consult",
  ctaText: "Learn More",
  category: "Consults",
  from: PRICES.consult,
  unit: "· credited to first visit",
  duration: "60 min",
};
