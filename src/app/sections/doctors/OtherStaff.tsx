// src/components/OtherStaffSection.tsx
import { doctors } from "@/lib/constants/doctors";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function OtherStaffSection({ currentSlug }: { currentSlug: string }) {
  const otherStaff = doctors.filter((d) => d.slug !== currentSlug);

  return (
    <section className="py-16 bg-champagne">
      <Container className="container mx-auto px-4 text-start">
        <h2 className="font-fraunces text-4xl md:text-4xl text-midnight mb-8">
          Other Staff
        </h2>

        {otherStaff.length === 0 ? (
          <p className="text-gray-600">No other staff at this time.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {otherStaff.map((staff) => (
              <Link
                key={staff.slug}
                href={`/doctors/${staff.slug}`}
                className="block bg-merino rounded-lg shadow-md hover:shadow-lg transition p-6"
              >
                <Image
                  src={staff.img}
                  alt={staff.imgAlt}
                  width={300}
                  height={300}
                  className="mx-auto rounded-md mb-4 object-cover"
                />
                <h3 className="font-fraunces text-xl text-outer-space mb-2">
                  {staff.name}
                </h3>
                <p className="text-sm text-gray-600">{staff.tagline}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
