"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";
import { LOCATIONS } from "@/content/locations";
import Eyebrow from "@/components/Eyebrow";
import { pushEvent } from "@/lib/analytics";

export default function Footer() {
  const linkBase =
    "text-ivory/75 transition-colors duration-200 hover:text-ivory";

  return (
    <footer className="bg-teal-deep text-ivory/70">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20 pt-16 pb-10">
        {/* Top: 4-col editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-16 pb-12 border-b border-line-on-teal">
          {/* Brand + lede + socials */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-block"
              aria-label="Caridi Concierge — Home"
            >
              <Image
                src="/images/logos/caridi_concierge_contrast_logo_cormorant.svg"
                alt="Caridi Concierge"
                width={226}
                height={60}
                className="h-auto w-[180px]"
              />
            </Link>
            <p className="font-body text-[13px] leading-[1.7] max-w-[320px]">
              Physician-led aesthetic care, delivered to private clients
              across New York City.
            </p>
            <p className="font-body text-sm">{COMPANY.address.neighborhood} <br />{COMPANY.address.locality}, {COMPANY.address.region} {COMPANY.address.postalCode} <br /> {COMPANY.phone}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/images/icons/merino_instagram.svg" alt="" width={20} height={20} />
              </a>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Image src="/images/icons/merino_facebook.svg" alt="" width={20} height={20} />
              </a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Image src="/images/icons/merino_linkedin.svg" alt="" width={20} height={20} />
              </a>
              <a href={COMPANY.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <Image src="/images/icons/merino_tiktok.svg" alt="" width={20} height={20} />
              </a>
              <a href={COMPANY.social.yelp} target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                <Image src="/images/icons/merino_yelp.svg" alt="" width={20} height={20} />
              </a>
              <a href={COMPANY.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <Image src="/images/icons/merino_pinterest.svg" alt="" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Practice */}
          <div>
            <Eyebrow className="text-brass-soft text-[10px] mb-4">Practice</Eyebrow>
            <ul className="space-y-2.5 font-body text-[13px]">
              <li><Link href="/treatments" className={linkBase}>Treatments</Link></li>
              <li><Link href="/locations" className={linkBase}>Locations</Link></li>
              <li><Link href="/about" className={linkBase}>About Dr. Caridi</Link></li>
              <li><Link href="/blog" className={linkBase}>Blog</Link></li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <Eyebrow className="text-brass-soft text-[10px] mb-4">Visit</Eyebrow>
            <ul className="space-y-2.5 font-body text-[13px]">
              <li><Link href="/book?source=footer" className={linkBase}>Schedule</Link></li>
              {LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <Link href={`/locations/${loc.slug}`} className={linkBase}>
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/contact" className={linkBase}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Eyebrow className="text-brass-soft text-[10px] mb-4">Contact</Eyebrow>
            <ul className="space-y-2.5 font-body text-[13px]">
              <li>
                <Link href="/contact" className={linkBase}>
                  Contact Page
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  id="footer-email-cta"
                  onClick={() => pushEvent("email_click", { location: "footer" })}
                  className={linkBase}
                >{COMPANY.email}</a>
              </li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  id="footer-phone-cta"
                  onClick={() => pushEvent("phone_click", { location: "footer" })}
                  className={linkBase}
                >{COMPANY.phone}</a>
              </li>
              <li>
                <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className={linkBase}>
                  Instagram
                </a>
              </li>
              <li className="text-ivory/55">By appointment only</li>
            </ul>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-7 font-body text-[11px] uppercase tracking-[0.32em] text-ivory/50">
          <span>© {new Date().getFullYear()} {COMPANY.nameLegal}</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-ivory transition-colors">Privacy</Link>
            <span className="hidden sm:inline">New York · By appointment only</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
