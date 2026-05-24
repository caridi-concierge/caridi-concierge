import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllStaffSection from "@/app/staff/_sections/AllStaff";
import CTASection from "@/components/CTA";
import { createPageMetadata } from "@/lib/metadata";

// Solo practice for now: the /staff directory has a single entry (Dr. Caridi),
// which duplicates her bio page and the /about highlight. noIndex until a second
// practitioner is hired, then flip to false and restore team-framed copy.
export const metadata = createPageMetadata({
    title: "Dr. Caridi, Aesthetic Physician | Caridi Concierge",
    description: "Caridi Concierge is led by Dr. Caridi, who personally performs every in-home treatment across NYC. Meet the physician behind your care.",
    path: "/staff",
    keywords: ["Caridi Concierge", "Aesthetic Specialists", "Aesthetic Doctors", "Physician-led Care", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: true
});

export default function StaffPage() {
    return (
        <>
        <Navbar />
        <AllStaffSection />
        <CTASection variantKey="staff"/>
        <Footer />
        </>
    );
}