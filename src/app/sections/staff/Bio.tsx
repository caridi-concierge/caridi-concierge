import Image from "next/image";
import Link from "next/link";
import type { Staff } from "@/model/staff/Staff";
import { COMPANY } from "@/lib/constants/company";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

export default function StaffBioSection({ staff }: { staff: Staff }) {
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
            <li aria-hidden="true" className="text-ink/30">/</li>
            <li>
              <Link
                href="/staff"
                className="text-ink/55 transition-colors duration-200 hover:text-brass"
              >
                Staff
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/30">/</li>
            <li className="text-brass" aria-current="page">
              {staff.name}
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start">
          <div className="w-full">
            <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto lg:ml-0 bg-bone overflow-hidden">
              <Image
                src={staff.img}
                alt={staff.imgAlt}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
                style={{ filter: "saturate(0.85) brightness(0.97)" }}
                priority
              />
            </div>
          </div>

          <div>
            {staff.eyebrow && (
              <Eyebrow className="text-brass mb-6" withDash>
                {staff.eyebrow}
              </Eyebrow>
            )}
            <h1 className="font-display font-light text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.015em] text-ink">
              {staff.name}
            </h1>
            {staff.subtitle && (
              <p className="mt-4 font-body text-[15px] sm:text-[16px] leading-[1.6] text-ink/70">
                {staff.subtitle}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 hover:bg-teal-deep"
              >
                Book a visit <IconArrow />
              </Link>
              <Link
                href={COMPANY.smsHref}
                className="inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-brass transition-colors duration-200 hover:text-ink"
              >
                Or text the practice <IconArrow className="w-3 h-3" />
              </Link>
            </div>

            {staff.email && (
              <p className="mt-5 font-body text-[14px] leading-[1.6] text-ink/55">
                Direct:{" "}
                <a
                  href={`mailto:${staff.email}`}
                  className="text-brass transition-colors duration-200 hover:text-ink"
                >
                  {staff.email}
                </a>
              </p>
            )}

            <div className="mt-10 space-y-5 font-body text-[15px] sm:text-[16px] leading-[1.75] text-ink/70 font-light max-w-[640px]">
              {staff.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
