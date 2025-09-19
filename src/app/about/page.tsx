
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMissionSection from "@/app/sections/about/About";
import AboutDoctorSection from "@/app/sections/about/AboutDoctor";
import FAQSection from "@/app/sections/home/FAQ";
import CTASection from "@/components/CTA";

export default function AboutPage() {
    return (
        <>
        <Navbar />
        <AboutMissionSection />
        <AboutDoctorSection />
        <FAQSection />
        <CTASection variantKey='consult' />
        <Footer />
        </>
    );
}