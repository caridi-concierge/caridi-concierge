import Navbar from "@/components/Navbar";
import TreatmentsSection from "@/app/sections/treatments/Treatments";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { botoxServiceSchema, dermalFillerServiceSchema, biostimulatoryFillerServiceSchema } from "@/content/schemas";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Aesthetic Treatments | Wrinkle Reduction, Fillers & IV Therapy",
    description: "Explore Caridi Concierge’s in-home aesthetic treatments, including botox and fillers. Serving NYC with personalized, expert care.",
    path: "/treatments",
    keywords: ["Caridi Concierge", "Aesthetic Treatments", "Botox", "Dermal Fillers", "Biostimulatory Fillers", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});


export default function TreatmentsPage() {
  return (
    <>
      <JsonLd schema={botoxServiceSchema}/>
      <JsonLd schema={dermalFillerServiceSchema}/>
      <JsonLd schema={biostimulatoryFillerServiceSchema}/>
      <Navbar />
      <TreatmentsSection />
      <CTASection />
      <Footer />
    </>
  )
}