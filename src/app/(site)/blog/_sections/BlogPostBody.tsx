type BlogPostBodyProps = {
  children: React.ReactNode;
};

export default function BlogPostBodySection({ children }: BlogPostBodyProps) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[720px] px-6 sm:px-10 lg:px-0 pt-8 pb-20 lg:pb-[120px]">
        {children}
      </div>
    </section>
  );
}
