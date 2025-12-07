import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function AboutDoctorSection() {
  return (
    <section className="py-16 bg-champagne">
      <Container className="container mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/images/Decor01.svg"
            alt=""
            width={93}
            height={108}
            className="h-auto w-12 sm:w-25 md:w-[93px]"
          />
          <h1 className="font-fraunces text-3xl md:text-4xl text-outer-space mb-8">
            Meet Dr. Caridi
          </h1>
        </div>

        {/* Doctor card */}
        <div className="flex justify-center">
          <Link
            href="/staff/cristina-caridi"
            className="flex flex-col items-center bg-champagne"
          >
            <div className="mb-6">
              <Image
                src="/images/cc_headshot_white_hq_crop_edit.webp"
                alt="Portrait of Dr. Cristina Caridi"
                width={333}
                height={400}
                className="rounded-lg shadow-lg object-cover sm:w-[150px] md:w-[250px] h-auto"
              />
            </div>
            <div className="text-center space-y-2">
              <div className="font-bold text-lg text-outer-space">
                Cristina Caridi, MD
              </div>
              <div className="text-sm text-outer-space">
                Personalized aesthetics, grounded in science, crafted with care.
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
