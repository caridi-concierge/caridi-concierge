import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/lib/constants/doctors";
import Container from "@/components/Container";

export default function AllStaffSection() {
  return (
    <section className="py-16 bg-champagne">
      <Container className="container mx-auto px-4">
        <h1 className="font-fraunces text-3xl md:text-4xl text-outer-space text-center mb-12">
          Meet Our Doctors & Aesthetic Specialists
        </h1>

        {doctors.length === 0 ? (
          <p className="text-center text-gray-600">No staff at this time.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((d) => (
              <Link
                key={d.slug}
                href={`/doctors/${d.slug}`}
                className="block bg-merino rounded-lg p-6 shadow-md hover:shadow-lg transition text-center"
              >
                <Image
                  src={d.img}
                  alt={d.imgAlt}
                  width={300}
                  height={300}
                  className="mx-auto rounded-md mb-4 object-cover border-2 border-gray-400"
                />
                <h2 className="font-fraunces text-xl text-outer-space mb-2">
                  {d.name}
                </h2>
                {d.tagline && (
                  <p className="text-sm text-gray-600">{d.tagline}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}