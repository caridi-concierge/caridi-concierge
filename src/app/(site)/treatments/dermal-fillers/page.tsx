import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/(site)/treatments/_sections/TreatmentDetailLayout";
import { dermalFillers } from "@/content/treatments";
import { createPageMetadata } from "@/lib/metadata";
import { dermalFillersFAQSchema } from "@/content/schemas/treatments/dermalFillersFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Dermal Fillers | Lip, Cheek & Jawline Enhancement in NYC",
    description: "RHA and Juvéderm fillers to restore volume, soften lines, and define the lip, cheek, and jawline. In-home across NYC — book a consultation with Dr. Caridi.",
    path: "/treatments/dermal-fillers",
    image: dermalFillers.content.heroImage.src,
    imageAlt: dermalFillers.content.heroImage.alt,
    noIndex: false
});

export default function DermalFillersPage() {
    return (
      <>
        <JsonLd schema={dermalFillersFAQSchema} />
        <TreatmentDetailLayout content={dermalFillers.content} />
        <CTASection variantKey="fillers" id="dermal-fillers-cta" />
      </>
    );
  }
