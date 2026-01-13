// Content types for location detail pages
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
    treatments: Array<{
      title: string;
      description: string;
      image: string;
      href?: string; // Link to treatment page
    }>;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}