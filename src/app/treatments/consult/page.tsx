import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import TreatmentDetailLayout from "@/app/treatments/_sections/TreatmentDetailLayout";
import { consultDetail } from "@/content/treatments/details/consult";
import { createPageMetadata } from "@/lib/metadata";
import { consultFAQSchema } from "@/content/schemas/treatments/consultFAQSchema";
import { JsonLd } from "@/components/JsonLD";

export const metadata = createPageMetadata({
    title: "Aesthetic Consultation in NYC | Caridi Concierge",
    description: "Book a personalized aesthetic consultation in NYC with Dr. Caridi. Thoughtful, physician-led care focused on natural, balanced results.",
    path: "/treatments/consult",
    image: consultDetail.heroImage.src,
    imageAlt: consultDetail.heroImage.alt,
    keywords: ["Caridi Concierge", "Aesthetic Consultation", "Personalized Treatments", "In-Home Aesthetics", "Brooklyn", "New York City", "Custom Treatment Plans"],
    noIndex: false
});

export default function ConsultPage() {
    return (
      <>
        <JsonLd schema={consultFAQSchema} />
        <Navbar />
        <TreatmentDetailLayout content={consultDetail} />
        <CTASection variantKey="consult" id="consult-cta" />
        <Footer />
      </>
    );
  }
