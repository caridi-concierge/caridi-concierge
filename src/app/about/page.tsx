
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMissionSection from "@/app/sections/about/About";
import AboutDoctorSection from "@/app/sections/about/AboutDoctor";
import FAQSection from "@/app/sections/home/FAQ";
import CTASection from "@/components/CTA";
import { JsonLd } from "@/components/JsonLD";
import { physicianSchema } from "@/content/schemas";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "About Caridi Concierge | NYC’s Premier Mobile Aesthetic Clinic",
    description: "Discover Caridi Concierge, NYC’s premier aesthetic clinic specializing in botox & fillers. Bringing expert treatments directly to you. Learn more!",
    path: "/about",
    keywords: ["Caridi Concierge", "About Us", "Aesthetic Medicine", "Botox", "Dermal Fillers", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});


export default function AboutPage() {
    return (
        <>
        <JsonLd schema={physicianSchema}/>
        <Navbar />
        <AboutMissionSection />
        <AboutDoctorSection />
        <FAQSection />
        <CTASection variantKey='contact' />
        <Footer />
        </>
    );
}