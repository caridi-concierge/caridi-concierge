import TreatmentAreasLayout from "@/app/sections/treatments/TreatmentAreasLayout";

export default function WrinkleReductionAreasSection() {
  return (
    <TreatmentAreasLayout
      sectionTitle="Treatment Areas"
      summary="Dermal fillers restore soft volume, balance proportions, and refine natural contours across the face. Treatments are fully personalized, from adding shape to the lips and lift to the cheeks, to softening folds and defining the jawline. Each area is approached with precision to enhance harmony and maintain your natural expression."
      ctaHref="/products"
      ctaText="Product Options"
      areas={[
        {
          title: "Upper Face",
          items: [
            {
              label: "Temples",
              description:
                "Restore volume in hollow temples to soften the upper face and create a smoother transition to the cheeks.",
            },
            {
              label: "Under-Eye Filler (Tear Troughs)",
              description:
                "Reduce hollowness and dark circles for a brighter, well-rested appearance.",
            },
            {
              label: "Forehead Lines",
              description:
                "In select cases, filler can smooth static forehead lines and improve overall facial balance.",
            },
          ],
        },
        {
          title: "Mid Face",
          items: [
            {
              label: "Cheek Filler",
              description:
                "Add lift and youthful contour to the cheeks for balanced facial structure and soft, natural definition.",
            },
            {
              label: "Nasolabial Folds",
              description:
                "Soften deep lines between the nose and mouth for a smoother, rejuvenated look.",
            },
            {
              label: "Marionette Lines",
              description:
                "Lift the corners of the mouth and restore natural volume to prevent a tired or downturned appearance.",
            },
          ],
        },
        {
          title: "Lower Face",
          items: [
            {
              label: "Lip Filler / Lip Injections",
              description:
                "Enhance shape, hydration, and symmetry while maintaining natural movement and proportion.",
            },
            {
              label: "Chin Filler",
              description:
                "Refine the chin’s projection and balance facial profile for a more harmonious look.",
            },
            {
              label: "Jawline Filler",
              description:
                "Define and contour the jawline to create structure and subtle lift while keeping a soft, natural finish.",
            },
          ],
        },
      ]}
    />
  );
}