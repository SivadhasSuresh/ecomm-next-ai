import ProductCard from "@/components/shared/ProductCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { Product } from "@/data/products";

interface ProductGridProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
  centered?: boolean;
}

export default function ProductGrid({
  title,
  products,
  viewAllLink,
  centered = false,
}: ProductGridProps) {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        <SectionHeading
          title={title}
          viewAllLink={viewAllLink}
          centered={centered}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
