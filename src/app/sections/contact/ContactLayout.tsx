import ContactHero from "@/app/sections/contact/ContactHero";
import ContactFormCard from "@/app/sections/contact/ContactForm";
import ContactHoursPlaces from "@/app/sections/contact/ContactHoursPlaces";

export default function ContactLayout() {
  return (
    <main className="bg-ivory text-ink">
      <ContactHero />
      <ContactFormCard />
      <ContactHoursPlaces />
    </main>
  );
}
