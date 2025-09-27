import { notFound } from "next/navigation";
import { staff } from "@/lib/constants/staff";
import OtherStaffSection from "@/app/sections/staff/OtherStaff";
import DoctorBioSection from "@/app/sections/staff/Bio";
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
  const staffMember = staff.find((d) => d.slug === slug);
  if (!staffMember) return notFound();

  return (
    <>
      <JsonLd schema={physicianSchema}/>
      <Navbar />
      <DoctorBioSection staff={staffMember} />
      <OtherStaffSection currentSlug={staffMember.slug} />
      <Footer />
    </>
  );
}
