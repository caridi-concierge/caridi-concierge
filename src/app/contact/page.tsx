import Navbar from "@/components/Navbar";
import ContactLayout from "@/app/sections/contact/ContactLayout";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Contact Caridi Concierge | Book an Aesthetic Treatment or Consultation",
    description: "Book your personalized aesthetic consultation with Caridi Concierge. Contact us today to schedule botox, fillers, or collagen builders in NYC.",
    path: "/contact",
    keywords: ["Caridi Concierge", "Contact Us", "Booking", "Aesthetic Treatments", "Consultation", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});

export default function ContactPage() {
    return (
        <>
        <Navbar />
        <ContactLayout />
        <Footer />
        </>
    );
}