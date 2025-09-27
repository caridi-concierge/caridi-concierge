import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllStaffSection from "@/app/sections/staff/AllStaff";
import { JsonLd } from "@/components/JsonLD";
import { physicianSchema } from "@/content/schemas";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Doctors & Aesthetic Specialists | Caridi Concierge",
    description: "Meet the staff at Caridi Concierge. Our team of aesthetic practitioners dedicated to providing the highest level of care to our patients across NYC.",
    path: "/staff",
    keywords: ["Caridi Concierge", "Aesthetic Specialists", "Aesthetic Doctors", "Physician-led Care", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});

export default function StaffPage() {
    return (
        <>
        <JsonLd schema={physicianSchema}/>
        <Navbar />
        <AllStaffSection />
        <Footer />
        </>
    );
}