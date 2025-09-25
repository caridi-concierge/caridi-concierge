type BlogPostBodyProps = {
  children: React.ReactNode;
};

export default function BlogPostBodySection({ children }: BlogPostBodyProps) {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-12 prose prose-lg prose-headings:font-fraunces prose-p:text-outer-space/80">
      {children}
    </section>
  );
}
