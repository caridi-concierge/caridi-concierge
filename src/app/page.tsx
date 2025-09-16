import Navbar from "@/components/Navbar";
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Navbar />
    </>
    // <main className="flex flex-col">
    //   {/* Hero Section */}
    //   <section className="relative w-full h-[80vh]">
    //     <Image
    //       src="/images/home-banner-edit.jpg"
    //       alt="Dr. Cristina Caridi providing in-home Botox and filler treatments across NYC"
    //       fill
    //       className="object-cover"
    //       priority
    //     />
    //     <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-center text-white p-6">
    //       <h1 className="font-fraunces text-4xl md:text-6xl max-w-3xl">
    //         Premium In-Home Botox & Filler Treatments Across NYC
    //       </h1>
    //       <p className="mt-4 text-lg md:text-xl max-w-2xl font-satoshi">
    //         Private, physician-led care that blends science with artistry. I
    //         tailor every treatment to your features, creating natural results in
    //         every setting.
    //       </p>
    //       <Link
    //         href="/book"
    //         className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-black font-medium shadow-md hover:bg-gray-100"
    //       >
    //         Book a visit
    //       </Link>
    //     </div>
    //   </section>

    //   {/* Services Section */}
    //   <section className="py-16 bg-gray-50">
    //     <div className="container mx-auto px-4">
    //       <h2 className="text-3xl font-fraunces mb-8">
    //         Signature Aesthetic Services
    //       </h2>
    //       <div className="grid gap-8 md:grid-cols-3">
    //         <div>
    //           <h3 className="text-xl font-semibold">Botox Treatments</h3>
    //           <p className="mt-2 text-gray-700">
    //             Advanced wrinkle-reduction treatments to smooth lines and refine
    //             features. Common products: Botox, Xeomin, Daxxify.
    //           </p>
    //           <Link href="/treatments/wrinkle-reduction" className="text-blue-600 underline mt-2 inline-block">
    //             Learn More
    //           </Link>
    //         </div>
    //         <div>
    //           <h3 className="text-xl font-semibold">Dermal Fillers</h3>
    //           <p className="mt-2 text-gray-700">
    //             Restore volume and enhance contours with Juvederm and the RHA
    //             Collection. Natural-looking results tailored to your features.
    //           </p>
    //           <Link href="/treatments/dermal-fillers" className="text-blue-600 underline mt-2 inline-block">
    //             Learn More
    //           </Link>
    //         </div>
    //         <div>
    //           <h3 className="text-xl font-semibold">Biostimulatory Fillers</h3>
    //           <p className="mt-2 text-gray-700">
    //             Stimulate natural collagen production with Radiesse and
    //             Sculptra. Results build gradually for long-lasting rejuvenation.
    //           </p>
    //           <Link href="/treatments/biostimulatory-fillers" className="text-blue-600 underline mt-2 inline-block">
    //             Learn More
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Call-to-Action */}
    //   <section className="bg-blue-900 text-white py-16">
    //     <div className="container mx-auto text-center px-4">
    //       <h2 className="text-3xl font-fraunces">Modern beauty, made effortless.</h2>
    //       <p className="mt-4 text-lg">
    //         Personalized Botox and filler treatments that restore balance,
    //         volume, and confidence.
    //       </p>
    //       <Link
    //         href="/book"
    //         className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-black font-medium shadow-md hover:bg-gray-100"
    //       >
    //         Book a visit
    //       </Link>
    //     </div>
    //   </section>
    // </main>
  )
}