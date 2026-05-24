import type { LocationFacts } from "../types";
import { COMPANY } from "@/lib/constants/company";

export const facts: LocationFacts = {
  id: "concierge",
  name: "Concierge",
  type: "In-Home",
  visibility: "public",

  address: {
    complete: "Brooklyn, Manhattan and Greater NYC",
    streetAddress1: "",
    streetAddress2: "",
    neighborhood: "",
    locality: "",
    region: "NY",
    postalCode: "",
    country: "US",
  },

  description:
    "Physician-led Botox and filler treatments delivered to your home. A convenient, discreet option for receiving care without leaving your space.",

  statusLine: "Tuesday through Sunday",

  ctaPrimaryLabel: "Book In-Home Visit",
  ctaPrimaryHref: "/book?source=location_in-home",

  ctaSecondaryLabel: "Text Us",
  ctaSecondaryHref: COMPANY.smsHref,

  slug: "in-home",

  heroImage: {
    src: "/images/concierge_nyc_1000px.webp",
    alt: "Concierge Botox",
  },

  phoneDisplay: COMPANY.phone,
  phoneHref: COMPANY.phoneHref,

  email: COMPANY.email,
  emailHref: COMPANY.emailHref,

  hours: [
    { label: "Monday", value: "Closed" },
    { label: "Tuesday", value: "9:00 AM - 7:00 PM" },
    { label: "Wednesday", value: "9:00 AM - 7:00 PM" },
    { label: "Thursday", value: "9:00 AM - 7:00 PM" },
    { label: "Friday", value: "9:00 AM - 7:00 PM" },
    { label: "Saturday", value: "9:00 AM - 5:00 PM" },
    { label: "Sunday", value: "10:00 AM - 3:00 PM" },
  ],
};
