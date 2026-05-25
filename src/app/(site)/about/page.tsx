
import AboutHero from "@/app/(site)/about/_sections/AboutHero";
import AboutModesSection from "@/app/(site)/about/_sections/AboutModes";
import AboutMissionSection from "@/app/(site)/about/_sections/About";
import AboutLinksSection from "@/app/(site)/about/_sections/AboutLinks";
import FAQSection from "@/components/FAQ";
import CTASection from "@/components/CTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "About Caridi Concierge | NYC’s Premier Mobile Aesthetic Clinic",
    description: "Discover Caridi Concierge, NYC’s premier aesthetic clinic specializing in botox & fillers. Bringing expert treatments directly to you. Learn more!",
    path: "/about",
    image: "/images/headshots/cc_headshot_white_hq_crop_edit.webp",
    imageAlt: "Dr. Cristina Caridi, founder of Caridi Concierge",
    keywords: ["Caridi Concierge", "About Us", "Aesthetic Medicine", "Botox", "Dermal Fillers", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});


export default function AboutPage() {
    return (
        <>
        <AboutHero />
        <AboutModesSection />
        <AboutMissionSection />
        <AboutLinksSection />
        <FAQSection />
        <CTASection variantKey='contact' />
        </>
    );
}