import ContactInfoCard from "@/app/sections/contact/ContactInfo";
import ContactFormCard from "@/app/sections/contact/ContactForm";

export default function ContactLayout() {
  return (
    <section className="py-16 bg-champagne">
      <div className="container mx-auto px-4">
        <h3 className="font-fraunces text-3xl md:text-4xl text-midnight mb-12 text-center">
          Get In Touch!
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfoCard />
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}
