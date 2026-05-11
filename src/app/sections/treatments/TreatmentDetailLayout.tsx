import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";
import { Accordion, AccordionItem } from "@/components/Accordion";
import type { TreatmentDetailContent } from "@/model/treatments/TreatmentDetail";

/* ─────────────────────────  Hero (split)  ───────────────────────── */

function Breadcrumbs({ content }: { content: TreatmentDetailContent }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-3.5 font-body text-[10px] font-medium uppercase tracking-[0.32em]"
    >
      <Link href="/treatments" className="text-ink/55 hover:text-ink transition-colors">
        Treatments
      </Link>
      <span aria-hidden="true" className="text-ink/55">/</span>
      <span className="text-brass">{content.category}</span>
      <span aria-hidden="true" className="text-ink/55">/</span>
      <span className="text-ink">{content.title}</span>
    </nav>
  );
}

function Hero({ content }: { content: TreatmentDetailContent }) {
  return (
    <section className="bg-ivory border-b border-line">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
        {/* Copy */}
        <div className="px-6 sm:px-10 lg:px-20 pt-16 lg:pt-[100px] pb-12 lg:pb-[90px] lg:border-r lg:border-line">
          <Breadcrumbs content={content} />
          <Eyebrow className="text-brass mt-7 flex items-center gap-3.5">
            <span aria-hidden="true" className="inline-block w-6 h-px bg-brass" />
            {content.eyebrow}
          </Eyebrow>
          <h1 className="font-display font-light text-[48px] sm:text-[72px] lg:text-[96px] leading-[0.98] tracking-[-0.015em] mt-7">
            {content.title}{" "}
            <em className="not-italic italic font-light text-brass">
              {content.italic}
            </em>
          </h1>
          <p className="mt-8 max-w-[520px] text-[17px] leading-[1.7] font-light text-ink/70">
            {content.lede}
          </p>
          <div className="mt-14 flex flex-wrap items-center gap-3.5">
            <Link
              href="/book"
              id="detail-hero-cta"
              className="inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 hover:bg-teal-deep"
            >
              Schedule a consultation <IconArrow />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-4 pb-3 border-b border-ink font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass hover:border-brass"
            >
              Or text the practice →
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="relative w-full min-h-[420px] lg:min-h-[600px] overflow-hidden bg-bone">
          <Image
            src={content.heroImage.src}
            alt={content.heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 47vw, 100vw"
            className="object-cover"
            style={{ filter: "saturate(0.85)" }}
          />
        </div>
      </div>
      <SpecRail content={content} />
    </section>
  );
}

function SpecRail({ content }: { content: TreatmentDetailContent }) {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-ivory border-t border-line"
    >
      {content.spec.map((s, i) => (
        <div
          key={s.l}
          className={[
            "px-6 sm:px-7 py-6 sm:py-[26px]",
            // hairline grid dividers (right and bottom on small, right only on lg)
            i % 2 === 1 ? "" : "border-r border-line",
            "sm:[&:nth-child(3n)]:border-r-0 sm:[&:not(:nth-child(3n))]:border-r sm:border-line",
            "lg:[&:nth-child(6n)]:border-r-0 lg:[&:not(:nth-child(6n))]:border-r lg:border-line",
            i < content.spec.length - 2 ? "border-b sm:border-b-0 border-line" : "",
          ].join(" ")}
        >
          <Eyebrow className="text-brass text-[9px] mb-2">{s.l}</Eyebrow>
          <div className="font-display font-normal text-[17px] leading-[1.2] text-ink">
            {s.v}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────  Section nav  ───────────────────────── */

const SECTION_NAV = [
  { anchor: "overview", label: "Overview" },
  { anchor: "best-for", label: "Best for" },
  { anchor: "products", label: "Products & areas" },
  { anchor: "process", label: "A visit" },
  { anchor: "pricing", label: "Pricing" },
  { anchor: "downtime", label: "Downtime" },
  { anchor: "before-after", label: "Before & after" },
  { anchor: "faqs", label: "FAQs" },
  { anchor: "pairs", label: "Pairs with" },
];

function SectionNav({
  hideAnchors,
}: {
  hideAnchors?: string[];
}) {
  const items = SECTION_NAV.filter((s) => !hideAnchors?.includes(s.anchor));
  return (
    <div
      className="sticky top-0 z-10 bg-ivory border-y border-line"
      aria-label="On this page"
    >
      <div className="mx-auto max-w-[1280px] flex gap-9 px-6 sm:px-10 lg:px-20 py-4 overflow-x-auto">
        <Eyebrow className="text-brass whitespace-nowrap shrink-0">
          On this page
        </Eyebrow>
        {items.map((it, i) => (
          <a
            key={it.anchor}
            href={`#${it.anchor}`}
            className="font-body text-[10px] font-medium uppercase tracking-[0.32em] text-ink/70 hover:text-ink whitespace-nowrap transition-colors"
          >
            <span className="text-brass mr-1.5">
              {(i + 1).toString().padStart(2, "0")}
            </span>
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────  Overview  ───────────────────────── */

function Overview({ content }: { content: TreatmentDetailContent }) {
  return (
    <section id="overview" className="bg-ivory scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <Eyebrow withDash className="text-brass mb-4">
              01 · The treatment
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05]">
              What it is,{" "}
              <em className="not-italic italic font-light text-brass">plainly.</em>
            </h2>
          </div>
          <div className="space-y-6">
            {content.overview.map((p, i) => (
              <p
                key={i}
                className="font-body font-light text-[17px] leading-[1.7] text-ink/70 max-w-[640px]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Best for  ───────────────────────── */

function BestFor({ content }: { content: TreatmentDetailContent }) {
  return (
    <section
      id="best-for"
      className="bg-ivory-2 border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <Eyebrow withDash className="text-brass mb-4">
          02 · Suitability
        </Eyebrow>
        <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] mb-14 max-w-[760px]">
          Best for,{" "}
          <em className="not-italic italic font-light text-brass">and not for.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          <div className="bg-ivory-2 md:pr-12 py-10 md:py-10">
            <Eyebrow className="text-brass text-[10px] mb-6">
              Right for you if
            </Eyebrow>
            <ul className="list-none p-0 m-0">
              {content.bestFor.yes.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[20px_1fr] gap-4 py-4 border-t border-line font-body text-[15px] leading-[1.6] text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="font-display italic text-brass text-lg leading-none pt-0.5"
                  >
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ivory-2 md:pl-12 py-10 md:py-10">
            <Eyebrow className="text-ink/55 text-[10px] mb-6">Hold off if</Eyebrow>
            <ul className="list-none p-0 m-0">
              {content.bestFor.no.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[20px_1fr] gap-4 py-4 border-t border-line font-body text-[15px] leading-[1.6] text-ink/70"
                >
                  <span aria-hidden="true" className="text-ink/55 text-xs pt-1">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Products & areas  ───────────────────────── */

function ProductsAreas({ content }: { content: TreatmentDetailContent }) {
  return (
    <section
      id="products"
      className="bg-ivory border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              03 · Products & areas
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] max-w-[820px]">
              What we use,{" "}
              <em className="not-italic italic font-light text-brass">and where.</em>
            </h2>
          </div>
          <Eyebrow className="text-ink/55 max-w-[280px] text-right">
            The product follows the plan. Plans follow the anatomy.
          </Eyebrow>
        </div>

        {/* Products table */}
        <div className="mb-16 lg:mb-[70px]">
          <Eyebrow withDash className="text-brass text-[10px] mb-5">
            Products
          </Eyebrow>
          {/* Header row — hidden on small */}
          <div className="hidden md:grid grid-cols-[1.3fr_1fr_2fr_1.3fr] gap-8 py-4 border-b border-line">
            <Eyebrow className="text-ink/55 text-[9px]">Product</Eyebrow>
            <Eyebrow className="text-ink/55 text-[9px]">By</Eyebrow>
            <Eyebrow className="text-ink/55 text-[9px]">Notes</Eyebrow>
            <Eyebrow className="text-ink/55 text-[9px]">Used for</Eyebrow>
          </div>
          <ul className="list-none p-0 m-0">
            {content.products.map((p) => (
              <li
                key={p.name}
                className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_2fr_1.3fr] gap-3 md:gap-8 py-6 md:py-[22px] border-b border-line items-baseline"
              >
                <div className="font-display font-normal text-[22px]">
                  {p.name}
                </div>
                <Eyebrow className="text-ink/55 text-[10px]">{p.by}</Eyebrow>
                <p className="font-body text-sm leading-[1.6] text-ink/70 max-w-[560px]">
                  {p.note}
                </p>
                <Eyebrow className="text-brass text-[10px]">{p.use}</Eyebrow>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas grid */}
        <div>
          <Eyebrow withDash className="text-brass text-[10px] mb-5">
            Areas treated
          </Eyebrow>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {content.areas.map((a, i) => (
              <div
                key={a.name}
                className="bg-ivory p-7 sm:p-8 pb-9 border-t border-line"
              >
                <Eyebrow className="text-brass text-[10px] mb-3">
                  {(i + 1).toString().padStart(2, "0")}
                </Eyebrow>
                <h3 className="font-display font-normal text-[26px] leading-[1.1] mb-3">
                  {a.name}
                </h3>
                <p className="font-body text-sm leading-[1.7] text-ink/70">
                  {a.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Pullquote  ───────────────────────── */

function Pullquote({ content }: { content: TreatmentDetailContent }) {
  if (!content.pullquote) return null;
  return (
    <section className="bg-teal text-ivory border-y border-line-on-teal">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 lg:px-20 py-24 lg:py-[120px]">
        <Eyebrow withDash className="text-brass-soft mb-7">
          A note from Dr. Caridi
        </Eyebrow>
        <blockquote className="font-display font-light italic text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.15] tracking-[-0.01em] max-w-[980px] m-0">
          &ldquo;{content.pullquote.body}&rdquo;
        </blockquote>
        <Eyebrow className="text-brass-soft mt-9">
          — {content.pullquote.attr}
        </Eyebrow>
      </div>
    </section>
  );
}

/* ─────────────────────────  Process  ───────────────────────── */

function ProcessTimeline({ content }: { content: TreatmentDetailContent }) {
  const phases = content.process;
  return (
    <section id="process" className="bg-ivory-2 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <Eyebrow withDash className="text-brass mb-4">
          04 · A visit, step by step
        </Eyebrow>
        <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] mb-14 max-w-[880px]">
          Four quiet steps.{" "}
          <em className="not-italic italic font-light text-brass">One visit.</em>
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${phases.length} border-t border-line`}
        >
          {phases.map((p, i) => (
            <div
              key={p.n}
              className={[
                "pt-9 pb-2 md:pr-8",
                i < phases.length - 1 ? "lg:border-r border-line" : "",
                i > 0 ? "border-t lg:border-t-0 border-line" : "",
              ].join(" ")}
            >
              <Eyebrow className="text-brass mb-4 text-[11px]">
                {p.n} · {p.meta}
              </Eyebrow>
              <h3 className="font-display font-normal text-[26px] leading-tight mb-3.5">
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

/* ─────────────────────────  Pricing  ───────────────────────── */

function PricingTable({ content }: { content: TreatmentDetailContent }) {
  return (
    <section
      id="pricing"
      className="bg-ivory border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              05 · Pricing
            </Eyebrow>
            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-[52px] leading-[1.08]">
              Concierge ranges,{" "}
              <em className="not-italic italic font-light text-brass">
                reviewed at consult.
              </em>
            </h2>
            <p className="mt-7 font-body text-sm leading-[1.7] text-ink/70 max-w-[360px]">
              Pricing varies with anatomy, product, and the visit length we
              plan together. The figures below are typical ranges — your final
              plan, with cost, is reviewed before any product is opened.
            </p>
          </div>
          <div>
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr] gap-6 py-4 border-b border-line">
              <Eyebrow className="text-ink/55 text-[9px]">Plan</Eyebrow>
              <Eyebrow className="text-ink/55 text-[9px] text-right">From</Eyebrow>
              <Eyebrow className="text-ink/55 text-[9px] text-right">Up to</Eyebrow>
            </div>
            <ul className="list-none p-0 m-0">
              {content.pricing.map((row) => (
                <li
                  key={row.area}
                  className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-1 sm:gap-6 py-5 border-b border-line items-baseline"
                >
                  <div>
                    <div className="font-display font-normal text-[20px] leading-[1.2]">
                      {row.area}
                    </div>
                    <Eyebrow className="text-ink/55 text-[9px] mt-1.5">
                      {row.unit}
                    </Eyebrow>
                  </div>
                  <div className="font-display font-light italic text-2xl text-brass sm:text-right">
                    ${row.from.toLocaleString()}
                  </div>
                  <div className="font-display font-light text-2xl text-ink sm:text-right">
                    ${row.to.toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[11px] leading-[1.7] text-ink/55">
              * Concierge service includes travel within Manhattan, Brooklyn,
              and Queens. Studio visits in Gowanus from January 2026. Series
              and bundled visits are quoted at consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Downtime & aftercare  ───────────────────────── */

function DowntimeAftercare({ content }: { content: TreatmentDetailContent }) {
  const d = content.downtime;
  return (
    <section id="downtime" className="bg-ivory-2 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <Eyebrow withDash className="text-brass mb-4">
          06 · Downtime & aftercare
        </Eyebrow>
        <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] mb-14 max-w-[880px]">
          What to expect,{" "}
          <em className="not-italic italic font-light text-brass">
            hour by hour.
          </em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Immediate symptoms + work-ready */}
          <div>
            <Eyebrow withDash className="text-brass text-[10px] mb-5">
              Immediate
            </Eyebrow>
            {d.immediate.map((item) => (
              <div key={item.t} className="py-5 border-t border-line">
                <div className="font-display font-normal text-[22px] mb-1.5">
                  {item.t}
                </div>
                <p className="font-body text-sm leading-[1.7] text-ink/70">
                  {item.c}
                </p>
              </div>
            ))}
            <div className="mt-8 py-5 px-6 bg-ivory-3 border-l border-brass">
              <Eyebrow className="text-brass text-[10px] mb-2">
                Work-ready
              </Eyebrow>
              <p className="font-body text-sm leading-[1.7] text-ink/70">
                {d.workReady}
              </p>
            </div>
          </div>

          {/* Aftercare numbered list */}
          <div>
            <Eyebrow withDash className="text-brass text-[10px] mb-5">
              Aftercare
            </Eyebrow>
            <ol className="list-none p-0 m-0">
              {d.aftercare.map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[44px_1fr] gap-4 py-5 border-b border-line first:border-t items-baseline"
                >
                  <Eyebrow className="text-brass text-[10px]">
                    {(i + 1).toString().padStart(2, "0")}
                  </Eyebrow>
                  <span className="font-body text-[15px] leading-[1.7] text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Before & after  ───────────────────────── */

function BeforeAfter({ content }: { content: TreatmentDetailContent }) {
  const items =
    content.beforeAfter && content.beforeAfter.length > 0
      ? content.beforeAfter
      : [
          { src: "", alt: "Lip · before / 2 wk", label: "Lip · before / 2 wk" },
          { src: "", alt: "Cheek · before / 4 mo", label: "Cheek · before / 4 mo" },
          { src: "", alt: "Jawline · before / 6 mo", label: "Jawline · before / 6 mo" },
          { src: "", alt: "Tear trough · before / 4 mo", label: "Tear trough · before / 4 mo" },
        ];

  return (
    <section
      id="before-after"
      className="bg-ivory border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              07 · Before & after
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] max-w-[760px]">
              Quiet results,{" "}
              <em className="not-italic italic font-light text-brass">
                documented honestly.
              </em>
            </h2>
            <p className="mt-5 font-body text-sm leading-[1.7] text-ink/70 max-w-[540px]">
              Photographed under consistent light, with consent. Replace with
              photoshoot deliverables (booking week of May 11–17, 2026).
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {items.map((item, i) => (
            <div key={i} className="bg-ivory">
              {item.src ? (
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-bone">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover"
                    style={{ filter: "saturate(0.85)" }}
                  />
                </div>
              ) : (
                <StripedPlaceholder label={item.label ?? item.alt} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StripedPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative w-full aspect-[4/5] bg-bone flex items-center justify-center"
      role="img"
      aria-label={label}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(20,32,38,0.04) 0 1px, transparent 1px 14px)",
      }}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
        [ {label} ]
      </span>
    </div>
  );
}

/* ─────────────────────────  FAQs  ───────────────────────── */

function FAQs({ content }: { content: TreatmentDetailContent }) {
  return (
    <section id="faqs" className="bg-ivory-2 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              08 · {content.category} questions
            </Eyebrow>
            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-[52px] leading-[1.08]">
              Honest answers,{" "}
              <em className="not-italic italic font-light text-brass">
                before you book.
              </em>
            </h2>
            <p className="mt-6 font-body text-sm leading-[1.7] text-ink/70 max-w-[320px]">
              Have a question we haven&apos;t covered? Text the practice — Dr.
              Caridi answers personally.
            </p>
          </div>
          <div>
            <Accordion>
              {content.faqs.map((f, i) => (
                <AccordionItem key={i} title={f.q} defaultOpen={i === 0}>
                  <p>{f.a}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Pairs well with  ───────────────────────── */

function Related({ content }: { content: TreatmentDetailContent }) {
  return (
    <section
      id="pairs"
      className="bg-ivory border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              09 · Pairs well with
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] max-w-[760px]">
              What we often{" "}
              <em className="not-italic italic font-light text-brass">
                plan alongside.
              </em>
            </h2>
          </div>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2.5 pb-1.5 border-b border-ink font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass hover:border-brass"
          >
            All treatments <IconArrow />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {content.related.map((r) => (
            <Link
              key={r.id}
              href={`/treatments/${r.slug}`}
              className="group flex flex-col bg-ivory-3 p-7 sm:p-8 pb-10"
            >
              <div className="relative w-full aspect-[5/4] overflow-hidden bg-bone mb-6">
                <Image
                  src={r.img.src}
                  alt={r.img.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  style={{ filter: "saturate(0.9)" }}
                />
              </div>
              <Eyebrow className="text-brass text-[10px] mb-3.5">
                {r.subtitle}
              </Eyebrow>
              <h3 className="font-display font-normal text-[28px] leading-[1.1] mb-3.5">
                {r.title}
              </h3>
              <p className="font-body text-sm leading-[1.7] text-ink/70 flex-grow">
                {r.copy}
              </p>
              <div className="mt-6 pt-5 border-t border-line flex items-baseline justify-between">
                <Eyebrow className="text-ink">Read about it</Eyebrow>
                <span className="text-ink transition-colors duration-200 group-hover:text-brass">
                  <IconArrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Layout  ───────────────────────── */

export type TreatmentDetailLayoutProps = {
  content: TreatmentDetailContent;
};

export default function TreatmentDetailLayout({
  content,
}: TreatmentDetailLayoutProps) {
  const hideAnchors: string[] = [];
  // Hide before-after if there are no images and we want to skip the placeholders.
  // For now we always render with placeholders, so don't hide.

  return (
    <>
      <Hero content={content} />
      <SectionNav hideAnchors={hideAnchors} />
      <Overview content={content} />
      <BestFor content={content} />
      <ProductsAreas content={content} />
      {content.pullquote ? <Pullquote content={content} /> : null}
      <ProcessTimeline content={content} />
      <PricingTable content={content} />
      <DowntimeAftercare content={content} />
      <BeforeAfter content={content} />
      <FAQs content={content} />
      <Related content={content} />
    </>
  );
}
