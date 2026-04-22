import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <div className={`flex items-center ${className}`.trim()}>
      <Image
        src="/brand/simply-social-logo.png"
        alt="Simply Social"
        width={720}
        height={169}
        priority
        className="invert-logo h-6 w-auto sm:h-7"
      />
    </div>
  );
}
