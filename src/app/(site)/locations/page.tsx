// app/locations/page.tsx
import LocationsLayoutSection from "@/app/(site)/locations/_sections/LocationsLayout";
import { SMSContactWidget } from "@/components/SMSContactWidget";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Locations | Caridi Concierge in Gowanus, Red Hook, and in-home",
    description:
      "Visit the Caridi Concierge clinic in Gowanus, studio in Red Hook, or book in-home Botox and filler treatments across Brooklyn, Manhattan, and Greater NYC.",
    path: "/locations",
    keywords: ["Caridi Concierge", "Contact Us", "Booking", "Aesthetic Treatments", "Consultation", "In-Home Treatments", "Brooklyn", "New York City"],
    noIndex: false
});

export default function LocationsPage() {
  return (
    <>
    <LocationsLayoutSection />
    <SMSContactWidget />
    </>
  );
}