import { COMPANY } from '@/lib/constants/company';

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": COMPANY.url,
    "name": COMPANY.name
  }