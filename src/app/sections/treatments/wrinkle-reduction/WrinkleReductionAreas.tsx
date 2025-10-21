import TreatmentAreasLayout from "@/app/sections/treatments/TreatmentAreasLayout";

export default function WrinkleReductionAreasSection() {
  return (
    <TreatmentAreasLayout
      sectionTitle="Treatment Areas"
      summary="Our wrinkle reduction treatments with Botox and Xeomin smooth fine lines, refine facial balance, and relieve muscle tension across the face, neck, and beyond. Each treatment is personalized and physician-led to create natural, refreshed results, from forehead Botox and crow’s feet to TMJ relief, jawline contouring, and treatments for excessive sweating across New York City."
      ctaHref="/products"
      ctaText="Product Options"
      areas={[
        {
          title: "Upper Face",
          items: [
            {
              label: "Forehead Botox",
              description:
                "Smooth horizontal forehead lines for a calm, refreshed look while preserving natural movement.",
            },
            {
              label: "Frown Lines (Glabellar Lines)",
              description:
                "Relax the '11' lines between your brows for a softer, more approachable expression.",
            },
            {
              label: "Crow’s Feet Botox",
              description:
                "Minimize fine lines around the eyes to restore brightness and youthful energy.",
            },
            {
              label: "Bunny Lines",
              description:
                "Reduce subtle creases on the sides of the nose for a smoother mid-face.",
            },
            {
              label: "Eyebrow Lift with Botox",
              description:
                "Gently lift the brows and open the eye area for a rested, naturally elevated appearance.",
            },
          ],
        },
        {
          title: "Lower Face",
          items: [
            {
              label: "Marionette Lines",
              description:
                "Lift the corners of the mouth and smooth downward folds for a subtle, uplifted contour.",
            },
            {
              label: "Chin Dimpling",
              description:
                "Relax overactive chin muscles for an even texture that complements the lower face.",
            },
            {
              label: "Lip Flip with Botox",
              description:
                "Strategic lip injections can enhance your natural lip shape by relaxing the upper lip for subtle outward lift and definition without lip filler.",
            },
            {
              label: "Gummy Smile Correction",
              description:
                "Reduce gum visibility when smiling for a more balanced and confident appearance.",
            },
          ],
        },
        {
          title: "Jawline & Tension Relief",
          items: [
            {
              label: "Masseter Botox (Jaw Slimming)",
              description:
                "Slim and sculpt the jawline while easing tension from clenching or grinding for both comfort and refinement.",
            },
            {
              label: "TMJ Botox",
              description:
                "Relieve jaw tightness, headaches, and clenching caused by TMJ disorder while softening the lower face for a balanced, relaxed appearance.",
            },
            {
              label: "Nefertiti Lift (Neck and Jawline)",
              description:
                "Use targeted neck Botox to relax the platysma muscles, creating a smoother neckline and subtly lifting the jawline without surgery.",
            },
          ],
        },
        {
          title: "Hyperhidrosis (Excessive Sweating)",
          items: [
            {
              label: "Underarms",
              description:
                "Treat excessive underarm sweating (Botox for sweating) to stay dry and confident through any season.",
            },
            {
              label: "Hands",
              description:
                "Reduce sweating in the hands to improve comfort and ease during everyday interactions.",
            },
            {
              label: "Feet",
              description:
                "Control excessive foot perspiration for comfort in shoes and social settings.",
            },
          ],
        },
      ]}
    />
  );
}
