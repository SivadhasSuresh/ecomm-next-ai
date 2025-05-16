import Link from "next/link";

interface SectionHeadingProps {
  title: string;
  viewAllLink?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  viewAllLink,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex ${
        centered ? "justify-center" : "justify-between"
      } items-center w-full mb-6 md:mb-10 ${className}`}
    >
      <h2
        className={`font-integralCF font-bold text-2xl md:text-3xl lg:text-4xl uppercase ${
          centered ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>

      {viewAllLink && !centered && (
        <Link
          href={viewAllLink}
          className="border border-gray-200 rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
        >
          View All
        </Link>
      )}
    </div>
  );
}
