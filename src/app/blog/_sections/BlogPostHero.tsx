import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

type BlogPostHeroProps = {
  title: string;
  author: string;
  date: string;
  updatedDate?: string;
  coverImage: string;
};

export default function BlogPostHeroSection({
  title,
  author,
  date,
  updatedDate,
  coverImage,
}: BlogPostHeroProps) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-16 lg:pt-[80px] pb-12 lg:pb-16">
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
            <li>
              <Link
                href="/blog"
                className="text-ink/55 transition-colors duration-200 hover:text-brass"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/30">
              /
            </li>
            <li className="text-brass" aria-current="page">
              Article
            </li>
          </ol>
        </nav>

        <div className="max-w-[860px] mx-auto text-center">
          <Eyebrow className="text-brass mb-7" withDash>
            {date}
          </Eyebrow>
          <h1 className="font-display font-light text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] tracking-[-0.01em] text-ink text-balance">
            {title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55">
            <span>By {author}</span>
            {updatedDate && (
              <>
                <span aria-hidden="true" className="text-ink/30">
                  ·
                </span>
                <span>Updated {updatedDate}</span>
              </>
            )}
          </div>
        </div>

        {coverImage && (
          <div className="mt-12 lg:mt-16 max-w-[1080px] mx-auto">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-bone">
              <Image
                src={coverImage}
                alt={title}
                fill
                sizes="(min-width: 1280px) 1080px, 100vw"
                className="object-cover"
                style={{ filter: "saturate(0.9)" }}
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
