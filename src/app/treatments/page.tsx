import Navbar from "@/components/Navbar";
import TreatmentsHero from "@/app/sections/treatments/TreatmentsHero";
import TreatmentsIndex from "@/app/sections/treatments/TreatmentsIndex";
import TreatmentsDetail from "@/app/sections/treatments/TreatmentsDetail";
import TreatmentsProcess from "@/app/sections/treatments/TreatmentsProcess";
import TreatmentsFAQ from "@/app/sections/treatments/TreatmentsFAQ";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { botoxServiceSchema, dermalFillerServiceSchema, biostimulatoryFillerServiceSchema, chemicalPeelsServiceSchema, consultServiceSchema } from "@/content/schemas";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Botox, Fillers & Chemical Peels in NYC | Caridi Concierge",
    description: "In-home Botox, fillers, peels, and collagen-building injectables across NYC — personally administered by Dr. Caridi.",
    path: "/treatments",
    image: "/images/treatments/botox_crowsfeet_tx.webp",
    imageAlt: "In-home aesthetic treatments by Caridi Concierge — Botox, fillers, and chemical peels",
    keywords: ["Caridi Concierge", "Aesthetic Treatments", "Botox", "Dermal Fillers", "Biostimulatory Fillers", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});


export default function TreatmentsPage() {
  return (
    <>
      <JsonLd schema={botoxServiceSchema}/>
      <JsonLd schema={dermalFillerServiceSchema}/>
      <JsonLd schema={biostimulatoryFillerServiceSchema}/>
      <JsonLd schema={chemicalPeelsServiceSchema}/>
      <JsonLd schema={consultServiceSchema}/>
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
