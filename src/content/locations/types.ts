// Content types for location detail pages
import type { LocationServiceCardProps } from "@/components/LocationServiceCard";

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
