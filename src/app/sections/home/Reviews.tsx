"use client";

import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    // Inject Elfsight script only once
    if (!document.querySelector("#elfsight-platform")) {
      const script = document.createElement("script");
      script.id = "elfsight-platform";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-merino py-20">
      <div className="container mx-auto text-center space-y-8">
        <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-outer-space">
          Client Testimonials
        </h2>
        <p className="text-outer-space/80 max-w-2xl mx-auto">
          See what clients are saying about their Caridi Concierge experience.
          Honest reviews, delivered directly from Google.
        </p>

        <div
          className="elfsight-app-3fe1624d-4cd9-42cf-8aff-8bf26ffcd1c7 w-full"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}



// elfsight-app-3fe1624d-4cd9-42cf-8aff-8bf26ffcd1c7