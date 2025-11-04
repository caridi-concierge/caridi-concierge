import { getAllPosts } from "@/lib/blogs/posts";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/metadata";
import Container from "@/components/Container";

export const metadata = createPageMetadata({
    title: "Aesthetic Insights | Caridi Concierge Blog",
    description: "Stay informed with expert tips on wrinkle reduction and fillers. The Caridi Concierge blog keeps you up to date on the latest in aesthetics.",
    path: "/blog",
    keywords: ["Caridi Concierge", "Aesthetic Insights", "Aesthetic Treatments", "Guides","Dermal Fillers", "Botox", "Brooklyn", "New York City"],
    noIndex: false
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div>
        <Navbar />
      {/* Intro section */}
      <section className="bg-merino py-16">
        <Container className="container mx-auto">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-fraunces text-outer-space">
              Aesthetic Insights &amp; Treatment Guides
            </h1>
            <p className="text-lg text-outer-space/80 leading-relaxed">
              At Caridi Concierge, we believe education is part of every
              treatment. Our blog shares expert guidance from Dr. Cristina
              Caridi on wrinkle reduction, dermal fillers, and personalized
              in-home aesthetic care. Explore tips, treatment guides, and the
              science behind natural, lasting results.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog grid */}
      <section className="container mx-auto px-6 py-20">
        <Container className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
              >
                {/* Thumbnail */}
                {post.coverImage && (
                  <Link href={`/blog/${post.slug}`} className="block group overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={800}
                    height={500}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                )}

                {/* Post details */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="text-xs uppercase tracking-wide text-gray-500">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="block mt-4 text-lg font-semibold text-outer-space hover:underline"
                  >
                    {post.title}
                  </Link>

                  <div className="mt-auto pt-4">
                  <Link
                      href={`/blog/${post.slug}`}
                      className="relative inline-block text-outer-space font-medium group"
                  >
                    Read More
                    <span
                      className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-outer-space scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
