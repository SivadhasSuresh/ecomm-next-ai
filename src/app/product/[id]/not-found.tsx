import Link from "next/link";
import Container from "@/components/shared/Container";

export default function ProductNotFound() {
  return (
    <Container className="py-20">
      <div className="text-center">
        <h1 className="font-integralCF text-4xl md:text-5xl font-bold mb-6">
          Product Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          We couldn't find the product you're looking for. It might have been
          removed or is temporarily unavailable.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex justify-center items-center px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/shop"
            className="inline-flex justify-center items-center px-8 py-3 border border-black text-black font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </Container>
  );
}
