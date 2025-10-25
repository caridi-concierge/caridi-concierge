import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import { treatments } from "@/content/treatments/treatments";

export default function TreatmentsSection() {
  return (
    <section className="py-16 bg-merino">
      <h1 className="font-fraunces text-3xl md:text-4xl text-center text-outer-space mb-12">
        Signature Aesthetic Treatments
      </h1>
      <div className="w-full bg-champagne py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <div
                key={treatment.slug}
                className="flex flex-col items-center text-center bg-merino rounded-2xl shadow-[4px_6px_12px_rgba(0,0,0,0.25)] overflow-hidden"
              >
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="block w-full bg-charcoal"
                >
                  <Image
                    src={treatment.imgSrc}
                    alt={treatment.imgAlt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </Link>
                {/* Card content */}
                <div className="flex flex-col flex-1 p-6 text-center w-full">
                  <h2 className="font-fraunces text-xl text-charcoal mb-3">
                    {treatment.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-6">
                    {treatment.description}
                  </p>
                  
                  {/* Spacer to push pricing to bottom */}
                  <div className="flex-grow" />
                  
                  {/* Pricing Section */}
                  <div className="mb-6 py-3 px-4 bg-peach-puff/30 rounded-lg">
                    <p className="font-satoshi text-xs text-gray-600 mb-1">
                      Starting at
                    </p>
                    <p className="font-fraunces text-2xl text-outer-space font-semibold">
                      {treatment.startingPrice}
                    </p>
                    {treatment.note && (
                      <p className="text-xs text-gray-600 mt-1 italic">
                        {treatment.note}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <PrimaryButton
                      href={`/treatments/${treatment.slug}`}
                      variant="primary"
                      className="text-sm px-6 py-1.5"
                    >
                      Learn More
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}