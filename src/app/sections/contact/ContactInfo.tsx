import Link from "next/link";
import Image from "next/image";

export default function ContactInfoCard() {
  return (
    <div className="bg-merino rounded-lg p-8 shadow-md flex flex-col items-center text-center space-y-8">
      <div>
        <h3 className="font-fraunces text-xl text-charcoal mb-2">
          Reach us anytime
        </h3>
        <p className="text-gray-700 text-sm">
          Whether you&apos;re exploring options or ready to book, we&apos;re here to help. Call, text, or email-whatever feels easiest. Or send us a note through the form.
        </p>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-fraunces text-lg text-charcoal mb-3">Call or Email</h4>
        <div className="space-y-3">
          <Link href="tel:+19174399470" className="flex items-center gap-2 justify-center text-sm">
            <Image src="/images/space_phone.svg" alt="Phone" width={20} height={20} />
            (917) 439-9470
          </Link>
          <Link
            href="mailto:booking@caridiconcierge.com?subject=Booking%20Inquiry"
            className="flex items-center gap-2 justify-center text-sm"
          >
            <Image src="/images/space_email.svg" alt="Email" width={20} height={20} />
            booking@caridiconcierge.com
          </Link>
        </div>
      </div>

      {/* Socials */}
      <div>
        <h4 className="font-fraunces text-lg text-charcoal mb-3">Find Us Online</h4>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="https://www.linkedin.com/company/caridi-concierge/" target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_linkedin.svg" alt="LinkedIn" width={20} height={20} /> caridi-concierge
          </Link>
          <Link href="https://www.instagram.com/caridiconcierge/" target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_instagram.svg" alt="Instagram" width={20} height={20} /> caridiconcierge
          </Link>
          <Link href="https://www.facebook.com/people/Caridi-Concierge/61572501036242/" target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_facebook.svg" alt="Facebook" width={20} height={20} /> caridi-concierge
          </Link>
          <Link href="https://www.tiktok.com/@caridiconcierge" target="_blank" className="flex items-center gap-2 justify-center">
            <Image src="/images/space_tiktok.svg" alt="TikTok" width={20} height={20} /> caridiconcierge
          </Link>
        </div>
      </div>
    </div>
  );
}
