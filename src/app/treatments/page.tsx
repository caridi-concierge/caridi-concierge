import Navbar from "@/components/Navbar";
import TreatmentsSection from "@/app/sections/treatments/Treatments";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { botoxServiceSchema, dermalFillerServiceSchema, biostimulatoryFillerServiceSchema } from "@/content/schemas";

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