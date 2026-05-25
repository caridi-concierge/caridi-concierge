import { describe, expect, it } from "vitest";
import { COMPANY } from "@/lib/constants/company";
import { createPageMetadata } from "@/lib/metadata";

describe("createPageMetadata", () => {
  it("builds an absolute canonical URL from the path", () => {
    const meta = createPageMetadata({
      title: "About",
      description: "About the practice.",
      path: "/about",
    });

    expect(meta.alternates?.canonical).toBe(`${COMPANY.url}/about`);
  });

  it("absolutizes a relative image but leaves an absolute one untouched", () => {
    const relative = createPageMetadata({
      title: "T",
      description: "D",
      path: "/",
      image: "/images/x.webp",
    });
    const absolute = createPageMetadata({
      title: "T",
      description: "D",
      path: "/",
      image: "https://cdn.example.com/x.webp",
    });

    expect(absolute.openGraph?.images).toEqual([
      { url: "https://cdn.example.com/x.webp", alt: expect.any(String) },
    ]);
    // Relative paths are prefixed with the site origin.
    const ogImages = relative.openGraph?.images as Array<{ url: string }>;
    expect(ogImages[0].url).toBe(`${COMPANY.url}/images/x.webp`);
  });

  it("omits keywords when none are provided and includes them otherwise", () => {
    const without = createPageMetadata({ title: "T", description: "D", path: "/" });
    const withKeywords = createPageMetadata({
      title: "T",
      description: "D",
      path: "/",
      keywords: ["botox nyc"],
    });

    expect(without.keywords).toBeUndefined();
    expect(withKeywords.keywords).toEqual(["botox nyc"]);
  });

  it("emits noindex robots only when noIndex is set", () => {
    const indexed = createPageMetadata({ title: "T", description: "D", path: "/" });
    const hidden = createPageMetadata({
      title: "T",
      description: "D",
      path: "/private",
      noIndex: true,
    });

    expect(indexed.robots).toBeUndefined();
    expect(hidden.robots).toEqual({ index: false, follow: false });
  });
});
