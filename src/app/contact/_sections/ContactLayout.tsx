import ContactHero from "@/app/contact/_sections/ContactHero";
import ContactFormCard from "@/app/contact/_sections/ContactForm";
import ContactHoursPlaces from "@/app/contact/_sections/ContactHoursPlaces";

export default function ContactLayout() {
  return (
    <main className="bg-ivory text-ink">
      <ContactHero />
      <ContactFormCard />
      <ContactHoursPlaces />
    </main>
  );
}
