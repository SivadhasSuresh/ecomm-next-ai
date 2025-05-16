"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  imageSrc: string;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  discountPercentage,
  rating,
  imageSrc,
}: ProductCardProps) {
  return (
    <article className="group">
      <Link
        href={`/product/${id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-xl"
        aria-labelledby={`product-${id}-name product-${id}-price`}
      >
        {/* Product Image Container */}
        <div className="bg-[#F0EEED] rounded-2xl mb-3 overflow-hidden">
          <div className="relative w-full aspect-[3/4] transition-transform duration-300 group-hover:scale-105">
            <Image
              src={imageSrc}
              alt={`Product image of ${name}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-1">
          {/* Name */}
          <h3
            id={`product-${id}-name`}
            className="font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight"
          >
            {name}
          </h3>

          {/* Rating */}
          <div
            className="flex items-center gap-2"
            aria-label={`Rated ${rating.toFixed(1)} out of 5 stars`}
          >
            <div className="flex" role="img" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={i < Math.floor(rating) ? "#FFC633" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 md:w-4 md:h-4"
                  >
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      stroke={i < Math.floor(rating) ? "" : "#FFC633"}
                      strokeWidth="1"
                    />
                  </svg>
                </span>
              ))}
            </div>
            <span className="text-xs md:text-sm text-black">
              {rating.toFixed(1)}/5
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span
              id={`product-${id}-price`}
              className="font-bold text-base md:text-lg lg:text-xl"
            >
              ${price.toFixed(2)}
            </span>

            {originalPrice && (
              <span
                className="text-gray-400 text-sm md:text-base line-through"
                aria-label={`Original price: $${originalPrice.toFixed(2)}`}
              >
                ${originalPrice.toFixed(2)}
              </span>
            )}

            {discountPercentage && (
              <span
                className="bg-red-50 text-red-500 text-xs px-2 py-1 rounded-full"
                aria-label={`${discountPercentage}% discount`}
              >
                -{discountPercentage}%
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
