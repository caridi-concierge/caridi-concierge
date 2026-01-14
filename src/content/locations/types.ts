// Content types for location detail pages
import type { LocationServiceCardProps } from "@/components/LocationServiceCard";

export interface LocationContent {
  slug: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  studioExperience: {
    title: string;
    description: string;
  };
  offerings: {
    title: string;
    subtitle: string;
    services: LocationServiceCardProps[];
    features: { title: string; description: string }[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}