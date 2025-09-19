import Image from "next/image";
import type { ProductSectionProps } from "@/model/products/Product";
import PrimaryButton from "@/components/PrimaryButton";

export default function ProductLayout({
  sectionTitle,
  ctaHref,
  ctaText,
  products,
}: ProductSectionProps) {
  return (
    <section className="py-16 bg-merino">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <Image
            src="/images/Decor01.svg"
            alt=""
            width={93}
            height={108}
            className="mb-6 h-auto"
          />
          <h2 className="font-fraunces text-3xl md:text-4xl text-outer-space mb-6">
            {sectionTitle}
          </h2>
          <PrimaryButton
            href={ctaHref}
            variant="primary"
            className="text-sm bg-steel-blue"
          >
            {ctaText}
          </PrimaryButton>
        </div>

        {/* Product grid */}
        <div className="space-y-12">
          {products.map((p) => (
            <div key={p.title} className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-20">
              
              {/* Image left */}
              <div className="flex-shrink-0 md:w-72">
              <Image
                src={p.imgSrc}
                alt={p.imgAlt}
                width={300}
                height={300}
                className="rounded-md w-full h-auto object-contain"
              />
              </div>

              {/* Content right */}
              <div className="flex-1 max-w-prose">
                <h3 className="font-fraunces font-bold text-xl text-outer-space mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{p.description}</p>
                <br/>
                <p className="font-bold text-outer-space mb-2">Primary Uses:</p>
                {p.uses.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {p.uses.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              )}
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
}
