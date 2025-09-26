import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "../styles/global.css";

const fraunces = Fraunces({
  variable: "--f-fraunces",           // note the name
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Caridi Concierge",
  description: "Luxury aesthetic treatments in NYC",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/cc_contrast_favicon.png",
    apple: "/images/cc_contrast_webclip.png",
  },
};

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--f-satoshi",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-merino">
        {children}
      </body>
    </html>
  );
}
