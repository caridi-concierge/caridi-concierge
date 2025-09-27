import { notFound } from "next/navigation";
import { doctors } from "@/lib/constants/doctors";
import OtherStaffSection from "@/app/sections/doctors/OtherStaff";
import DoctorBioSection from "@/app/sections/doctors/Bio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { physicianSchema } from "@/content/schemas";

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return notFound();

  return (
    <>
      <JsonLd schema={physicianSchema}/>
      <Navbar />
      <DoctorBioSection doctor={doctor} />
      <OtherStaffSection currentSlug={doctor.slug} />
      <Footer />
    </>
  );
}
