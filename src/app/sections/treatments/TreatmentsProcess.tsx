import Eyebrow from "@/components/Eyebrow";

const phases = [
  {
    n: "01",
    t: "Consultation",
    c: "A conversation, a clinical assessment, a plan. In your home or our studio—no pressure, no upselling.",
  },
  {
    n: "02",
    t: "Treatment",
    c: "Performed personally by Dr. Caridi. Sterile technique, medical-grade supplies, the same standard as a clinic.",
  },
  {
    n: "03",
    t: "Follow-up",
    c: "A two-week check-in, in person or by message. Tweaks if needed are included for the first refinement.",
  },
];

export default function TreatmentsProcess() {
  return (
    <section className="bg-ivory-2 text-ink">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <Eyebrow withDash className="text-brass mb-4">
          What a visit looks like
        </Eyebrow>
        <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] max-w-[760px] mb-14 lg:mb-[60px]">
          Three simple steps.{" "}
          <em className="not-italic italic font-light text-brass">
            No surprises.
          </em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
          {phases.map((p, i) => (
            <div
              key={p.n}
              className={`pt-10 pb-2 md:pr-10 ${
                i < phases.length - 1 ? "md:border-r border-line" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-line md:pl-10" : ""}`}
            >
              <Eyebrow className="text-brass mb-5">{p.n}</Eyebrow>
              <h3 className="font-display font-normal text-[28px] leading-tight mb-3.5">
                {p.t}
              </h3>
              <p className="font-body text-sm leading-[1.7] text-ink/70 max-w-[320px]">
                {p.c}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
