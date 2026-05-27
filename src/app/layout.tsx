import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import "../styles/global.css";
import { businessSchema, websiteSchema, organizationSchema } from "@/content/schemas";
import { JsonLd } from "@/components/JsonLD";
import { GoogleTagManager } from "@next/third-parties/google";

const cormorant = Cormorant({
  variable: "--f-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--f-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Caridi Concierge | Luxury Aesthetic Treatments in NYC",
  description: "Caridi Concierge offers premium, in-home aesthetic treatments in NYC. From botox to fillers, experience luxury skincare at your convenience. Book today!",
  alternates: {
    canonical: "https://www.caridiconcierge.com",
  },
  icons: {
    icon: "/images/logos/favicon.svg",
    shortcut: "/images/logos/favicon.svg",
    apple: "/images/logos/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ivory">
        <JsonLd schema={businessSchema} id="layout-business"/>
        <JsonLd schema={websiteSchema} id="layout-website"/>
        <JsonLd schema={organizationSchema} id="layout-organization"/>
        <GoogleTagManager gtmId="GTM-KN8MSZTK" />
        {children}
      </body>
    </html>
  );
}
