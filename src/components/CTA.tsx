import PrimaryButton from "@/components/PrimaryButton";
import { ctaVariants } from "@/lib/constants/ctas";
import Container from "@/components/Container";

export type CTASectionProps = {
  title: string;
  subtitle?: string;
  ctaHref: string;
  ctaText: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary" | "light";
  bgColor?: string;
  textColor?: string;
  id?: string;
};

type CTASectionWrapperProps = {
    variantKey?: keyof typeof ctaVariants; // choose from "default" | "consult" | "promo"
    id?: string;
  } & Partial<CTASectionProps>;

export default function CTASection({
  variantKey = "default",
  id = "primary-cta",
  ...overrides
}: CTASectionWrapperProps) {
    const config = { ...ctaVariants[variantKey], ...overrides };
    
    return (
        <section className="bg-merino py-20">
          <Container
            className={`container mx-auto rounded-2xl px-8 py-16 text-center space-y-6 ${config.bgColor}`}
          >
            <h2 className={`font-fraunces text-4xl md:text-6xl ${config.textColor}`}>
              {config.title}
            </h2>
            {config.subtitle && (
              <p
                className={`${config.textColor} opacity-90 text-lg max-w-xl mx-auto leading-relaxed`}
              >
                {config.subtitle}
              </p>
            )}
            <div className="pt-6">
              <PrimaryButton href={config.ctaHref} variant={config.variant} ariaLabel={config.ariaLabel} id={id ?? config.id}>
                {config.ctaText} 
              </PrimaryButton>
            </div>
          </Container>
        </section>
      );
    }