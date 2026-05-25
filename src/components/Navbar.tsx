"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";
import IconArrow from "@/components/icons/IconArrow";
import { pushEvent } from "@/lib/analytics";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
];

const linkClass =
  "font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory/75 transition-colors duration-200 hover:text-ivory";

export default function Navbar({
  ctaId = "navbar-cta",
  overlayCtaId = "navbar-overlay-cta",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal text-ivory border-b border-line-on-teal">
      <div className="mx-auto max-w-[1600px] grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-14 py-5">
        {/* Left links (desktop) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 justify-start">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Center brand */}
        <div className="flex justify-start lg:justify-center">
          <Link href="/" aria-label="Caridi Concierge — Home">
            <Image
              src="/images/logos/cc_logo_ivory_flat.svg"
              alt="Caridi Concierge"
              width={240}
              height={60}
              className="w-[180px] sm:w-[220px] lg:w-[200px] xl:w-[240px] h-auto"
              priority
            />
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center justify-end gap-4 lg:gap-6 min-w-0">
          {/* Desktop only */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={COMPANY.phoneHref}
              id="nav-phone-cta"
              onClick={() => pushEvent("phone_click", { location: "navbar_desktop" })}
              className={`${linkClass} flex items-center gap-2 normal-case tracking-normal text-[13px] whitespace-nowrap`}
              aria-label={`Call ${COMPANY.phone}`}
            >
              <Phone size={14} aria-hidden="true" />
              <span>{COMPANY.phone}</span>
            </a>
            <Link
              href="/book?source=navbar_desktop"
              id={ctaId}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-brass-soft px-5 py-2.5 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 hover:bg-brass-soft hover:text-teal-deep"
            >
              Book a visit <IconArrow className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-ivory"
            aria-label="Open menu"
            aria-controls="mobile-menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-teal text-ivory flex flex-col items-center justify-center p-6"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-ivory"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>

          <nav className="flex flex-col items-center gap-8 mb-10 font-display text-2xl">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-brass-soft transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-brass-soft transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-4 w-full max-w-[260px]">
            <Link
              href="/book?source=navbar_mobile"
              id={overlayCtaId}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory text-teal-deep px-6 py-3 font-body text-[11px] font-medium uppercase tracking-[0.32em]"
            >
              Book a visit <IconArrow className="w-3 h-3" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              id="nav-mobile-phone-cta"
              onClick={() => {
                setIsOpen(false);
                pushEvent("phone_click", { location: "navbar_mobile" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brass-soft px-6 py-3 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-brass-soft"
            >
              <Phone size={14} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
