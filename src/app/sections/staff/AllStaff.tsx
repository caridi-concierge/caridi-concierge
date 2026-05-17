import Link from "next/link";
import Image from "next/image";
import { staff } from "@/lib/constants/staff";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

export default function AllStaffSection() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-16 lg:pt-[80px] pb-16 lg:pb-[100px]">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 font-body text-[10px] font-medium tracking-[0.32em] uppercase">
            <li>
              <Link
                href="/"
                className="text-ink/55 transition-colors duration-200 hover:text-brass"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/30">
              /
            </li>
            <li className="text-brass" aria-current="page">
              Staff
            </li>
          </ol>
        </nav>

        <div className="max-w-[760px] mb-12 lg:mb-16">
          <Eyebrow className="text-brass mb-6" withDash>
            Practitioners
          </Eyebrow>
          <h1 className="font-display font-light text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.015em]">
            Care, performed{" "}
            <em className="not-italic italic font-light text-brass">
              personally.
            </em>
          </h1>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] font-light text-ink/70">
            Every consultation and treatment is performed by Dr. Cristina
            Caridi. As the practice grows, additional practitioners will be
            introduced here.
          </p>
        </div>

        {staff.length === 0 ? (
          <p className="font-body text-[14px] text-ink/55">
            No practitioners listed at this time.
          </p>
        ) : staff.length === 1 ? (
          <div className="max-w-[480px]">
            <StaffCard d={staff[0]} />
          </div>
        ) : (
          <div className="grid gap-px bg-line lg:grid-cols-3">
            {staff.map((d) => (
              <div key={d.slug} className="bg-ivory">
                <StaffCard d={d} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StaffCard({ d }: { d: (typeof staff)[number] }) {
  return (
    <Link
      href={`/staff/${d.slug}`}
      className="group block bg-ivory"
      aria-label={`${d.name} — read biography`}
    >
      <div className="relative aspect-[4/5] w-full bg-bone overflow-hidden">
        <Image
          src={d.img}
          alt={d.imgAlt}
          fill
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ filter: "saturate(0.85) brightness(0.97)" }}
        />
      </div>
      <div className="pt-6 pb-2">
        {d.eyebrow && (
          <Eyebrow className="text-brass mb-3" withDash>
            {d.eyebrow}
          </Eyebrow>
        )}
        <h2 className="font-display font-normal text-[26px] sm:text-[30px] leading-[1.1] text-ink transition-colors duration-200 group-hover:text-brass">
          {d.name}
        </h2>
        {d.subtitle && (
          <p className="mt-2 font-body text-[14px] leading-[1.6] text-ink/70">
            {d.subtitle}
          </p>
        )}
        <span className="mt-5 inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 group-hover:text-brass">
          Read the biography <IconArrow className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
