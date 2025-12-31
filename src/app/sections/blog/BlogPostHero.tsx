import Image from "next/image";
import Link from "next/link";

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
    <section
      className="relative h-[50vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container mx-auto max-w-3xl px-6 text-white">
        <Link
          href="/blog"
          className="inline-flex items-center mb-4 text-sm hover:underline"
        >
          <Image
            src="/images/arrow-left.svg"
            alt="Back"
            width={16}
            height={16}
            className="mr-2"
          />
          Back
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-200">
          <span>{author}</span>
          <span className="mt-1 md:mt-0">Published: {date}</span>
          {updatedDate && <span className="mt-1 md:mt-0">Updated: {updatedDate}</span>}
        </div>
      </div>
    </section>
  );
}
