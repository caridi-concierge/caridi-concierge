import TreatmentAreasLayout from "@/app/sections/treatments/TreatmentAreasLayout";

export default function BiostimulatoryFillersAreasSection() {
  return (
    <TreatmentAreasLayout
      sectionTitle="Treatment Areas"
      summary="Biostimulatory fillers gradually restore firmness and structure by stimulating collagen beneath the skin. These treatments can be used across the face, neck, and body to smooth fine lines, lift contours, and improve overall skin texture over time."
      ctaHref="/products"
      ctaText="Product Options"
      areas={[
        {
          title: "Face",
          items: [
            {
              label: "Facial Rejuvenation",
              description:
                "Rebuild collagen in key areas like the cheeks, temples, and jawline to restore youthful lift and definition.",
            },
            {
              label: "Lower Face",
              description:
                "Improve firmness around the mouth and chin, softening deeper folds for a smoother, natural contour.",
            },
          ],
        },
        {
          title: "Neck & Chest",
          items: [
            {
              label: "Neck Tightening",
              description:
                "Reduce crepey skin and horizontal lines on the neck by stimulating collagen for a firmer, smoother texture.",
            },
            {
              label: "Chest (Décolletage)",
              description:
                "Restore volume and elasticity to sun-exposed skin on the chest for a refreshed, even appearance.",
            },
          ],
        },
        {
          title: "Body Contouring",
          items: [
            {
              label: "Upper Arms",
              description:
                "Firm and smooth loose skin on the upper arms, improving tone and texture over time.",
            },
            {
              label: "Non-Surgical Butt Lift",
              description:
                "Add subtle volume and structure to the buttocks while stimulating collagen for natural lift and contour.",
            },
          ],
        },
      ]}
    />
  );
}