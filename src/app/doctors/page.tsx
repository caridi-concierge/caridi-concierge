import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllStaffSection from "@/app/sections/doctors/AllStaff";
import { JsonLd } from "@/components/JsonLD";
import { physicianSchema } from "@/content/schemas";

export default function DoctorsPage() {
    return (
        <>
        <JsonLd schema={physicianSchema}/>
        <Navbar />
        <AllStaffSection />
        <Footer />
        </>
    );
}