import TreatmentAreasLayout from "@/app/sections/treatments/TreatmentAreasLayout";

export default function WrinkleReductionAreasSection() {
  return (
    <TreatmentAreasLayout
      sectionTitle="Treatment Areas"
      ctaHref="/products"
      ctaText="Product Options"
      areas={[
        {
          title: "Upper Face",
          items: [
            {
              label: "Forehead",
              description: "Smooth away forehead lines for a refreshed, youthful, and wrinkle-free look.",
            },
            {
              label: "Temple",
              description:
                "Restore lost volume in the temples for a softer, more youthful facial contour.",
            },
            {
              label: "Under Eyes",
              description: "Reduce hollowing and dark circles under the eyes for a brighter, more rested appearance.",
            },
          ],
        },
        {
          title: "Mid Face",
          items: [
            {
              label: "Cheeks",
              description: "Add volume and lift to the cheeks, enhancing facial balance and youthful definition.",
            },
            {
              label: "Nasolabial Folds",
              description: "Soften deep folds around the nose and mouth for a smoother, more rejuvenated appearance.",
            },
          ],
        },
      ]}
    />
  );
}
