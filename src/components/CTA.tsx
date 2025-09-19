import PrimaryButton from "@/components/PrimaryButton";
import { ctaVariants } from "@/lib/constants/ctas";

export type CTASectionProps = {
  title: string;
  subtitle?: string;
  ctaHref: string;
  ctaText: string;
  variant?: "primary" | "secondary";
  bgColor?: string;
  textColor?: string;
};

type CTASectionWrapperProps = {
    variantKey?: keyof typeof ctaVariants; // choose from "default" | "consult" | "promo"
  } & Partial<CTASectionProps>;

export default function CTASection({
  variantKey = "default",
  ...overrides
}: CTASectionWrapperProps) {
    const config = { ...ctaVariants[variantKey], ...overrides };
    
    return (
        <section className="bg-merino py-20">
          <div
            className={`container mx-auto rounded-2xl px-8 py-16 text-center space-y-6 ${config.bgColor}`}
          >
            <h2 className={`font-fraunces text-4xl md:text-6xl ${config.textColor}`}>
              {config.title}
            </h2>
            {config.subtitle && (
              <p
                className={`${config.textColor}/90 text-lg max-w-xl mx-auto leading-relaxed`}
              >
                {config.subtitle}
              </p>
            )}
            <div className="pt-6">
              <PrimaryButton href={config.ctaHref} variant={config.variant}>
                {config.ctaText}
              </PrimaryButton>
            </div>
          </div>
        </section>
      );
    }