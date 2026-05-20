import { Fragment } from "react";
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-ivory border-t border-line">
      {content.spec.map((s, i) => (
        <div
          key={s.l}
          className={[
            "px-6 sm:px-7 py-6 sm:py-[26px]",
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

type NavItem = { anchor: string; label: string };

function SectionNav({ items }: { items: NavItem[] }) {
  if (items.length === 0) return null;
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

/* ─────────────────────────  Section components  ───────────────────────── */

type NumberedProps = {
  content: TreatmentDetailContent;
  /** Two-digit section number assigned by the layout (e.g. "01", "02"). */
  n: string;
};

function Overview({ content, n }: NumberedProps) {
  return (
    <section id="overview" className="bg-ivory scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <Eyebrow withDash className="text-brass mb-4">
              {n} · The treatment
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

function BestFor({ content, n }: NumberedProps) {
  const bf = content.bestFor;
  if (!bf || (bf.yes.length === 0 && bf.no.length === 0)) return null;
  return (
    <section
      id="best-for"
      className="bg-ivory-2 border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <Eyebrow withDash className="text-brass mb-4">
          {n} · Suitability
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
              {bf.yes.map((item) => (
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
              {bf.no.map((item) => (
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

function ProductsAreas({ content, n }: NumberedProps) {
  const products = content.products ?? [];
  const areas = content.areas ?? [];
  if (products.length === 0 && areas.length === 0) return null;

  // Filler logic so partial last rows in the areas grid don't show as gray bands.
  const smFillers = (2 - (areas.length % 2)) % 2;
  const lgFillers = (3 - (areas.length % 3)) % 3;
  const fillerCount = Math.max(smFillers, lgFillers);

  return (
    <section
      id="products"
      className="bg-ivory border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              {n} · Products & areas
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

        {products.length > 0 && (
          <div className="mb-16 lg:mb-[70px]">
            <Eyebrow withDash className="text-brass text-[10px] mb-5">
              Products
            </Eyebrow>
            <div className="hidden md:grid grid-cols-[1.3fr_1fr_2fr_1.3fr] gap-8 py-4 border-b border-line">
              <Eyebrow className="text-ink/55 text-[9px]">Product</Eyebrow>
              <Eyebrow className="text-ink/55 text-[9px]">By</Eyebrow>
              <Eyebrow className="text-ink/55 text-[9px]">Notes</Eyebrow>
              <Eyebrow className="text-ink/55 text-[9px]">Used for</Eyebrow>
            </div>
            <ul className="list-none p-0 m-0">
              {products.map((p) => (
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
        )}

        {areas.length > 0 && (
          <div>
            <Eyebrow withDash className="text-brass text-[10px] mb-5">
              Areas treated
            </Eyebrow>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
              {areas.map((a, i) => (
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
              {Array.from({ length: fillerCount }).map((_, i) => {
                const visibleAtSm = i < smFillers;
                const visibleAtLg = i < lgFillers;
                return (
                  <div
                    key={`filler-${i}`}
                    aria-hidden="true"
                    className={[
                      "bg-ivory",
                      "hidden",
                      visibleAtSm ? "sm:block" : "sm:hidden",
                      visibleAtLg ? "lg:block" : "lg:hidden",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

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

function ProcessTimeline({ content, n }: NumberedProps) {
  const phases = content.process;
  if (phases.length === 0) return null;
  return (
    <section id="process" className="bg-ivory-2 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <Eyebrow withDash className="text-brass mb-4">
          {n} · A visit, step by step
        </Eyebrow>
        <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] mb-14 max-w-[880px]">
          {phases.length === 4 ? (
            <>Four quiet steps. <em className="not-italic italic font-light text-brass">One visit.</em></>
          ) : (
            <>Quiet steps. <em className="not-italic italic font-light text-brass">No surprises.</em></>
          )}
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            phases.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          } border-t border-line`}
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

function PricingTable({ content, n }: NumberedProps) {
  const pricing = content.pricing ?? [];
  if (pricing.length === 0) return null;
  return (
    <section
      id="pricing"
      className="bg-ivory border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              {n} · Pricing
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
              {pricing.map((row) => (
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

function DowntimeAftercare({ content, n }: NumberedProps) {
  const d = content.downtime;
  if (!d) return null;
  return (
    <section id="downtime" className="bg-ivory-2 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <Eyebrow withDash className="text-brass mb-4">
          {n} · Downtime & aftercare
        </Eyebrow>
        <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] mb-14 max-w-[880px]">
          What to expect,{" "}
          <em className="not-italic italic font-light text-brass">
            hour by hour.
          </em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
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

function BeforeAfter({ content, n }: NumberedProps) {
  if (content.beforeAfter === undefined) return null;
  const items =
    content.beforeAfter.length > 0
      ? content.beforeAfter
      : [
          { src: "/images/results/botox-crowsfeet-before-after.webp", alt: "Crow's feet treatment before/after", label: "Softened Crow's Feet lines" },
          { src: "/images/results/botox-cheek-lip-chin-filler-before-after.webp", alt: "Full face botox", label: "Full face botox" },
          { src: "/images/results/botox-cheek-filler-before-after.webp", alt: "Forehead botox", label: "Forehead botox" },
          { src: "", alt: "", label: "" },
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
              {n} · Before & after
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[56px] leading-[1.05] max-w-[760px]">
              Quiet results,{" "}
              <em className="not-italic italic font-light text-brass">
                documented honestly.
              </em>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
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

function FAQs({ content, n }: NumberedProps) {
  if (content.faqs.length === 0) return null;
  return (
    <section id="faqs" className="bg-ivory-2 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              {n} · {content.category} questions
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

function Related({ content, n }: NumberedProps) {
  if (content.related.length === 0) return null;
  return (
    <section
      id="pairs"
      className="bg-ivory border-t border-line scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow withDash className="text-brass mb-4">
              {n} · Pairs well with
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

/**
 * Build the section list for a given content, including only sections with content.
 * Numbered sections are renumbered sequentially; the pullquote is unnumbered.
 */
function buildSections(content: TreatmentDetailContent) {
  const numbered: { anchor: string; label: string; node: (n: string) => React.ReactNode }[] = [];

  numbered.push({
    anchor: "overview",
    label: "Overview",
    node: (n) => <Overview content={content} n={n} />,
  });

  if (
    content.bestFor &&
    (content.bestFor.yes.length > 0 || content.bestFor.no.length > 0)
  ) {
    numbered.push({
      anchor: "best-for",
      label: "Best for",
      node: (n) => <BestFor content={content} n={n} />,
    });
  }

  const hasProducts = (content.products?.length ?? 0) > 0;
  const hasAreas = (content.areas?.length ?? 0) > 0;
  if (hasProducts || hasAreas) {
    numbered.push({
      anchor: "products",
      label: "Products & areas",
      node: (n) => <ProductsAreas content={content} n={n} />,
    });
  }

  if (content.process.length > 0) {
    numbered.push({
      anchor: "process",
      label: "A visit",
      node: (n) => <ProcessTimeline content={content} n={n} />,
    });
  }

  if ((content.pricing?.length ?? 0) > 0) {
    numbered.push({
      anchor: "pricing",
      label: "Pricing",
      node: (n) => <PricingTable content={content} n={n} />,
    });
  }

  if (content.downtime) {
    numbered.push({
      anchor: "downtime",
      label: "Downtime",
      node: (n) => <DowntimeAftercare content={content} n={n} />,
    });
  }

  if (content.beforeAfter !== undefined) {
    numbered.push({
      anchor: "before-after",
      label: "Before & after",
      node: (n) => <BeforeAfter content={content} n={n} />,
    });
  }

  if (content.faqs.length > 0) {
    numbered.push({
      anchor: "faqs",
      label: "FAQs",
      node: (n) => <FAQs content={content} n={n} />,
    });
  }

  if (content.related.length > 0) {
    numbered.push({
      anchor: "pairs",
      label: "Pairs with",
      node: (n) => <Related content={content} n={n} />,
    });
  }

  return numbered;
}

export default function TreatmentDetailLayout({
  content,
}: TreatmentDetailLayoutProps) {
  const numbered = buildSections(content);
  const navItems: NavItem[] = numbered.map(({ anchor, label }) => ({
    anchor,
    label,
  }));

  // Pullquote slots in just after the latest of products / best-for / overview
  // (whichever is present), preserving the design's rhythm of body → quote → process.
  const pullquoteCandidates = ["products", "best-for", "overview"];
  const pullquoteAfterIndex = numbered.reduce(
    (acc, s, i) => (pullquoteCandidates.includes(s.anchor) ? Math.max(acc, i) : acc),
    -1
  );

  return (
    <>
      <Hero content={content} />
      <SectionNav items={navItems} />
      {numbered.map(({ anchor, node }, i) => (
        <Fragment key={anchor}>
          {node((i + 1).toString().padStart(2, "0"))}
          {i === pullquoteAfterIndex && content.pullquote ? (
            <Pullquote content={content} />
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
