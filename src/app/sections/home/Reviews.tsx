import Script from "next/script";
import { reviews } from "@/content/reviews/reviews";
import StarRating from "@/components/StarRating";
import Container from "@/components/Container";

export default function ReviewsSection() {
  return (
    <section className="bg-merino py-20">
      <Container className="container mx-auto text-center space-y-8">
        <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-outer-space">
          Client Testimonials
        </h2>
        <p className="text-outer-space/80 max-w-2xl mx-auto">
          See what clients are saying about their Caridi Concierge experience.
          Honest reviews, delivered directly from Google.
        </p>

        {/* Elfsight widget container */}
        <div
          className="elfsight-app-3fe1624d-4cd9-42cf-8aff-8bf26ffcd1c7 w-full min-h-[500px]"
          data-elfsight-app-lazy
        ></div>

        {/* Static fallback reviews (hidden if widget loads) */}
        <div
          id="reviews-fallback"
          className="grid gap-6 md:grid-cols-3 text-left max-w-5xl mx-auto"
        >
          {reviews.map((review, i) => (
            <blockquote
              key={i}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col justify-between"
            >
              <div className="mb-4">
                <StarRating />
                <p className="text-outer-space/80 italic">“{review.text}”</p>
              </div>
              <footer className="mt-4 text-sm font-semibold text-outer-space">
                – {review.author}
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Load Elfsight script lazily */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
          id="elfsight-platform"
        />
      </Container>
    </section>
  );
}
