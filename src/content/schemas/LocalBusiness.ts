import { COMPANY } from "@/lib/constants/company";
import { areaServed } from "./areaServed";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": `${COMPANY.url}/#localbusiness`,
  "parentOrganization": {
    "@id": `${COMPANY.url}/#organization`
  },
  "name": COMPANY.name,
  "url": COMPANY.url,
  "telephone": COMPANY.phoneHref.replace("tel:", ""),
  "email": COMPANY.emailHref.replace("mailto:", ""),
  "description": "Concierge aesthetic services offering Botox, dermal fillers, and collagen-building biostimulatory fillers in the comfort of your home. Serving Brooklyn and greater NYC with personalized, doctor-led care.",
  "logo": `${COMPANY.url}/${COMPANY.logoWebclip}`,
  "image": `${COMPANY.url}/images/headshots/cc_headshot_white_hq_crop_edit.webp`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": COMPANY.address.locality,
    "addressRegion": COMPANY.address.region,
    "postalCode": COMPANY.address.postalCode,
    "addressCountry": COMPANY.address.country
  },
  "areaServed": areaServed,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "$$",
  "hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Aesthetic Services",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Wrinkle Reduction Treatments",
        "serviceType": "Botox, Daxxify, and Xeomin Treatments",
        "areaServed": { "@type": "Place", "name": "Brooklyn, NY" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dermal Filler Treatments",
        "serviceType": "Lip Filler, Cheek Filler, and Chin Filler",
        "areaServed": { "@type": "Place", "name": "Brooklyn, NY" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Lip Flip",
        "serviceType": "Botox-based Lip Enhancement",
        "areaServed": { "@type": "Place", "name": "Brooklyn, NY" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Collagen-Stimulating Fillers",
        "serviceType": "Radiesse Biostimulatory Filler",
        "areaServed": { "@type": "Place", "name": "Brooklyn, NY" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Chemical Peels",
        "serviceType": "VI Peel®",
        "areaServed": { "@type": "Place", "name": "Brooklyn, NY" }
      }
    }
  ]
  },
  "sameAs": Object.values(COMPANY.social),
  "knowsAbout": [
    "Botox",
    "Daxxify",
    "Dermal Fillers",
    "Biostimulatory Fillers",
    "Lip Filler",
    "Lip Flip",
    "Radiesse",
    "Xeomin",
    "Hyperhidrosis",
    "Facial Rejuvenation",
    "Aesthetic Medicine",
    "In-home Aesthetic Services"
]
}
