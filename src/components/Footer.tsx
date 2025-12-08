"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import Container from "@/components/Container";
import { LOCATIONS } from "@/lib/constants/locations";

export default function Footer() {
  return (
    <footer className="bg-outer-space text-merino">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Logo, address, socials */}
        <div className="space-y-6">
          <Link href="/" className="inline-block" aria-label="Homepage">
            <Image
              src="/images/caridi_concierge_logo_contrast_fraunces.svg"
              alt="Caridi Concierge logo" 
              width={226}
              height={60}
              className="h-auto w-[180px]"
            />
          </Link>
          <p className="font-fraunces text-sm">{COMPANY.address.neighborhood} <br />{COMPANY.address.locality}, {COMPANY.address.region} {COMPANY.address.postalCode}</p>

          {/* Social icons */}
          <div className="flex gap-4">
            <a href={COMPANY.social.facebook} target="_blank">
              <Image src="/images/merino_facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href={COMPANY.social.instagram} target="_blank">
              <Image src="/images/merino_instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href={COMPANY.social.linkedin} target="_blank">
              <Image src="/images/merino_linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href={COMPANY.social.tiktok} target="_blank">
              <Image src="/images/merino_tiktok.svg" alt="TikTok" width={24} height={24} />
            </a>
            <a href={COMPANY.social.yelp} target="_blank">
              <Image src="/images/merino_yelp.svg" alt="Yelp" width={24} height={24} />
            </a>
            <a href={COMPANY.social.pinterest} target="_blank">
              <Image src="/images/merino_pinterest.svg" alt="Pinterest" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Right: Navigation columns */}
        <div className="grid grid-cols-3 gap-8 text-sm">
          <div>
            <p className="uppercase font-semibold text-alabaster mb-3 footer-heading">Navigate</p>
            <ul className="space-y-2">
              <li><Link href="/" aria-label="Home">Home</Link></li>
              <li><Link href="/treatments" aria-label="Treatments">Treatments</Link></li>
              <li><Link href="/products" aria-label="Products">Products</Link></li>
              <li><Link href="/blog" aria-label="Blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <p className="uppercase font-semibold text-alabaster mb-3 footer-heading">About</p>
            <ul className="space-y-2">
              <li><Link href="/about" aria-label="About">About</Link></li>
              <li><Link href="/staff" aria-label="Staff">Staff</Link></li>
              <li><Link href="/contact" aria-label="Contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="uppercase font-semibold text-alabaster mb-3 footer-heading">Locations</p>
            <ul className="space-y-2">
              {LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <Link href="/locations" aria-label={loc.name}>{loc.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-merino/20 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 text-xs">
          <p>©{new Date().getFullYear()} Caridi Concierge. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:underline" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
