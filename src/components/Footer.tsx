"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";

export default function Footer() {
  return (
    <footer className="bg-outer-space text-merino">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Logo, address, socials */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <Image
              src="/images/caridi_concierge_logo_contrast_fraunces.svg"
              alt="Caridi Concierge logo" 
              width={226}
              height={60}
              className="h-auto w-[180px]"
            />
          </Link>
          <p className="font-fraunces text-sm">Red Hook <br />Brooklyn, NY 11231</p>

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
          </div>
        </div>

        {/* Right: Navigation columns */}
        <div className="grid grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="uppercase font-semibold text-alabaster mb-3">Navigate</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/treatments">Treatments</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold text-alabaster mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-semibold text-alabaster mb-3">Info</h3>
            <ul className="space-y-2">
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-merino/20 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 text-xs">
          <p>©{new Date().getFullYear()} Caridi Concierge. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
