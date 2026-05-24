import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blogs/posts";
import IconArrow from "@/components/icons/IconArrow";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogIndex() {
  const posts = await getAllPosts();

  // Pad partial rows. With `gap-px` over `bg-line`, empty cells show
  // as a tinted band; fillers match the section bg to read as continuation.
  const len = posts.length;
  const smFillers = (2 - (len % 2)) % 2;
  const lgFillers = (3 - (len % 3)) % 3;
  const fillerCount = Math.max(smFillers, lgFillers);

  return (
    <section className="bg-ivory-2 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px]">
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col bg-ivory-2"
              aria-label={post.title}
            >
              {post.coverImage && (
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-bone">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ filter: "saturate(0.85)" }}
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                <div className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-brass">
                  {formatDate(post.date)}
                </div>
                <h2 className="font-display font-normal text-[22px] sm:text-[24px] leading-[1.15] text-ink transition-colors duration-200 group-hover:text-brass">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="font-body text-[14px] leading-[1.65] text-ink/70 line-clamp-3 flex-1">
                    {post.description}
                  </p>
                )}
                <span className="mt-2 inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 group-hover:text-brass">
                  Read the article <IconArrow className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}

          {Array.from({ length: fillerCount }).map((_, i) => {
            const visibleAtSm = i < smFillers;
            const visibleAtLg = i < lgFillers;
            return (
              <div
                key={`filler-${i}`}
                aria-hidden="true"
                className={[
                  "bg-ivory-2",
                  "hidden",
                  visibleAtSm ? "sm:block" : "sm:hidden",
                  visibleAtLg ? "lg:block" : "lg:hidden",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
