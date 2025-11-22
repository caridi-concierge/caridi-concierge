import { variants } from "@/components/ButtonStyles";

export type Treatment = {
    slug: string;
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    pricing: {
      startingPrice: string;
      note: string;
    };
  };

  export type TreatmentIntroProps = {
    title: string;
    description: string[];
    frequency: string;
    frequencyCtaHref: string;
    frequencyCtaText: string;
    beforeCare: string;
    afterCare: string;
    startingPrice: string;
    note?: string;
  };

  export type TreatmentArea = {
    title: string;
    items: { label: string; description: string }[];
  };
  
  export type TreatmentAreasProps = {
    sectionTitle: string;
    summary: string;
    areas: TreatmentArea[];
    ctaHref: string;
    ctaText: string;
  };

  export interface TreatmentMetadata {
  id: string;
  slug: string;
  title: string;
  badge?: {
    text: string;
    variant: "popular" | "new" | "advanced" | "gentle" | "longLasting" | "gold";
  };
  hook: string;
  description: string; // For simple card view
  highlights: string[]; // For detailed ServiceCard view
  products: string;
  imgSrc: string;
  imgAlt: string;
  startingPrice: string;
  frequency: string;
  note?: string;
  bookHref: string;
  ctaHref: string;
  ctaText: string;
  ctaVariant: keyof typeof variants;
}