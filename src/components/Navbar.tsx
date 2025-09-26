"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import Button from "./PrimaryButton";
import { COMPANY } from "@/lib/constants/company";

export default function Navbar() {
  const [isOpen, setSidebarIsOpen] = useState(false);
  
  return (
    <header className="bg-merino text-outerSpace">
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] items-center py-4 px-4">
        {/* Left nav (desktop only) */}
        <nav className="hidden lg:flex items-center gap-4 lg:gap-6 font-satoshi text-sm justify-start">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        
        {/* Center logo */}
        <div className="flex justify-start lg:justify-center">
          <Link href="/">
            <Image
              src="/images/caridi_concierge_flat_logo.svg"
              alt="Caridi Concierge logo"
              width={200}
              height={60}
              className="h-auto w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px]"
            />
          </Link>
        </div>
        
        {/* Right actions */}
        <div className="flex items-center justify-end gap-3 lg:gap-4 font-satoshi text-sm min-w-0">
          {/* Desktop only */}
          <div className="hidden lg:flex items-center gap-3 lg:gap-4">
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 whitespace-nowrap">
              <Phone size={16} /> 
              <span className="hidden lg:inline">{COMPANY.phone}</span>
              <span className="lg:hidden">Call</span>
            </a>
            <Button 
              href="/book" 
              variant="primary" 
              className="text-sm px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-1.5 whitespace-nowrap"
            >
              Book a visit
            </Button>
          </div>
          
          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarIsOpen(true)}
            className="lg:hidden text-outerSpace"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-merino z-50 flex flex-col items-center justify-center p-6 touch-none">
          <button
            onClick={() => setSidebarIsOpen(false)}
            className="absolute top-6 right-6 text-outerSpace touch-auto"
          >
            <X size={28} />
          </button>
          
          <nav className="flex flex-col items-center gap-6 mb-8 font-fraunces text-outer-space text-2xl text-center touch-auto">
            <Link href="/" onClick={() => setSidebarIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setSidebarIsOpen(false)}>About</Link>
            <Link href="/treatments" onClick={() => setSidebarIsOpen(false)}>Treatments</Link>
            <Link href="/products" onClick={() => setSidebarIsOpen(false)}>Products</Link>
            <Link href="/blog" onClick={() => setSidebarIsOpen(false)}>Blog</Link>
          </nav>
          
          <div className="flex flex-col gap-4 w-full max-w-[200px] px-4 touch-auto">
            <Link
              href="/book"
              className="bg-carnation text-merino px-4 py-2 rounded-full text-center text-sm"
              onClick={() => setSidebarIsOpen(false)}
            >
              Book a visit
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="bg-outer-space text-merino px-4 py-2 rounded-full text-center text-sm"
              onClick={() => setSidebarIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}