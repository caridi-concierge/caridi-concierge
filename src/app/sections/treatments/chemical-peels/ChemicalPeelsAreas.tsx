import TreatmentAreasLayout from "../TreatmentAreasLayout";

export default function ChemicalPeelAreasSection() {
  return (
    <TreatmentAreasLayout
      sectionTitle="Treatment Areas"
      summary="Chemical peels gently exfoliate damaged skin and stimulate healthy renewal, improving tone, texture, and clarity across the face and body. Each treatment is matched to your skin type and concerns to safely lift pigmentation, smooth roughness, refine pores, and restore a brighter, more even complexion."
      ctaHref="/products"
      ctaText="Peel Options"
      areas={[
        {
          title: "Face",
          items: [
            {
              label: "Full Face",
              description:
                "Improve overall tone and texture, brighten dull skin, and support healthy cell turnover for a refreshed complexion.",
            },
            {
              label: "Forehead & Cheeks",
              description:
                "Target sun damage, fine lines, uneven texture, and post-acne marks across the upper and mid face.",
            },
            {
              label: "Perioral Area",
              description:
                "Address discoloration, fine lines, and roughness around the mouth for a smoother, more even appearance.",
            },
          ],
        },
        {
          title: "Neck & Chest",
          items: [
            {
              label: "Neck",
              description:
                "Lift superficial pigment and refine crepey texture to create a more uniform tone from face to décolletage.",
            },
            {
              label: "Chest",
              description:
                "Reduce sun spots, uneven pigmentation, and texture irregularities caused by chronic sun exposure.",
            },
          ],
        },
        {
          title: "Body",
          items: [
            {
              label: "Back & Shoulders",
              description:
                "Support clearer, smoother skin by targeting acne, post-inflammatory discoloration, and uneven texture.",
            },
            {
              label: "Hands",
              description:
                "Brighten dark spots and soften roughness for a more even, youthful appearance.",
            },
            {
              label: "Underarms & Inner Thighs",
              description:
                "Safely lighten areas prone to friction, dullness, or hyperpigmentation while respecting delicate skin.",
            },
          ],
        },
      ]}
    />
  );
}
