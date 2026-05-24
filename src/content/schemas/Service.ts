import { COMPANY } from '@/lib/constants/company';
import { areaServed } from './areaServed';
import { PRICES } from '@/lib/constants/pricing';

const priceConsult = PRICES.consult;
const priceBotox = PRICES.botox;
const priceFillers = PRICES.dermalFiller;
const priceBiostim = PRICES.biostimulatoryFiller;
const priceChemicalPeels = PRICES.chemicalPeel;

export const botoxServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Botox Wrinkle Reduction",
    "name": "Botox Treatment",
    "description": "In-home Botox treatments using products like Botox, Xeomin, or Daxxify to smooth wrinkles and refresh your appearance. Treatments are tailored and priced by unit.",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "url": COMPANY.url,
    },
    "areaServed": areaServed,
    "offers": {
      "@type": "Offer",
      "url": `${COMPANY.url}/treatments/wrinkle-reduction`,
      "priceCurrency": "USD",
      "price": `${priceBotox}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": `${priceBotox}`,
        "priceCurrency": "USD",
        "unitText": "unit",
        "priceType": "FromPrice"
      },
      "eligibleRegion": {
        "@type": "State",
        "name": "New York"
      },
      "availability": "https://schema.org/InStock",
      "potentialAction": {
        "@type": "ScheduleAction",
        "target": COMPANY.bookingUrl,
        "name": "Book an appointment",
        "provider": {
          "@type": "Organization",
          "name": COMPANY.name
        }
      }
    }
  }

export const dermalFillerServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dermal Filler Treatment",
    "name": "Dermal Filler Treatment",
    "description": "In-home dermal filler treatments using products like RHA or Juvederm to smooth wrinkles, restore volume, and add contours. Treatments are tailored and priced by unit.",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "url": COMPANY.url
    },
    "areaServed": areaServed,
    "offers": {
      "@type": "Offer",
      "url": "https://caridiconcierge.com/treatments/dermal-fillers",
      "priceCurrency": "USD",
      "price": `${priceFillers}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": `${priceFillers}`,
        "priceCurrency": "USD",
        "unitText": "syringe",
        "priceType": "FromPrice"
      },
      "eligibleRegion": {
        "@type": "State",
        "name": "New York"
      },
      "availability": "https://schema.org/InStock",
      "potentialAction": {
        "@type": "ScheduleAction",
        "target": COMPANY.bookingUrl,
        "name": "Book an appointment",
        "provider": {
          "@type": "Organization",
          "name": COMPANY.name
        }
      }
    }
  }

export const biostimulatoryFillerServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Biostimulatory Filler Treatment",
    "name": "Biostimulatory Filler Treatment",
    "description": "In-home biostimulatory filler treatments using Radiesse to build collagen in the skin and restore volume. Treatments are tailored and priced by unit.",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "url": COMPANY.url
    },
    "areaServed": areaServed,
    "offers": {
      "@type": "Offer",
      "url": "https://caridiconcierge.com/treatments/biostimulatory-fillers",
      "priceCurrency": "USD",
      "price": `${priceBiostim}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": `${priceBiostim}`,
        "priceCurrency": "USD",
        "unitText": "unit",
        "priceType": "FromPrice"
      },
      "eligibleRegion": {
        "@type": "State",
        "name": "New York"
      },
      "availability": "https://schema.org/InStock",
      "potentialAction": {
        "@type": "ScheduleAction",
        "target": COMPANY.bookingUrl,
        "name": "Book an appointment",
        "provider": {
          "@type": "Organization",
          "name": COMPANY.name
        }
      }
    }
  }

  export const consultServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Consultation",
    "name": "Consultation",
    "description": "Personalized consultation to discuss your aesthetic goals and create a treatment plan tailored to your needs.",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "url": COMPANY.url,
    },
    "areaServed": areaServed,
    "offers": {
      "@type": "Offer",
      "url": `${COMPANY.url}/treatments/consult`,
      "priceCurrency": "USD",
      "price": `${priceConsult}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": `${priceConsult}`,
        "priceCurrency": "USD",
        "unitText": "consultation",
        "priceType": "FromPrice"
      },
      "eligibleRegion": {
        "@type": "State",
        "name": "New York"
      },
      "availability": "https://schema.org/InStock",
      "potentialAction": {
        "@type": "ScheduleAction",
        "target": COMPANY.bookingUrl,
        "name": "Book a Consultation",
        "provider": {
          "@type": "Organization",
          "name": COMPANY.name
        }
      }
    }
  }

  export const chemicalPeelsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Chemical Peel",
    "name": "Chemical Peel",
    "description": "In-home medical-grade chemical peels, such as the VI Peel, to treat discoloration, melasma, acne marks, and uneven texture. Treatments are tailored and priced per treatment.",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "url": COMPANY.url,
    },
    "areaServed": areaServed,
    "offers": {
      "@type": "Offer",
      "url": `${COMPANY.url}/treatments/chemical-peels`,
      "priceCurrency": "USD",
      "price": `${priceChemicalPeels}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": `${priceChemicalPeels}`,
        "priceCurrency": "USD",
        "unitText": "treatment",
        "priceType": "FromPrice"
      },
      "eligibleRegion": {
        "@type": "State",
        "name": "New York"
      },
      "availability": "https://schema.org/InStock",
      "potentialAction": {
        "@type": "ScheduleAction",
        "target": COMPANY.bookingUrl,
        "name": "Book an appointment",
        "provider": {
          "@type": "Organization",
          "name": COMPANY.name
        }
      }
    }
  }