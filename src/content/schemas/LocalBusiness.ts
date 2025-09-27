import { COMPANY } from "@/lib/constants/company";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": COMPANY.name,
  "url": COMPANY.url,
  "telephone": COMPANY.phoneHref.replace("tel:", ""),
  "email": COMPANY.emailHref.replace("mailto:", ""),
  "description": "Concierge aesthetic services offering Botox, dermal fillers, and collagen-building biostimulatory fillers in the comfort of your home. Serving Brooklyn and greater NYC with personalized, doctor-led care.",
  "logo": `${COMPANY.url}/${COMPANY.logoWebclip}`,
  "image": `${COMPANY.url}/images/cc_headshot_white_hq_crop_edit.webp`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": COMPANY.address.locality,
    "addressRegion": COMPANY.address.region,
    "postalCode": COMPANY.address.postalCode,
    "addressCountry": COMPANY.address.country
  },
  "areaServed": [
    {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.6752831,
        "longitude": -74.0130946
      },
      "geoRadius": 12875
    },
    { "@type": "Place", "name": "Brooklyn, NY" },
    { "@type": "Place", "name": "Manhattan, NY" },
    { "@type": "Place", "name": "Queens, NY" },
    { "@type": "Place", "name": "Staten Island, NY" },
    { "@type": "Place", "name": "Long Island, NY" }
  ],
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
  "sameAs": Object.values(COMPANY.social)
}
