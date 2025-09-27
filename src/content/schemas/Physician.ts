import { COMPANY } from "@/lib/constants/company"

export const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Cristina Caridi, MD",
    "jobTitle": "Founder and Aesthetic Medicine Physician",
    "gender": "Female",
    "image": `${COMPANY.url}/images/cc_headshot_white_hq_crop_edit.webp`,
    "description": "Dr. Cristina Caridi is a board-certified pediatrician and founder of Caridi Concierge, offering in-home aesthetic services such as Botox, dermal fillers, and biostimulatory fillers to clients across Brooklyn and NYC.",
    "url": `${COMPANY.url}/about`,
    "medicalLicense": "NY License 311227",
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "NPI",
      "value": "1508353780"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": COMPANY.address.locality,
      "addressRegion": COMPANY.address.region,
      "postalCode": COMPANY.address.postalCode,
      "addressCountry": COMPANY.address.country
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "St. George's University School of Medicine"
    },
    "medicalSpecialty": ["Aesthetic Medicine", "Pediatrics"],
    "worksFor": {
      "@type": "Organization",
      "name": COMPANY.name,
      "url": COMPANY.url
    },
    "sameAs": Object.values(COMPANY.social),
  }
  