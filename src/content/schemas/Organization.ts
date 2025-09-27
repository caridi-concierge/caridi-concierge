import { COMPANY } from "@/lib/constants/company";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY.name,
    "url": COMPANY.url,
    "logo": `${COMPANY.url}/${COMPANY.logoWebclip}`,
    "description": "Caridi Concierge provides luxury, in-home aesthetic services including Botox, dermal fillers, and collagen-stimulating treatments, serving Brooklyn and greater NYC.",
    "founder": {
      "@type": "Person",
      "name": "Dr. Cristina Caridi",
      "jobTitle": "Founder and Aesthetic Medicine Physician",
      "url": `${COMPANY.url}/staff/cristina-caridi`
    },
    "sameAs": Object.values(COMPANY.social),
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY.phoneHref.replace("tel:", ""),
      "contactType": "customer service",
      "areaServed": "US-NY",
      "availableLanguage": ["English"]
    }
  }
  