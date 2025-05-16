import Banner from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import BrowseByStyle from "@/components/home/BrowseByStyle";
import Newsletter from "@/components/home/Newsletter";
import ProductGrid from "@/components/home/ProductGrid";
import Testimonials from "@/components/home/Testimonials";
import { getNewArrivals, getTopSelling } from "@/data/products";

export default function Homepage2() {
  const newArrivals = getNewArrivals();
  const topSelling = getTopSelling();
  return (
    <div className="bg-white">
      {/* Randomized layout order compared to homepage1 */}

      <Testimonials />
      <ProductGrid
        title="New Arrivals"
        products={newArrivals}
        viewAllLink="/new-arrivals"
      />
      <Banner />
      <BrowseByStyle />
      <Brands />
      <Newsletter />
      <ProductGrid
        title="Top Selling"
        products={topSelling}
        viewAllLink="/top-selling"
      />
    </div>
  );
}
