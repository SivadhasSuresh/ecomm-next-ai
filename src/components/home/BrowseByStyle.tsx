import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

interface StyleCategory {
  id: string;
  name: string;
  imageSrc: string;
}

export const styleCategories: StyleCategory[] = [
  {
    id: "casual",
    name: "Casual",
    imageSrc: "/images/styles/casual.jpg",
  },
  {
    id: "formal",
    name: "Formal",
    imageSrc: "/images/styles/formal.jpg",
  },
  {
    id: "party",
    name: "Party",
    imageSrc: "/images/styles/party.jpg",
  },
  {
    id: "gym",
    name: "Gym",
    imageSrc: "/images/styles/gym.jpg",
  },
];

interface BrowseByStyleProps {
  title?: string;
  className?: string;
  bgColor?: string;
  useContainer?: boolean;
  categories?: StyleCategory[];
}

export default function BrowseByStyle({
  title = "BROWSE BY dress STYLE",
  className = "",
  bgColor = "bg-[#F0F0F0]",
  useContainer = true,
  categories = styleCategories,
}: BrowseByStyleProps) {
  const content = (
    <>
      {title && (
        <SectionHeading
          title={title}
          centered={true}
          className="mb-8 md:mb-12"
        />
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            aria-label={`Browse ${category.name} style`}
          >
            <div className="relative aspect-square">
              <Image
                src={category.imageSrc}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl md:text-2xl text-[#3E3E3E]">
                {category.name}
              </h3>
              <p className="text-[#797979] text-sm mt-1">
                Explore {category.name.toLowerCase()} collection
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  // With container (full width section)
  if (useContainer) {
    return (
      <section className={`w-full py-10 md:py-16 ${bgColor} ${className}`}>
        <div className="max-w-screen-2xl mx-auto px-4 md:px-16">{content}</div>
      </section>
    );
  }

  // Without container (for embedding in existing containers)
  return <div className={className}>{content}</div>;
}
