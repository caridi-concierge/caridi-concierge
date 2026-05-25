// Service-area Places shared across the business and per-service schemas.
// All 5 NYC boroughs (active focus Manhattan + Brooklyn); Long Island case-by-case.
// Kept as a single source so the business and Service schemas can't drift apart.
export const areaServed = [
  { "@type": "Place", "name": "Manhattan, NY" },
  { "@type": "Place", "name": "Brooklyn, NY" },
  { "@type": "Place", "name": "Queens, NY" },
  { "@type": "Place", "name": "The Bronx, NY" },
  { "@type": "Place", "name": "Staten Island, NY" },
  { "@type": "Place", "name": "Long Island, NY" },
];
