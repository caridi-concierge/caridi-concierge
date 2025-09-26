// src/components/DoctorPageLayout.tsx
import Image from "next/image";
import type { Doctor } from "@/model/doctors/Doctor";
import Container from "@/components/Container";

export default function DoctorBioSection({ doctor }: { doctor: Doctor }) {
    return (
        <section className="py-16 bg-merino">
          <Container className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
              {/* Left: Image */}
              <div className="flex-shrink-0 md:w-1/3 flex justify-center md:justify-start">
                <Image
                  src={doctor.img}
                  alt={doctor.imgAlt}
                  width={350}
                  height={350}
                  className="rounded-lg object-cover w-full max-w-sm"
                />
              </div>
    
              {/* Right: Content */}
              <div className="flex-1 mt-8 md:mt-0 text-outer-space">
                <h1 className="font-fraunces text-4xl md:text-5xl">{doctor.name}</h1>
                {doctor.tagline && (
                  <p className="text-lg font-semibold text-outer-space mt-2">
                    {doctor.tagline}
                  </p>
                )}
                {doctor.email && (
                  <p className="text-sm text-gray-600 mt-1">
                    <a
                      href={`mailto:${doctor.email}`}
                      className="text-steel-blue hover:text-carnation text-lg"
                    >
                      {doctor.email}
                    </a>
                  </p>
                )}
                <div className="mt-6 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  {doctor.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      );
    }