import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants/company";

export default function ContactInfoCard() {
  return (
    <div className="bg-merino rounded-lg p-8 shadow-md flex flex-col items-center text-center space-y-8">
      <div>
        <h2 className="font-fraunces text-xl text-charcoal mb-2">
          Reach us anytime
        </h2>
        <p className="text-gray-700 text-sm">
          Whether you&apos;re exploring options or ready to book, we&apos;re here to help. Call, text, or email -- whatever feels easiest. Or send us a note through the form.
        </p>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-fraunces text-lg text-charcoal mb-3">Call or Email</h4>
        <div className="space-y-3">
          <Link href={COMPANY.phoneHref} className="flex items-center gap-2 justify-center text-sm">
            <Image src="/images/space_phone.svg" alt="Phone" width={20} height={20} />
            {COMPANY.phone}
          </Link>
          <Link
            href={COMPANY.emailHref + "?subject=Booking%20Inquiry"}
            className="flex items-center gap-2 justify-center text-sm"
          >
            <Image src="/images/space_email.svg" alt="Email" width={20} height={20} />
            {COMPANY.email}
          </Link>
        </div>
      </div>

      {/* Socials */}
      <div>
        <h4 className="font-fraunces text-lg text-charcoal mb-3">Find Us Online</h4>
        <div className="flex flex-col gap-2 text-sm">
          <Link href={COMPANY.social.linkedin} target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_linkedin.svg" alt="LinkedIn" width={20} height={20} /> caridi-concierge
          </Link>
          <Link href={COMPANY.social.instagram} target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_instagram.svg" alt="Instagram" width={20} height={20} /> caridiconcierge
          </Link>
          <Link href={COMPANY.social.facebook} target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_facebook.svg" alt="Facebook" width={20} height={20} /> caridi-concierge
          </Link>
          <Link href={COMPANY.social.tiktok} target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_tiktok.svg" alt="TikTok" width={20} height={20} /> caridiconcierge
          </Link>
          <Link href={COMPANY.social.pinterest} target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_pinterest.svg" alt="Pinterest" width={20} height={20} /> caridiconcierge
          </Link>
        </div>
      </div>
    </div>
  );
}
