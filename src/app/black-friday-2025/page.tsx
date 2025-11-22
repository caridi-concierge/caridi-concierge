import CarouselBanner from "@/components/CarouselBanner";
import TreatmentCard from "@/components/TreatmentCard";
import type { TreatmentCardProps } from "@/components/TreatmentCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import Container from "@/components/Container";
import CountdownTimer from "@/components/CountdownTimer";
import { createPageMetadata } from "@/lib/metadata";
import { SMSContactWidget } from "@/components/SMSContactWidget";
import Image from "next/image";

export const metadata = createPageMetadata({
    title: "Black Friday Special | Caridi Concierge Aesthetics in NYC",
    description: "Limited time savings on our most popular treatments. Book now to secure your spot.",
    path: "/black-friday-2025",
    keywords: ["Caridi Concierge", "Black Friday", "Aesthetic Treatments", "Dermal Fillers", "Botox", "Brooklyn", "New York City"],
    noIndex: false
});


export default function BlackFridayPage() {
  const bannerSlides = [
    {
      src: "/images/black-friday-banner-alt.webp",
      alt: "Black Friday Sale",
      title: "Black Friday Exclusive",
      subtitle: "Limited time savings on our most popular treatments",
      content: [
        "Full face/neck Botox - $1000",
        "3 Syringes of dermal filler - $1500",
        "100u Botox & 2 syringes of dermal filler - $2000",
      ],
    },
  ];

  const deals: TreatmentCardProps[] = [
    {
      id: "bf-botox-full-face",
      slug: "black-friday-botox-full-face",
      title: "Full Face & Neck Botox Treatment - $1000",
      badge: {
        text: "Popular",
        variant: "gentle",
      },
      hook: "Smooth & Refresh",
      description: "Complete facial and neck rejuvenation with Toxin",
      highlights: [
        "Complete facial smoothing",
        "Forehead, crow's feet, and frown lines",
        "Neck band smoothing included",
        "Results last 3-4 months",
      ],
      products: "Botox, Xeomin, Jeuveau",
      imgSrc: "/images/treatments/botox-treatment.jpg",
      imgAlt: "Botox treatment for face and neck",
      startingPrice: "$1000",
      frequency: "Black Friday Special",
      bookHref: "/book",
      ctaHref: "/book",
      ctaText: "Book Botox Treatment",
      ctaVariant: "alt",
    },
    {
      id: "bf-filler-package",
      slug: "black-friday-filler-package",
      title: "Premium Dermal Filler Package - $1500",
      hook: "Restore & Add Volume",
      description: "Three syringes of premium dermal filler",
      highlights: [
        "3 full syringes of premium filler",
        "Address multiple areas of concern",
        "Lips, cheeks, or under-eye hollows",
        "Instant, natural-looking results",
      ],
      products: "Juvederm, Restylane, or RHA",
      imgSrc: "/images/treatments/dermal-filler.jpg",
      imgAlt: "Dermal filler treatment",
      startingPrice: "$1500",
      frequency: "Black Friday Special",
      bookHref: "/book",
      ctaHref: "/book",
      ctaText: "Book Filler Treatment",
      ctaVariant: "alt",
    },
    {
      id: "bf-combo-package",
      slug: "black-friday-combo-package",
      title: "Ultimate Package - $2000",
      badge: {
        text: "Best Value",
        variant: "popular",
      },
      hook: "Complete Rejuvenation",
      description: "Combined Botox and filler for maximum results",
      highlights: [
        "100 units of Botox for comprehensive coverage",
        "2 syringes of dermal filler",
        "Full face treatment for maximum impact",
        "Save over $400 on regular pricing",
      ],
      products: "Toxin + Premium Fillers",
      imgSrc: "/images/treatments/combination-treatment.jpg",
      imgAlt: "Combined Botox and filler treatment",
      startingPrice: "$2000",
      frequency: "Black Friday Special",
      bookHref: "/book",
      ctaHref: "/book",
      ctaText: "Book Combo Treatment",
      ctaVariant: "alt",
    },
  ];

  return (
    <>
    <Navbar />
      {/* Hero Banner */}
      <CarouselBanner slides={bannerSlides} autoPlay={false} />
      <section className="bg-merino text-outer-space py-8 md:pb-4">
        <Container>
        <div className="mx-auto w-[90%] max-w-7xl text-center pb-2">
          <h1 className="text-3xl md:text-4xl font-fraunces font-bold mb-6">
            Limited Time Botox &amp; Filler Specials in NYC
          </h1>
        </div>
        </Container>
      </section>

      {/* Countdown Timer */}
      <section className="bg-merino text-outer-space py-8 md:py-12">
        <Container>
        <div className="mx-auto w-[90%] max-w-7xl text-center pb-12">
          <p className="text-xl md:text-2xl font-fraunces font-semibold text-carnation mb-6">
            Black Friday Sale Ends In
          </p>
          <CountdownTimer endDate={new Date("2025-11-30T23:59:59")} />
        </div>
        </Container>
      </section>


      {/* Deals Section */}
      <section id="deals" className="bg-outer-space py-16">
        <Container>
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-fraunces text-4xl md:text-5xl text-merino mb-4">
              Black Friday Packages
            </h2>
            <p className="text-lg text-merino max-w-2xl mx-auto">
              Take advantage of our biggest savings of the year. Limited
              availability. Book now to secure your spot.
            </p>
          </div>

          {/* Deal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {deals.map((deal, index) => (
              <TreatmentCard key={index} {...deal} />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center pt-12 mt-12">
            <Image
            src="/images/Decor02.svg"
            alt=""
            width={93}
            height={108}
            className="h-auto w-12 sm:w-25 md:w-[93px]"
            />
        </div>
        </Container>
      </section>

      {/* Terms & Conditions */}
      <section className="bg-champagne py-12">
        <Container className="container mx-auto space-y-8">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div>
            <h2 className="font-fraunces text-4xl text-outer-space mb-6 text-center pb-6">
              Terms & Conditions
            </h2>
            <div className="text-md text-outer-space/80 space-y-3 leading-relaxed max-w-5xl mx-auto">
              <p className="text-left">
                • Offer valid for <b>appointments booked between November 22-30,
                2025.</b> <u>Treatments must be completed by December 31, 2025.</u>
              </p>
              <p className="text-left">
                • Packages cannot be combined with other offers, promotions, or
                discounts.
              </p>
              <p className="text-left">
                • Services must be used by the original purchaser and are
                non-transferable.
              </p>
              <p className="text-left">
                • Package pricing is for the specified treatments only.
                Additional units or syringes may be purchased at regular
                pricing.
              </p>
              <p className="text-left">
                • Standard cancellation policy applies. Cancellations made less
                than 24 hours before appointment may forfeit promotional
                pricing.
              </p>
              <p className="text-left">
                • Caridi Concierge reserves the right to modify or cancel this
                promotion at any time.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center pt-12 mt-12">
            <Image
              src="/images/Decor01.svg"
              alt=""
              width={93}
              height={108}
              className="h-auto w-12 sm:w-25 md:w-[93px]"
            />
          </div>
        </div>
        </Container>
      </section>

      <CTASection variantKey='blackFriday' id='black-friday-cta'/>
      <Footer />
      <SMSContactWidget />
    </>
  );
}