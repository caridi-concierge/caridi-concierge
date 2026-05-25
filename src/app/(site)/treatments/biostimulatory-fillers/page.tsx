import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/(site)/treatments/_sections/TreatmentDetailLayout";
import { biostimulatoryFillers } from "@/content/treatments";
import { createPageMetadata } from "@/lib/metadata";
import { biostimulatoryFillersFAQSchema } from "@/content/schemas/treatments/biostimulatoryFillersFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Biostimulatory Fillers (Radiesse) in NYC | Build Collagen",
    description: "Radiesse biostimulatory fillers rebuild collagen for natural volume and smoother skin. In-home across NYC — book a consultation with Dr. Caridi.",
    path: "/treatments/biostimulatory-fillers",
    image: biostimulatoryFillers.content.heroImage.src,
    imageAlt: biostimulatoryFillers.content.heroImage.alt,
    keywords: ["Caridi Concierge", "Aesthetic Treatments", "Biostimulatory Fillers", "Radiesse", "Collagen-building", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});

export default function BiostimulatoryFillersPage() {
    return (
      <>
        <JsonLd schema={biostimulatoryFillersFAQSchema} />
        <TreatmentDetailLayout content={biostimulatoryFillers.content} />
        <CTASection variantKey="biostim" id="biostimulatory-fillers-cta" />
      </>
    );
  }
