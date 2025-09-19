import TreatmentIntroSection from "@/app/sections/treatments/TreatmentIntroLayout";

export default function WrinkleReductionIntroSection() {
  return (
    <TreatmentIntroSection
      title="Dermal Fillers"
      description={[
        "Dermal fillers offer a safe and effective way to enhance your natural beauty by restoring volume, smoothing lines, and sculpting facial contours. Whether you're looking to rejuvenate tired features, soften deep wrinkles, or add definition to areas like the cheeks, jawline, or lips, our expert techniques provide tailored results that suit your unique facial structure.",
        "During your consultation, we’ll guide you through the options to ensure the perfect filler is chosen to meet your goals—creating a refreshed, youthful, and confident you. With immediate results and minimal downtime, you can achieve a radiant transformation in just one session."
    ]}
      frequency="This treatment should be repeated every 4-6 months."
      frequencyCtaHref="/book"
      frequencyCtaText="Book a visit"
      beforeCare="Avoid medications that could mask symptoms or cause conflict. This includes anti-inflammatory medications as well as blood thinners. Injections may cause minor bruising or swelling, therefore you should avoid scheduling injections immediately before any events. Its best to give yourself at least 1-2 weeks."
      afterCare="After your treatment, you should spend some time exercising the muscles that received the injections. Try to avoid touching the area. You should also avoid any activities that require laying face down, such as physiotherapy or massages."
    />
  );
}