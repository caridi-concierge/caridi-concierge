import type { LocationFacts } from "../types";
import { COMPANY } from "@/lib/constants/company";

export const facts: LocationFacts = {
  id: "gowanus",
  name: "Gowanus",
  type: "Clinic",
  visibility: "public",

  address: {
    complete: "472 4th Ave, Brooklyn, NY 11215",
    streetAddress1: "472 4th Ave",
    streetAddress2: "",
    neighborhood: "Gowanus",
    locality: "Brooklyn",
    region: "NY",
    postalCode: "11215",
    country: "US",
  },

  description:
    "A quiet, clinical space in the heart of Gowanus. Available on select days. A private setting for injectable treatments.",

  statusLine: "Open Wednesdays",

  ctaSecondaryLabel: "Get Directions",
  ctaSecondaryHref: "https://maps.google.com/?q=south+slope+oral+surgery+brooklyn+4th+ave",

  ctaPrimaryLabel: "Book in Gowanus",
  ctaPrimaryHref: "/book?source=location_gowanus",

  ctaTertiaryLabel: "Book on Zocdoc",
  ctaTertiaryHref:
    "https://www.zocdoc.com/practice/caridi-concierge-medicine-146934?lock=true&isNewPatient=false&referrerType=widget",

  badge: "New",

  slug: "gowanus",

  heroImage: {
    src: "/images/gowanus_neighborhood_1000px.webp",
    alt: "Gowanus Brooklyn Botox and Fillers by Caridi Concierge",
  },

  phoneDisplay: COMPANY.phone,
  phoneHref: COMPANY.phoneHref,

  email: COMPANY.email,
  emailHref: COMPANY.emailHref,

  hours: [{ label: "Wednesday", value: "9:00 AM - 7:00 PM" }],
};
