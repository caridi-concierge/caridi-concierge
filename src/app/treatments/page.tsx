import Navbar from "@/components/Navbar";
import TreatmentsHero from "@/app/sections/treatments/TreatmentsHero";
import TreatmentsIndex from "@/app/sections/treatments/TreatmentsIndex";
import TreatmentsDetail from "@/app/sections/treatments/TreatmentsDetail";
import TreatmentsProcess from "@/app/sections/treatments/TreatmentsProcess";
import TreatmentsFAQ from "@/app/sections/treatments/TreatmentsFAQ";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { botoxServiceSchema, dermalFillerServiceSchema, biostimulatoryFillerServiceSchema } from "@/content/schemas";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Aesthetic Treatments | Botox, Fillers & Collagen Builders",
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
      <TreatmentsHero />
      {/* Wrapper bounds the sticky nav so it releases after the rows
          instead of lingering over Process/FAQ. */}
      <div className="relative">
        <TreatmentsIndex />
        <TreatmentsDetail />
      </div>
      <TreatmentsProcess />
      <TreatmentsFAQ />
      <CTASection variantKey="default" id="treatments-cta" />
      <Footer />
    </>
  )
}
