import TreatmentAreasLayout from "@/app/sections/treatments/TreatmentAreasLayout";

export default function ConsultAreasSection() {
  return (
    <TreatmentAreasLayout
      sectionTitle="What We Can Cover in a Consultation"
      summary=""
      ctaHref="/treatments"
      ctaText="Explore Treatments"
      areas={[
        {
          title: "Lines and Expression",
          items: [
            {
              label: "Forehead and frown lines",
              description:
                "Discuss whether neuromodulators (like Botox or Daxxify) are a fit, dosing philosophy, and expected movement.",
            },
            {
              label: "Crow’s feet",
              description:
                "Review options for softening lines while keeping expressions natural.",
            },
            {
              label: "Jaw tension (masseter)",
              description:
                "Evaluate clenching, facial balance goals, and whether treatment is appropriate.",
            },
          ],
        },
        {
          title: "Volume, Shape, and Balance",
          items: [
            {
              label: "Cheeks and midface support",
              description:
                "Assess whether volume restoration could improve balance, structure, or under-eye appearance.",
            },
            {
              label: "Lips",
              description:
                "Clarify goals (definition, hydration, symmetry), product selection, and what ‘natural’ looks like for you.",
            },
            {
              label: "Chin and jawline",
              description:
                "Discuss profile balance and options for subtle refinement, including when filler is not the right move.",
            },
          ],
        },
        {
          title: "Skin Quality and Tone",
          items: [
            {
              label: "Sunspots and uneven tone",
              description:
                "Review whether peels or other strategies may help, and what kind of downtime to expect.",
            },
            {
              label: "Acne and congestion",
              description:
                "Discuss safe options based on your skin type, sensitivity, and current routine.",
            },
            {
              label: "Texture and early creasing",
              description:
                "Talk through realistic improvement, timelines, and what is worth treating versus leaving alone.",
            },
          ],
        },
      ]}
    />
  );
}
