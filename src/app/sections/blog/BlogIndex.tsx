import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blogs/posts";
import Container from "@/components/Container";

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                width={800}
                height={500}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {post.author} · {new Date(post.date).toLocaleDateString("en-US", { timeZone: "UTC" })}
              </p>
              <p className="text-gray-700 line-clamp-3">{post.description}</p>
            </div>
          </Link>
        ))}
      </Container>
    </section>
  );
}
