/**
 * Content shape for an editorial treatment-detail page.
 *
 * Consumed by `TreatmentDetailLayout`. Each treatment has its own file
 * under `src/content/treatments/details/`.
 */

export type TreatmentDetailSpec = {
  /** Small-caps label (e.g. "Visit", "Onset"). */
  l: string;
  /** Display value (e.g. "45–60 min", "Immediate"). */
  v: string;
};

export type TreatmentDetailProduct = {
  name: string;
  /** Manufacturer (e.g. "Revance", "Allergan"). */
  by: string;
  /** Short clinical note. */
  note: string;
  /** Areas the product is typically used for. */
  use: string;
};

export type TreatmentDetailArea = {
  name: string;
  copy: string;
};

export type TreatmentDetailPricingRow = {
  /** Plan name / line item label. */
  area: string;
  /** Lower bound (USD). */
  from: number;
  /** Pricing unit displayed under the area label (e.g. "/ syringe", "/ visit"). */
  unit: string;
};

export type TreatmentDetailProcessPhase = {
  /** "01", "02", … */
  n: string;
  /** Phase title. */
  t: string;
  /** Phase copy. */
  c: string;
};

export type TreatmentDetailDowntime = {
  /** Symptoms expected immediately after the visit. */
  immediate: { t: string; c: string }[];
  /** Numbered aftercare steps. */
  aftercare: string[];
  /** "Work-ready" callout paragraph. */
  workReady: string;
};

export type TreatmentDetailRelated = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  copy: string;
  img: { src: string; alt: string };
};

export type TreatmentDetailBeforeAfter = {
  src: string;
  alt: string;
  /** Small-caps label rendered over the image when no photo is loaded. */
  label?: string;
};

export interface TreatmentDetailContent {
  /** Used in section anchors. */
  id: string;
  slug: string;

  /** Breadcrumb category (editorial label, e.g. "Filler"). */
  category: string;

  /** Hero number not currently rendered but useful for ordered detail-page series. */
  number?: string;

  title: string;
  /** Italic emphasis line that trails the title in the hero. */
  italic: string;
  /** Small-caps eyebrow over the title (e.g. "Filler · Volume · Contour"). */
  eyebrow: string;
  /** Optional subtitle used in related-card subtitles or sub-headers. */
  subtitle?: string;

  /** Hero copy paragraph. */
  lede: string;
  /** Hero image. */
  heroImage: { src: string; alt: string };

  /** Six spec items shown in the rail under the split hero. */
  spec: TreatmentDetailSpec[];

  /** Long-form treatment overview (sentence-rhythm paragraphs). */
  overview: string[];

  /** Italic display callout, brand voice. */
  pullquote?: { body: string; attr: string };

  /** Suitability split list. Omit on pages where suitability doesn't apply (e.g. consult). */
  bestFor?: {
    yes: string[];
    no: string[];
  };

  /** Product table rows. Omit/empty on pages without products. */
  products?: TreatmentDetailProduct[];
  /** Areas treated. Omit/empty on pages without anatomic areas. */
  areas?: TreatmentDetailArea[];

  /** Pricing ranges table. Omit/empty to hide the section. */
  pricing?: TreatmentDetailPricingRow[];

  /** Visit timeline phases (typically 3 or 4). */
  process: TreatmentDetailProcessPhase[];

  /** Downtime + aftercare. Omit on pages with no procedure-related downtime. */
  downtime?: TreatmentDetailDowntime;

  /** Optional before/after gallery. When empty, the section can be hidden. */
  beforeAfter?: TreatmentDetailBeforeAfter[];

  /** Treatment-specific FAQs. */
  faqs: { q: string; a: string }[];

  /** "Pairs well with" cards. */
  related: TreatmentDetailRelated[];
}
