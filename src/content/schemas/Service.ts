import { COMPANY } from '@/lib/constants/company';

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
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.6752831,
        "longitude": -74.0130946
      },
      "geoRadius": 12875
    },
    "offers": {
      "@type": "Offer",
      "url": `${COMPANY.url}/treatments/wrinkle-reduction`,
      "priceCurrency": "USD",
      "price": `${process.env.PRICE_BOTOX ?? 12}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": `${process.env.PRICE_BOTOX ?? 12}`,
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
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.6752831,
        "longitude": -74.0130946
      },
      "geoRadius": 12875
    },
    "offers": {
      "@type": "Offer",
      "url": "https://caridiconcierge.com/treatments/dermal-fillers",
      "priceCurrency": "USD",
      "price": `${process.env.PRICE_DERMAL_FILLER ?? 600}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": `${process.env.PRICE_DERMAL_FILLER ?? 600}`,
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
    "description": "In-home biostimulatory filler treatments using products like Radiesse or Sculptra to build collagen in the skin and restore volume. Treatments are tailored and priced by unit.",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "url": COMPANY.url
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.6752831,
        "longitude": -74.0130946
      },
      "geoRadius": 12875
    },
    "offers": {
      "@type": "Offer",
      "url": "https://caridiconcierge.com/treatments/biostimulatory-fillers",
      "priceCurrency": "USD",
      "price": `${process.env.PRICE_BIOSTIMULATORY_FILLER ?? 825}`,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": `${process.env.PRICE_BIOSTIMULATORY_FILLER ?? 825}`,
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