import Image from "next/image";

interface FeatureCardProps {
  title: string;
  subtitle: string;
}

export default function FeatureCard({ title, subtitle }: FeatureCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <Image
          src="/images/CheckIcon.svg"
          alt="Check Icon"
          width={20}
          height={20}
          className="text-outer-space"
        />
        <p className="font-fraunces font-semibold text-lg">{title}</p>
      </div>
      <p className="text-outer-space/80 text-sm">{subtitle}</p>
    </div>
  );
}
