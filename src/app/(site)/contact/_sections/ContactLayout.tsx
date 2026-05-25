import ContactHero from "@/app/(site)/contact/_sections/ContactHero";
import ContactFormCard from "@/app/(site)/contact/_sections/ContactForm";
import ContactHoursPlaces from "@/app/(site)/contact/_sections/ContactHoursPlaces";

export default function ContactLayout() {
  return (
    <main className="bg-ivory text-ink">
      <ContactHero />
      <ContactFormCard />
      <ContactHoursPlaces />
    </main>
  );
}
