export type Treatment = {
    slug: string;
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
  };

  export type TreatmentIntroProps = {
    title: string;
    description: string[];
    frequency: string;
    frequencyCtaHref: string;
    frequencyCtaText: string;
    beforeCare: string;
    afterCare: string;
  };

  export type TreatmentArea = {
    title: string;        // e.g. "Upper Face"
    items: { label: string; description: string }[];
  };
  
  export type TreatmentAreasProps = {
    sectionTitle: string;
    areas: TreatmentArea[];
    ctaHref: string;
    ctaText: string;
  };