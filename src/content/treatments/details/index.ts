import type { TreatmentDetailContent } from "@/model/treatments/TreatmentDetail";
import { dermalFillersDetail } from "./dermal-fillers";
import { wrinkleReductionDetail } from "./wrinkle-reduction";
import { biostimulatoryFillersDetail } from "./biostimulatory-fillers";
import { chemicalPeelsDetail } from "./chemical-peels";
import { consultDetail } from "./consult";

const TREATMENT_DETAILS: Record<string, TreatmentDetailContent> = {
  [dermalFillersDetail.slug]: dermalFillersDetail,
  [wrinkleReductionDetail.slug]: wrinkleReductionDetail,
  [biostimulatoryFillersDetail.slug]: biostimulatoryFillersDetail,
  [chemicalPeelsDetail.slug]: chemicalPeelsDetail,
  [consultDetail.slug]: consultDetail,
};

export function getTreatmentDetail(
  slug: string
): TreatmentDetailContent | undefined {
  return TREATMENT_DETAILS[slug];
}

export function getAllTreatmentDetails(): TreatmentDetailContent[] {
  return Object.values(TREATMENT_DETAILS);
}
