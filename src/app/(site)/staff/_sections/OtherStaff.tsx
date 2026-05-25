// src/components/OtherStaffSection.tsx
import { staff } from "@/lib/constants/staff";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function OtherStaffSection({ currentSlug }: { currentSlug: string }) {
  const otherStaff = staff.filter((d) => d.slug !== currentSlug);

  if (otherStaff.length === 0) return null;

  return (
    <section className="py-16 bg-bone">
      <Container className="container mx-auto px-4 text-start">
        <h2 className="font-display text-4xl md:text-4xl text-ink mb-8">
          Other Staff
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {otherStaff.map((staff) => (
            <Link
              key={staff.slug}
              href={`/staff/${staff.slug}`}
              className="block bg-ivory-2 rounded-lg shadow-md hover:shadow-lg transition p-6"
            >
              <Image
                src={staff.img}
                alt={staff.imgAlt}
                width={300}
                height={300}
                className="mx-auto rounded-md mb-4 object-cover"
              />
              <h3 className="font-display text-xl text-ink mb-2">
                {staff.name}
              </h3>
              <p className="text-sm text-ink/55">{staff.tagline}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
