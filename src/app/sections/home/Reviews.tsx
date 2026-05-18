import Script from "next/script";
import { reviews } from "@/content/reviews/reviews";
import Eyebrow from "@/components/Eyebrow";
import Star from "@/components/icons/Star";

export default function ReviewsSection() {
  const featured = reviews[0];

  return (
    <section className="bg-ivory-2 text-ink">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[120px]">
        {/* Editorial pull-quote */}
        <div className="text-center max-w-[880px] mx-auto">
          <div className="mb-8 flex items-center justify-center gap-2.5 text-brass">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3" />
            ))}
            <Eyebrow as="span" className="text-brass ml-2">
              Reviewed by clients
            </Eyebrow>
          </div>
          <blockquote className="font-display font-light italic text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.25] text-balance">
            &ldquo;{featured.text}&rdquo;
          </blockquote>
          <Eyebrow className="text-ink/70 mt-10">
            — {featured.author}
          </Eyebrow>
        </div>

        {/* Live Google reviews via Elfsight */}
        <div className="mt-20 lg:mt-24 pt-12 border-t border-line">
          <div className="text-center max-w-[760px] mx-auto mb-10 lg:mb-12">
            <Eyebrow withDash className="text-brass mb-5">
              In their own words
            </Eyebrow>
            <h2 className="font-display font-light text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.01em] text-ink">
              Client{" "}
              <em className="not-italic italic font-light text-brass">
                Testimonials.
              </em>
            </h2>
            <p className="mt-5 font-body text-[14px] sm:text-[15px] leading-[1.7] text-ink/70">
              Reviews from clients of the practice, verified on Google.
            </p>
          </div>
          <div
            className="elfsight-app-3fe1624d-4cd9-42cf-8aff-8bf26ffcd1c7 w-full min-h-[500px]"
            data-elfsight-app-lazy
          ></div>

          {/* Static fallback reviews (hidden if Elfsight loads) */}
          <div
            id="reviews-fallback"
            className="grid gap-6 md:grid-cols-3 text-left max-w-5xl mx-auto"
          >
            {reviews.slice(1, 4).map((review, i) => (
              <blockquote
                key={i}
                className="border-t border-line pt-6 flex flex-col gap-4"
              >
                <div className="flex gap-1 text-brass">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3 h-3" />
                  ))}
                </div>
                <p className="font-body text-[15px] leading-[1.7] text-ink/80">
                  &ldquo;{review.text}&rdquo;
                </p>
                <Eyebrow className="text-ink/55">— {review.author}</Eyebrow>
              </blockquote>
            ))}
          </div>
        </div>

        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
          id="elfsight-platform"
        />
      </div>
    </section>
  );
}
