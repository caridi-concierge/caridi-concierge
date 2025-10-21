import TreatmentAreasLayout from "@/app/sections/treatments/TreatmentAreasLayout";

export default function BiostimulatoryFillerAreasSection() {
  return (
    <TreatmentAreasLayout
      sectionTitle="Treatment Areas"
      summary=""
      ctaHref="/products"
      ctaText="Product Options"
      areas={[
        {
          title: "Face",
          items: [
            {
              label: "Overview",
              description: "Biostimulatory fillers restore volume and reduce laxity to areas of the face affected by age-related collagen loss, such as the cheeks, temples, jawline, and lower face. By stimulating your body’s natural collagen production, these treatments improve facial contours, soften deep folds, and promote a smoother, more lifted appearance that evolves gradually and naturally.",
            },
          ],
        },
        {
          title: "Neck",
          items: [
            {
              label: "Overview",
              description: "The neck is one of the first areas to show signs of aging, including crepey skin and horizontal lines. Biostimulatory fillers help thicken and tighten the skin by stimulating collagen production, leading to improved skin texture and a firmer, more youthful neckline without surgery or downtime.",
            },
          ],
        },
        {
          title: "Chest",
          items: [
            {
              label: "Overview",
              description: "Sun exposure and aging often lead to thinning, wrinkled skin on the chest. Biostimulatory fillers are used to restore volume and improve elasticity in this delicate area, smoothing fine lines and revitalizing skin quality for a more even, youthful décolletage.",
            },
          ],
        },
        {
          title: "Upper Arms",
          items: [
            {
              label: "Overview",
              description: "As collagen declines, the upper arms may appear loose or crepey. Biostimulatory fillers work beneath the skin to rebuild structure and improve firmness, offering a subtle skin-tightening effect that helps the arms look smoother and more toned over time.",
            },
          ],
        },
        {
          title: "Butt",
          items: [
            {
              label: "Overview",
              description: "For patients seeking a non-surgical butt enhancement, biostimulatory fillers can add subtle volume while promoting collagen production for improved firmness and contour. This treatment is ideal for those who want to lift and shape the buttocks naturally, with results that build gradually and last.",
            },
          ],
        },
      ]}
    />
  );
}
