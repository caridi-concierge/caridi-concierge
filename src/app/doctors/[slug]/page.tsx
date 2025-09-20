import { notFound } from "next/navigation";
import { doctors } from "@/lib/constants/doctors";
import OtherStaffSection from "@/app/sections/doctors/OtherStaff";
import DoctorBioSection from "@/app/sections/doctors/Bio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DoctorPage({ params }: { params: { slug: string } }) {
  const doctor = doctors.find((d) => d.slug === params.slug);
  if (!doctor) return notFound();

  return (
    <>
      <Navbar />
      <DoctorBioSection doctor={doctor} />
      <OtherStaffSection currentSlug={doctor.slug} />
      <Footer />
    </>
  );
}