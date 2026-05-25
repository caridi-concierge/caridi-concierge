import { notFound } from "next/navigation";
import { staff } from "@/lib/constants/staff";
import OtherStaffSection from "@/app/(site)/staff/_sections/OtherStaff";
import DoctorBioSection from "@/app/(site)/staff/_sections/Bio";
import StaffCredentialsSection from "@/app/(site)/staff/_sections/StaffCredentials";
import CTASection from "@/components/CTA";
import { JsonLd } from "@/components/JsonLD";
import { physicianSchema } from "@/content/schemas";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return staff.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const staffMember = staff.find((d) => d.slug === slug);
  if (!staffMember) return {};

  const description =
    staffMember.metaDescription ?? staffMember.bio[0] ?? staffMember.tagline;

  return createPageMetadata({
    title: staffMember.titleTag ?? `${staffMember.name} | Caridi Concierge`,
    description,
    path: `/staff/${staffMember.slug}`,
    image: staffMember.img,
    imageAlt: staffMember.imgAlt,
    keywords: [staffMember.name, staffMember.tagline, "Caridi Concierge"],
    noIndex: false,
  });
}

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
      <DoctorBioSection staff={staffMember} />
      <StaffCredentialsSection staff={staffMember} />
      <OtherStaffSection currentSlug={staffMember.slug} />
      <CTASection variantKey="default" />
    </>
  );
}
