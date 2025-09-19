export type Product = {
    title: string;
    imgSrc: string;
    imgAlt: string;
    description: string;
    uses: string[];
  };
  
export type ProductSectionProps = {
    sectionTitle: string;
    ctaHref: string;
    ctaText: string;
    products: Product[];
  };