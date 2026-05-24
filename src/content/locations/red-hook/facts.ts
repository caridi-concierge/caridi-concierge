import type { LocationFacts } from "../types";
import { COMPANY } from "@/lib/constants/company";

export const facts: LocationFacts = {
  id: "studio",
  name: "Red Hook",
  type: "Private Studio",
  visibility: "invite_only",

  address: {
    complete: "Red Hook, Brooklyn, NY 11231",
    streetAddress1: "",
    streetAddress2: "",
    neighborhood: "Red Hook",
    locality: "Brooklyn",
    region: "NY",
    postalCode: "11231",
    country: "US",
  },

  description:
    "A quieter setting for unhurried visits, scheduled in advance with established clients of the practice.",

  statusLine: "By invitation",

  ctaPrimaryLabel: "",
  ctaPrimaryHref: "",

  ctaSecondaryLabel: "",
  ctaSecondaryHref: "",

  slug: "red-hook",

  heroImage: {
    src: "/images/red_hook_1000px.webp",
    alt: "Red Hook Studio",
  },

  phoneDisplay: COMPANY.phone,
  phoneHref: COMPANY.phoneHref,

  email: COMPANY.email,
  emailHref: COMPANY.emailHref,

  hours: [{ label: "Availability", value: "By appointment only" }],
};
