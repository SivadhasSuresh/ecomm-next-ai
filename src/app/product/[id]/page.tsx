import { Metadata } from "next";
import Container from "@/components/shared/Container";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductImages from "@/components/shared/ProductImages";
import Tabs from "@/components/shared/Tabs";
import ReviewItem from "@/components/shared/ReviewItem";
import ProductCard from "@/components/shared/ProductCard";
import ProductDetailsClient from "@/components/shared/ProductDetailsClient";
import BrowseByStyle from "@/components/home/BrowseByStyle";
import { getProductById } from "@/data/products";
import { categories } from "@/data/categories";
import { notFound } from "next/navigation";
import Button from "@/components/shared/Button";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `Product Details - ${product.name}`,
    description: `Explore our stylish ${product.name}, available in various sizes and colors.`,
  };
}

// This is a sample detailed product data - in a real application, this would be fetched from an API or CMS
const productDetails = {
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  totalReviews: 451,
  images: [
    {
      id: "img1",
      src: "/images/products/t-shirt-tape-details.jpg",
      alt: "T-shirt front view",
    },
    {
      id: "img2",
      src: "/images/products/sleeve-striped-t-shirt.jpg",
      alt: "T-shirt side view",
    },
    {
      id: "img3",
      src: "/images/products/courage-graphic-t-shirt.jpg",
      alt: "T-shirt back view",
    },
    {
      id: "img4",
      src: "/images/products/vertical-striped-shirt.jpg",
      alt: "T-shirt detail view",
    },
  ],
  colors: [
    { id: "color1", name: "Sand Brown", value: "#4F4631" },
    { id: "color2", name: "Teal Green", value: "#314F4A" },
    { id: "color3", name: "Navy Blue", value: "#31344F" },
  ],
  sizes: [
    { id: "size1", name: "small", label: "Small" },
    { id: "size2", name: "medium", label: "Medium" },
    { id: "size3", name: "large", label: "Large" },
    { id: "size4", name: "xlarge", label: "X-Large" },
  ],
  reviews: [
    {
      id: "review1",
      authorName: "Samantha D.",
      date: "August 14, 2023",
      rating: 4.5,
      content:
        '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      verified: true,
    },
    {
      id: "review2",
      authorName: "Alex M.",
      date: "August 15, 2023",
      rating: 4.0,
      content:
        '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
      verified: true,
    },
    {
      id: "review3",
      authorName: "Ethan R.",
      date: "August 16, 2023",
      rating: 3.5,
      content:
        '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
      verified: false,
    },
  ],
  relatedProducts: [
    {
      id: "related1",
      name: "Polo with Contrast Trims",
      price: 212,
      originalPrice: 242,
      discountPercentage: 20,
      rating: 4.0,
      imageSrc: "/images/products/sleeve-striped-t-shirt.jpg",
    },
    {
      id: "related2",
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.5,
      imageSrc: "/images/products/courage-graphic-t-shirt.jpg",
    },
    {
      id: "related3",
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      imageSrc: "/images/products/vertical-striped-shirt.jpg",
    },
    {
      id: "related4",
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      discountPercentage: 30,
      rating: 5.0,
      imageSrc: "/images/products/checkered-shirt.jpg",
    },
  ],
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Get the product based on the ID from the URL
  const product = getProductById(params.id);

  // If product doesn't exist, return 404
  if (!product) {
    notFound();
  }

  // Find the category object for this product
  const category = categories.find((c) => c.slug === product.category);

  // Breadcrumbs array
  const breadcrumbs = [{ id: "home", label: "Home", href: "/" }];
  if (category) {
    breadcrumbs.push({
      id: category.slug,
      label: category.name,
      href: `/category/${category.slug}`,
    });
  }

  // Combine base product data with detailed product information
  const fullProductDetails = {
    ...product,
    ...productDetails,
  };

  return (
    <main className="pt-6 pb-20">
      {/* Breadcrumb Navigation */}
      <Container className="mb-6">
        <Breadcrumbs items={breadcrumbs} currentPageLabel={product.name} />
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Product Images - Left Column */}
          <div>
            <ProductImages images={fullProductDetails.images} />
          </div>

          {/* Product Details - Right Column */}
          <ProductDetailsClient
            name={fullProductDetails.name}
            price={fullProductDetails.price}
            originalPrice={fullProductDetails.originalPrice}
            discountPercentage={fullProductDetails.discountPercentage}
            rating={fullProductDetails.rating}
            description={fullProductDetails.description}
            colors={fullProductDetails.colors}
            sizes={fullProductDetails.sizes}
            imageSrc={product.imageSrc}
          />
        </div>

        {/* Product Tabs */}
        <Tabs
          tabs={[
            {
              id: "details",
              label: "Product Details",
              content: (
                <div className="max-w-3xl">
                  <p className="text-gray-600">
                    This graphic t-shirt features a striking design inspired by
                    contemporary art. Made from 100% organic cotton, it&apos;s
                    both sustainable and comfortable for all-day wear.
                  </p>
                  <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
                    <li>100% organic cotton for comfort and breathability</li>
                    <li>Machine washable at 30°C</li>
                    <li>Regular fit, true to size</li>
                    <li>Ribbed crewneck for durability</li>
                    <li>Available in multiple colors and sizes</li>
                  </ul>
                </div>
              ),
            },
            {
              id: "reviews",
              label: "Rating & Reviews",
              content: (
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                      <h3 className="font-bold text-xl">All Reviews</h3>
                      <span className="text-gray-500">
                        ({fullProductDetails.totalReviews})
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        icon={
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        }
                        iconPosition="right"
                      >
                        Latest
                      </Button>

                      <Button size="sm" variant="primary">
                        Write a Review
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fullProductDetails.reviews.map((review) => (
                      <ReviewItem
                        key={review.id}
                        authorName={review.authorName}
                        date={review.date}
                        rating={review.rating}
                        content={review.content}
                        verified={review.verified}
                      />
                    ))}
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              ),
            },
            {
              id: "faqs",
              label: "FAQs",
              content: (
                <div className="max-w-3xl">
                  <h3 className="font-bold text-lg mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">
                        How does the size run for this t-shirt?
                      </h4>
                      <p className="text-gray-600">
                        Our t-shirts are true to size with a regular fit. If you
                        prefer a looser fit, we recommend sizing up.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        What material is this made from?
                      </h4>
                      <p className="text-gray-600">
                        This t-shirt is made from 100% organic cotton, making it
                        soft, breathable, and environmentally friendly.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        How should I care for this t-shirt?
                      </h4>
                      <p className="text-gray-600">
                        For best results, machine wash cold with similar colors,
                        tumble dry low, and remove promptly to minimize
                        wrinkles.
                      </p>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
          defaultTabId="reviews"
        />

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="font-integralCF text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
            You might also like
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {fullProductDetails.relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                id={relatedProduct.id}
                name={relatedProduct.name}
                price={relatedProduct.price}
                originalPrice={relatedProduct.originalPrice}
                discountPercentage={relatedProduct.discountPercentage}
                rating={relatedProduct.rating}
                imageSrc={relatedProduct.imageSrc}
              />
            ))}
          </div>
        </div>

        {/* Style Ideas - Using BrowseByStyle component */}
        <div className="mt-20">
          <BrowseByStyle
            title="Style With"
            useContainer={false}
            bgColor="bg-transparent"
          />
        </div>
      </Container>
    </main>
  );
}
