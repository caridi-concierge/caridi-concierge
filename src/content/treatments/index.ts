/**
 * Public surface for treatment data. Runtime values only — import treatment
 * types from "@/content/treatments/types".
 *
 * Each treatment lives in its own folder (`<slug>/facts.ts` + `<slug>/content.ts`).
 * - `treatments` — the facts catalog (cards, grids, index nav).
 * - the per-treatment entries (`consult`, `dermalFillers`, …) for detail pages.
 * - `getTreatmentDetail(slug)` / `getAllTreatmentDetails()` — detail content.
 *
 * See `.ai/rules/architecture.md` ("content entity convention"). The catalog
 * and detail slug sets are kept in sync by `treatments.test.ts`.
 */
import type { TreatmentDetailContent, TreatmentMetadata } from "./types";
import { consult } from "./consult";
import { wrinkleReduction } from "./wrinkle-reduction";
import { dermalFillers } from "./dermal-fillers";
import { biostimulatoryFillers } from "./biostimulatory-fillers";
import { chemicalPeels } from "./chemical-peels";

export { consult, wrinkleReduction, dermalFillers, biostimulatoryFillers, chemicalPeels };

const ENTRIES = [
  consult,
  wrinkleReduction,
  dermalFillers,
  biostimulatoryFillers,
  chemicalPeels,
];

/** Facts catalog, in editorial order. */
export const treatments: TreatmentMetadata[] = ENTRIES.map((e) => e.facts);

const DETAILS: Record<string, TreatmentDetailContent> = Object.fromEntries(
  ENTRIES.map((e) => [e.content.slug, e.content])
);

export function getTreatmentDetail(slug: string): TreatmentDetailContent | undefined {
  return DETAILS[slug];
}

export function getAllTreatmentDetails(): TreatmentDetailContent[] {
  return Object.values(DETAILS);
}
