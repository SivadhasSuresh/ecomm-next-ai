import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductCard from "@/components/shared/ProductCard";
import CategoryFilter from "@/components/category/CategoryFilter";
import SortSelector from "@/components/category/SortSelector";
import MobileFilter from "@/components/category/MobileFilter";
import Pagination from "@/components/category/Pagination";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) {
    return {
      title: `Category Not Found - SHOP.CO`,
      description: `The requested category could not be found.`,
    };
  }
  return {
    title: `${category.name} - SHOP.CO`,
    description: `Browse our collection of ${category.name}. Find the perfect style for any occasion.`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Find the category by slug
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) {
    notFound();
  }

  // Filter products by category
  const categoryProducts = products.filter(
    (product) => product.category === category.slug
  );

  // If no products are found for the category, return 404
  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <main className="pt-4 pb-20">
      {/* Breadcrumb Navigation */}
      <Container className="mb-4">
        <Breadcrumbs
          items={[{ id: "home", label: "Home", href: "/" }]}
          currentPageLabel={category.name}
        />
      </Container>

      <Container>
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{category.name}</h1>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Desktop Filters - Left Sidebar */}
          <div className="hidden md:block w-full md:w-72 shrink-0">
            <CategoryFilter />
          </div>

          {/* Product Grid - Right Content */}
          <div className="flex-1">
            {/* Product Count and Sort */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <p className="text-gray-600 mb-4 md:mb-0">
                Showing 1-{categoryProducts.length} of {categoryProducts.length}{" "}
                Products
              </p>

              {/* Sort Selector */}
              <SortSelector />

              {/* Mobile Filter Button */}
              <div className="md:hidden mt-4 w-full">
                <MobileFilter />
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {categoryProducts.map((product) => (
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

            {/* Pagination */}
            {categoryProducts.length > 0 && (
              <div className="mt-12">
                <Pagination />
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
