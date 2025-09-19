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
              label: "Forehead Wrinkles",
              description: "Soften lines for a smooth, refreshed look.",
            },
            {
              label: "Frown Lines",
              description:
                "Relax deep lines between your brows for a serene expression.",
            },
            {
              label: "Crow’s Feet",
              description: "Minimize fine lines around the eyes for a youthful sparkle.",
            },
            {
              label: "Bunny Lines",
              description: "Smooth creases on the sides of your nose.",
            },
            {
              label: "Eyebrow Lift",
              description:
                "Lift the brows and open the eyes to give a youthful, rested look.",
            },
            {
              label: "Nose Tip Lift",
              description:
                "Slight injections in the nose can subtly turn your nose up and correct a down-turned nose.",
            },
          ],
        },
        {
          title: "Lower Face",
          items: [
            {
              label: "Marionette Lines",
              description: "Lift and rejuvenate the corners of your mouth.",
            },
            {
              label: "Chin Dimpling",
              description: "Even out texture for a polished appearance.",
            },
            {
              label: "Jaw Slimming",
              description: "Contour your jawline for a softer, sculpted profile.",
            },
            {
              label: "Lip Flip",
              description: "Give your lips the appearance of increased volume without filler.",
            },
            {
              label: "Gummy Smile Correction",
              description: "Reduce gum visibility when smiling.",
            },
          ],
        },
      ]}
    />
  );
}
