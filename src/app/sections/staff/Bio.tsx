// src/components/DoctorPageLayout.tsx
import Image from "next/image";
import type { Staff } from "@/model/staff/Staff";
import Container from "@/components/Container";

export default function StaffBioSection({ staff }: { staff: Staff }) {
    return (
        <section className="py-16 bg-merino">
          <Container className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
              {/* Left: Image */}
              <div className="flex-shrink-0 md:w-1/3 flex justify-center md:justify-start">
                <Image
                  src={staff.img}
                  alt={staff.imgAlt}
                  width={350}
                  height={350}
                  className="rounded-lg object-cover w-full max-w-sm"
                />
              </div>
    
              {/* Right: Content */}
              <div className="flex-1 mt-8 md:mt-0 text-outer-space">
                <h1 className="font-fraunces text-4xl md:text-5xl">{staff.name}</h1>
                {staff.tagline && (
                  <p className="text-lg font-semibold text-outer-space mt-2">
                    {staff.tagline}
                  </p>
                )}
                {staff.email && (
                  <p className="text-sm text-gray-600 mt-1">
                    <a
                      href={`mailto:${staff.email}`}
                      className="text-steel-blue hover:text-carnation text-lg"
                    >
                      {staff.email}
                    </a>
                  </p>
                )}
                <div className="mt-6 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  {staff.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      );
    }