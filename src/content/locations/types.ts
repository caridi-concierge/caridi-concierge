// Types for location data: the facts catalog record (LocationFacts) and the
// editorial detail content (LocationContent) rendered on /locations/[slug].
import type { LocationServiceCardProps } from "@/components/LocationServiceCard";

export interface LocationAddress {
  complete: string;
  streetAddress1: string;
  streetAddress2: string;
  neighborhood: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface LocationHours {
  label: string;
  value: string;
}

/** A location's two halves, bundled by its folder. */
export interface LocationEntry {
  facts: LocationFacts;
  content: LocationContent;
}

/** Summary record for a location: identity, address, hours, CTAs, hero. */
export interface LocationFacts {
  id: string;
  name: string;
  type: string;
  visibility: "public" | "invite_only";
  address: LocationAddress;
  description: string;
  statusLine: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  ctaTertiaryLabel?: string;
  ctaTertiaryHref?: string;
  badge?: string;
  slug: string;
  heroImage: { src: string; alt: string };
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  hours: LocationHours[];
}

export interface SpecRailItem {
  label: string;
  value: string;
}

export interface WhatWeBringItem {
  label: string;
  description: string;
}

export interface CoverageTier {
  tier: string;
  areas: string;
}

export interface SpaceDetail {
  label: string;
  value: string;
}

export interface ProcessStep {
  meta: string;
  title: string;
  description: string;
}

export interface DoctorsNote {
  body: string;
  attr: string;
}

export interface LocationHero {
  eyebrow?: string;
  title: string;
  italicTail?: string;
}

export interface LocationContent {
  slug: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero?: LocationHero;
  spec?: SpecRailItem[];
  studioExperience: {
    title: string;
    description: string;
  };
  overview?: string[];
  whatWeBring?: WhatWeBringItem[];
  coverage?: CoverageTier[];
  space?: SpaceDetail[];
  process?: ProcessStep[];
  doctorsNote?: DoctorsNote;
  offerings: {
    title: string;
    subtitle: string;
    /**
     * Editorial path: an array of treatment slugs from
     * `src/content/treatments/details/`. When present, the offerings
     * grid renders image-led cards pulled from the treatment master.
     */
    treatments?: string[];
    /** Legacy bespoke service cards. Used when `treatments` is not set. */
    services: LocationServiceCardProps[];
    features?: { title: string; description: string }[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}
