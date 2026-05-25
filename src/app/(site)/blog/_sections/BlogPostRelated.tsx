import Link from "next/link";
import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";
import type { BlogPostMeta } from "@/lib/blogs/posts";
import type { TreatmentDetailContent } from "@/content/treatments/types";

type Props = {
  treatment?: TreatmentDetailContent;
  posts: BlogPostMeta[];
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostRelated({ treatment, posts }: Props) {
  const hasTreatment = Boolean(treatment);
  const hasPosts = posts.length > 0;

  if (!hasTreatment && !hasPosts) return null;

  return (
    <section
      aria-labelledby="further-reading"
      className="bg-ivory-2 border-t border-line"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[100px]">
        <header className="mb-10 lg:mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-[760px]">
            <Eyebrow className="text-brass mb-5" withDash>
              Further reading
            </Eyebrow>
            <h2
              id="further-reading"
              className="font-display font-light text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink"
            >
              One thing to do next,{" "}
              <em className="not-italic italic font-light text-brass">
                three to read.
              </em>
            </h2>
          </div>
          <div className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55">
            {hasTreatment && hasPosts
              ? "01 treatment · 03 entries"
              : hasTreatment
                ? "01 treatment"
                : `0${Math.min(posts.length, 3)} entries`}
          </div>
        </header>

        <div
          className={`grid gap-10 lg:gap-14 items-stretch ${
            hasTreatment && hasPosts
              ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
              : ""
          }`}
        >
          {hasTreatment && treatment && (
            <Link
              href={`/treatments/${treatment.slug}`}
              className="group flex flex-col bg-teal text-ivory transition-colors duration-200 hover:bg-teal-deep"
              aria-label={`Open the ${treatment.title} treatment page`}
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-teal-deep">
                <Image
                  src={treatment.heroImage.src}
                  alt={treatment.heroImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-9 sm:p-10">
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <Eyebrow className="text-brass-soft" withDash>
                    From this guide · Treatment
                  </Eyebrow>
                  {treatment.category && (
                    <span className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ivory/55">
                      {treatment.category}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-light text-[28px] sm:text-[34px] lg:text-[36px] leading-[1.1] tracking-[-0.005em] text-ivory">
                  Read more on{" "}
                  <em className="not-italic italic font-light text-brass-soft">
                    {treatment.title.toLowerCase()}.
                  </em>
                </h3>
                <p className="mt-5 max-w-[460px] font-body text-[14.5px] leading-[1.75] text-ivory/80 font-light">
                  {treatment.lede}
                </p>
                <div className="mt-auto pt-8 flex items-center justify-between border-t border-[rgba(253,252,248,0.18)]">
                  <span className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ivory">
                    Open the treatment page
                  </span>
                  <IconArrow className="w-3.5 h-3.5 text-brass-soft" />
                </div>
              </div>
            </Link>
          )}

          {hasPosts && (
            <div className="flex flex-col">
              <Eyebrow
                className="text-brass mb-1 pb-3.5 border-b border-line-strong"
                withDash
              >
                Also from the journal
              </Eyebrow>
              <ul className="m-0 list-none p-0">
                {posts.map((post, i) => (
                  <li
                    key={post.slug}
                    className={i === posts.length - 1 ? "" : "border-b border-line"}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid gap-5 items-center py-6"
                      style={{ gridTemplateColumns: "120px 1fr auto" }}
                    >
                      {post.coverImage ? (
                        <div className="relative aspect-square w-[120px] overflow-hidden bg-bone">
                          <Image
                            src={post.coverImage}
                            alt=""
                            fill
                            sizes="120px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            style={{ filter: "saturate(0.85)" }}
                          />
                        </div>
                      ) : (
                        <div aria-hidden="true" />
                      )}
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap gap-x-3 gap-y-1 font-body text-[10px] font-medium tracking-[0.32em] uppercase">
                          {post.category && (
                            <span className="text-brass">{post.category}</span>
                          )}
                          {post.category && (
                            <span className="text-ink/30" aria-hidden="true">
                              ·
                            </span>
                          )}
                          <time
                            dateTime={post.date}
                            className="text-ink/55"
                          >
                            {formatDate(post.date)}
                          </time>
                        </div>
                        <h3 className="font-display font-normal text-[20px] sm:text-[22px] leading-[1.2] tracking-[-0.005em] text-ink transition-colors duration-200 group-hover:text-brass">
                          {post.title}
                        </h3>
                        {post.description && (
                          <p className="mt-2 max-w-[520px] font-body text-[13.5px] leading-[1.6] text-ink/70 line-clamp-2">
                            {post.description}
                          </p>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55 transition-colors duration-200 group-hover:text-brass">
                        Read <IconArrow className="w-3 h-3" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/blog"
                className="mt-7 inline-flex self-start items-center gap-2.5 pb-1 border-b border-ink font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass hover:border-brass"
              >
                Browse all entries <IconArrow className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
