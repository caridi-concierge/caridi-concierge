import ContactInfoCard from "@/app/sections/contact/ContactInfo";
import ContactFormCard from "@/app/sections/contact/ContactForm";
import Container from "@/components/Container";

export default function ContactLayout() {
  return (
    <section className="py-16 bg-champagne">
      <Container className="container mx-auto px-4">
        <h3 className="font-fraunces text-3xl md:text-4xl text-midnight mb-12 text-center">
          Your Direct Line to Caridi Concierge
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactFormCard />
          <ContactInfoCard />
        </div>
      </Container>
    </section>
  );
}
