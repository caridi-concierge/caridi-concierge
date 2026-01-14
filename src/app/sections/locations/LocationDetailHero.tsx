// app/sections/locations/LocationDetailHero.tsx
import PrimaryButton from "@/components/PrimaryButton";
import type { Location } from "@/lib/constants/locations";
import Image from "next/image";
import Link from "next/link";

export default function LocationDetailHero({ loc }: { loc: Location }) {
  return (
    <section className="py-16 md:py-20 bg-merino">
      <div className="max-w-7xl mx-auto px-6">
        {/* Card container with rounded edges and minimum height */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg min-h-[600px] lg:min-h-[500px]">
          <div className="grid lg:grid-cols-2 h-full">
            {/* Image Column - Left Half */}
            <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[500px] relative">
              <Image
                src={loc.heroImage?.src || "/images/home-banner-edit.webp"}
                alt={loc.heroImage?.alt || loc.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Column - Right Half */}
            <div className="p-8 lg:p-12 flex flex-col justify-center min-h-[400px] lg:min-h-[500px]">
              {/* Breadcrumbs */}
              <div className="text-sm text-outer-space/60 mb-4">
                <Link href="/locations" className="hover:text-outer-space">All Locations</Link>
                <span className="mx-2">/</span>
                <span>NY</span>
                <span className="mx-2">/</span>
                <span>{loc.name}</span>
              </div>

              {/* Title */}
              <h1 className="font-fraunces text-4xl md:text-5xl text-outer-space mb-8">
                {loc.name}
              </h1>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {/* Address */}
                {loc.address.complete && (
                  <div className="flex items-start gap-3">
                    <svg width="12" height="17" viewBox="0 0 12 17" fill="none" className="mt-1 flex-shrink-0">
                      <path d="M6 0.289062C2.904 0.289062 0.400002 2.79306 0.400002 5.88906C0.400002 7.28106 0.800001 8.58506 1.528 9.76106C2.288 10.9931 3.288 12.0491 4.056 13.2811C4.432 13.8811 4.704 14.4411 4.992 15.0891C5.2 15.5291 5.368 16.2891 6 16.2891C6.632 16.2891 6.8 15.5291 7 15.0891C7.296 14.4411 7.56 13.8811 7.936 13.2811C8.704 12.0571 9.704 11.0011 10.464 9.76106C11.2 8.58506 11.6 7.28106 11.6 5.88906C11.6 2.79306 9.096 0.289062 6 0.289062ZM6 8.08906C4.896 8.08906 4 7.19306 4 6.08906C4 4.98506 4.896 4.08906 6 4.08906C7.104 4.08906 8 4.98506 8 6.08906C8 7.19306 7.104 8.08906 6 8.08906Z" fill="currentColor"/>
                    </svg>
                    <span className="text-outer-space/80">
                      {loc.ctaSecondaryHref ? (
                        <a href={loc.ctaSecondaryHref} className="hover:text-outer-space" target="_blank" rel="noopener noreferrer">
                          {loc.address.complete}
                        </a>
                      ) : (
                        loc.address.complete
                      )}
                    </span>
                  </div>
                )}

                {/* Phone */}
                {loc.phoneDisplay && (
                  <div className="flex items-center gap-3">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" className="flex-shrink-0">
                      <path d="M2.81556 6.34795C3.93556 8.54906 5.74 10.3457 7.94111 11.4735L9.65222 9.7624C9.86222 9.5524 10.1733 9.4824 10.4456 9.57573C11.3167 9.86351 12.2578 10.0191 13.2222 10.0191C13.65 10.0191 14 10.3691 14 10.7968V13.5113C14 13.9391 13.65 14.2891 13.2222 14.2891C5.91889 14.2891 0 8.37017 0 1.06684C0 0.639062 0.35 0.289062 0.777778 0.289062H3.5C3.92778 0.289062 4.27778 0.639062 4.27778 1.06684C4.27778 2.03906 4.43333 2.9724 4.72111 3.84351C4.80667 4.11573 4.74444 4.41906 4.52667 4.63684L2.81556 6.34795Z" fill="currentColor"/>
                    </svg>
                    <span className="text-outer-space/80">
                      <a href={loc.phoneHref} className="hover:text-outer-space">
                        {loc.phoneDisplay}
                      </a>
                    </span>
                  </div>
                )}

                {/* Email */}
                {loc.email && (
                  <div className="flex items-center gap-3">
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" className="flex-shrink-0">
                      <path d="M14 0.289062H2C1.175 0.289062 0.5075 0.964062 0.5075 1.78906L0.5 10.7891C0.5 11.6141 1.175 12.2891 2 12.2891H14C14.825 12.2891 15.5 11.6141 15.5 10.7891V1.78906C15.5 0.964062 14.825 0.289062 14 0.289062ZM14 10.7891H2V3.28906L8 7.03906L14 3.28906V10.7891ZM8 5.53906L2 1.78906H14L8 5.53906Z" fill="currentColor"/>
                    </svg>
                    <span className="text-outer-space/80">
                      <a href={loc.emailHref} className="hover:text-outer-space">
                        {loc.email}
                      </a>
                    </span>
                  </div>
                )}

                {/* Hours */}
                {loc.hours?.length && (
                  <div className="flex items-start gap-3">
                    <svg width="14" height="14" viewBox="0 0 13.4 13.4" fill="none" className="mt-1 flex-shrink-0">
                      <path d="M6.7,0C3,0,0,3,0,6.7c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7C13.3,3,10.3,0,6.7,0z M6.7,12c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3C12,9.6,9.6,12,6.7,12z" fill="currentColor"/>
                      <path d="M7,3.3H6v4l3.5,2.1L10,8.6L7,6.8V3.3z" fill="currentColor"/>
                    </svg>
                    <div className="text-outer-space/80">
                      {loc.hours.map((hour, index) => (
                        <div key={index}>
                          <span className="font-medium">{hour.label}: </span>
                          <span>{hour.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {loc.ctaPrimaryLabel && (
                  <PrimaryButton
                    href={loc.ctaPrimaryHref}
                    variant="primary"
                  >
                    {loc.ctaPrimaryLabel}
                  </PrimaryButton>
                )}
                
                {loc.ctaSecondaryLabel && loc.ctaSecondaryHref && (
                  <PrimaryButton
                    href={loc.ctaSecondaryHref}
                    variant="light"
                  >
                    {loc.ctaSecondaryLabel}
                  </PrimaryButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}