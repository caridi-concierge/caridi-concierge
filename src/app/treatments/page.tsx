import Navbar from "@/components/Navbar";
import TreatmentsSection from "@/app/sections/treatments/Treatments";
import CTASection from "@/app/sections/treatments/CTA";
import Footer from "@/components/Footer";

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <TreatmentsSection />
      <CTASection />
      <Footer />
    </>
  )
}