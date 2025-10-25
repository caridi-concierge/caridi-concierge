// @/components/TreatmentPricingCard.tsx
// Renamed from PricingCard - focused component for treatment pages

import PrimaryButton from "@/components/PrimaryButton";
import { TreatmentMetadata } from "@/model/treatments/Treatment";

type TreatmentPricingCardProps = Pick<
  TreatmentMetadata,
  "startingPrice" | "note" | "frequency"
> & {
  bookHref: string;
  bookButtonText: string;
};

export default function TreatmentPricingCard({
  startingPrice,
  note,
  frequency,
  bookHref,
  bookButtonText,
}: TreatmentPricingCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      {/* Treatment Frequency */}
      <div className="mb-6">
        <h2 className="font-fraunces font-bold text-xl text-outer-space mb-3">
          Treatment Frequency
        </h2>
        <p className="font-fraunces text-sm text-outer-space">
          {frequency}
        </p>
      </div>

      {/* Note (if provided) */}
      {note && (
        <div className="mb-6 pb-6 border-b border-gray-200">
          <p className="text-xs text-gray-600 mb-1">Note</p>
          <p className="text-sm text-gray-700">{note}</p>
        </div>
      )}

      {/* Pricing */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h2 className="font-fraunces font-bold text-xl text-outer-space mb-3">
          Price
        </h2>
        <p className="text-xs text-gray-600 mb-1">Starting at</p>
        <p className="font-fraunces text-xl text-outer-space font-semibold">
          {startingPrice}
        </p>
      </div>

      {/* Booking Button */}
      <div className="flex justify-center">
        <PrimaryButton
          href={bookHref}
          variant="secondary"
          ariaLabel={`Book ${bookButtonText}`}
        >
          {bookButtonText}
        </PrimaryButton>
      </div>
    </div>
  );
}