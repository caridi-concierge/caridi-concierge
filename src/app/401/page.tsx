import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";

export const metadata = {
    title: "Unauthorized | Caridi Concierge",
    description: "Caridi Concierge - Unauthorized.",
    robots: "noindex, nofollow",
  };

export default function UnauthorizedPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-merino text-outer-space px-6 text-center">
      <Image
        src="/images/caridi_concierge_flat_logo.svg"
        alt="Caridi Concierge logo"
        width={200}
        height={60}
        className="mb-6"
      />
      <h1 className="font-fraunces text-3xl md:text-4xl mb-4">
        Unauthorized
      </h1>
      <p className="text-sm md:text-base mb-8 max-w-md">
        You don’t have permission to view this page. Please log in or return
        to the homepage.
      </p>
      <PrimaryButton
        href="/"
        className="transition"
        variant="primary"
      >
        Back Home
      </PrimaryButton>
    </main>
  );
}
