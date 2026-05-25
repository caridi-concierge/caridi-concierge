import PrivacyPolicy from "@/app/(site)/privacy-policy/_sections/PrivacyPolicy";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Privacy Policy & Data Protection | Caridi Concierge",
    description: "Learn how Caridi Concierge collects, uses, and protects personal information. We are committed to patient privacy, data security, and transparency.",
    path: "/privacy-policy",
    keywords: ["Caridi Concierge", "Privacy Policy", "Data Security", "PII", "PHI", "Transparency", "Brooklyn", "New York City"],
    noIndex: false
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}