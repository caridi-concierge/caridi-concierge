// src/sections/ProductsSection.tsx
import ProductSection from "@/app/sections/products/ProductLayout";

export default function ProductsSection() {
  return (
    <section className="py-16 bg-merino">
      <h1 className="text-center text-outer-space font-fraunces text-4xl mb-16 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        The Products Behind Our Treatments
      </h1>

      <div className="space-y-20">
        <ProductSection
          sectionTitle="Neuromodulator Toxins"
          ctaHref="/treatments/wrinkle-reduction"
          ctaText="Treatment Options"
          products={[
            {
              title: "Daxxify",
              imgSrc: "/images/daxxify_products_300px.jpg",
              imgAlt: "Daxxify vial",
              description:
                "Daxxify is an advanced neuromodulator designed to smooth fine lines and wrinkles with results that last twice as long as traditional Botox. Powered by peptide technology, Daxxify delivers 6-9 months of wrinkle reduction, making it ideal for those looking for longer-lasting results with fewer appointments.",
              uses: [
                "Soften forehead lines, crow’s feet, and frown lines.",
                "Prevent deeper wrinkles from forming",
                "Maintain a refreshed, youthful appearance",
              ],
            },
            {
              title: "Botox Cosmetic",
              imgSrc: "/images/botox_products_300px.jpg",
              imgAlt: "Botox vial",
              description:
                "Botox Cosmetic is an FDA-approved neuromodulator that temporarily relaxes facial muscles to smooth fine lines and wrinkles. As one of the most trusted and widely used aesthetic treatments, Botox provides natural-looking results by reducing the appearance of dynamic wrinkles caused by repeated facial expressions.",
              uses: [
                "Smooth forehead, brow, and eye wrinkles.",
                "Prevent deeper wrinkles",
                "Soften jawline and slim lower face",
                "Address neck bands and improve overall jawline definition",
                "Provide relief from TMJ and teeth grinding",
              ],
            },
          ]}
        />

        <ProductSection
          sectionTitle="Dermal Fillers"
          ctaHref="/treatments/dermal-fillers"
          ctaText="Treatment Options"
          products={[
            {
              title: "RHA Collection",
              imgSrc: "/images/rha_collection_products_300px.jpg",
              imgAlt: "RHA Collection fillers",
              description:
                "TThe RHA Collection (Resilient Hyaluronic Acid) is the latest innovation in dermal fillers, designed to move naturally with facial expressions. Unlike traditional fillers, RHA is formulated to maintain elasticity, providing a soft, dynamic look that adapts to natural movement. Products include Redensity, RHA2, RHA3, RHA4.",
              uses: [
                "Smooth fine lines around mouth and eyes.",
                "Restore volume to cheeks, lips, and folds.",
                "Maintain natural expression and facial dynamics.",
              ],
            },
            {
              title: "Juvéderm Collection",
              imgSrc: "/images/juvederm_products_300px.png",
              imgAlt: "Juvederm fillers",
              description:
                "The Juvederm Collection is a leading line of hyaluronic acid-based dermal fillers designed to enhance, contour, and restore volume with natural-looking results. Each formulation is tailored for specific areas of the face, from subtle lip enhancement to deep facial contouring.  Products include Juvederm Ultra, Ultra Plus, Voluma, Vollure, Volbella, and Volux.",
              uses: [
                "Enhance lips.",
                "Restore lost colume in the cheeks, temples, and jawline.",
                "Smooth fine and deep wrinkles.",
                "Define and contour the jawline and chin for a sculpted appearance",
                "Hydrate and rejuvenate skin with natural-looking, long-lasting results.",
              ],
            },
          ]}
        />

        <ProductSection
          sectionTitle="Biostimulatory Fillers"
          ctaHref="/treatments/biostimulatory-fillers"
          ctaText="Treatment Options"
          products={[
            {
              title: "Radiesse",
              imgSrc: "/images/radiesse_collection_products_300px.jpg",
              imgAlt: "Radiesse fillers",
              description:
                "Radiesse is a biostimulatory filler that not only restores volume but also stimulates natural collagen production for longer-lasting skin rejuvenation. It is particularly effective for jawline contouring, cheek enhancement, and hand rejuvenation, offering immediate lift while improving skin structure over time. Products include Radiesse, and Radiesse (+).",
              uses: [
                "Sculpt and define the jawline",
                "Restore volume in cheeks, hands, chest, and butt.",
                "Improve skin elasticity with collagen stimulation.",
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
