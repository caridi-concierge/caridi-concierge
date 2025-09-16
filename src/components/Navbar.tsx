"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
  return (
    <header className="bg-merino text-outerSpace w-full">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-6 font-satoshi text-sm">
          <Link href="/" className="hover:text-carnation">Home</Link>
          <Link href="/about" className="hover:text-carnation">About</Link>
          <Link href="/treatments" className="hover:text-carnation">Treatments</Link>
          <Link href="/products" className="hover:text-carnation">Products</Link>
          <Link href="/blog" className="hover:text-carnation">Blog</Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/images/caridi_concierge_flat_logo.svg"
              alt="Caridi Concierge logo"
              width={319}
              height={80}
              className="w-[200px] h-auto"
            />
          </Link>
        </div>
        
        {/* Right actions */}
        <div className="flex items-center gap-4 font-satoshi text-sm">
          <a
            href="tel:+19174399470"
            className="flex items-center gap-2 hover:text-carnation"
          >
            <Phone size={16} /> (917) 439-9470
          </a>
          <PrimaryButton href="/book">Book a Visit</PrimaryButton>
        </div>
      </nav>
    </header>
  );
}