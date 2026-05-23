import Eyebrow from "@/components/Eyebrow";

const principles = [
  {
    n: "01",
    t: "Physician-led",
    c: "Every consultation, plan, and injection is performed personally by Dr. Caridi. No associates, no rotating injectors.",
  },
  {
    n: "02",
    t: "Concierge by design",
    c: "Sterile technique and medical-grade supplies, brought to your home, hotel, or our private Gowanus studio.",
  },
  {
    n: "03",
    t: "Proportion-first",
    c: "Treatments planned for your face, your features, your timeline. We prefer fewer interventions, executed precisely.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="bg-ivory text-ink">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[120px] text-center">
        <Eyebrow className="text-brass mb-7">The Caridi philosophy</Eyebrow>

        <h2 className="font-display font-light text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.18] text-balance max-w-[900px] mx-auto">
          Restraint is the result. Every treatment is calibrated to look like
          nothing happened—
          <em className="not-italic italic font-light text-brass">
            except you, refined.
          </em>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-[980px] mx-auto text-left">
          {principles.map((p) => (
            <div key={p.n}>
              <Eyebrow className="text-brass text-[10px] mb-3.5">{p.n}</Eyebrow>
              <h3 className="font-display font-normal text-2xl leading-[1.1] mb-3">
                {p.t}
              </h3>
              <p className="font-body text-sm leading-[1.7] text-ink/70">
                {p.c}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
