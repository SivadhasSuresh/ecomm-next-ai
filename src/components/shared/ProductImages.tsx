"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

interface ProductImagesProps {
  images: ProductImage[];
  className?: string;
}

export default function ProductImages({
  images,
  className = "",
}: ProductImagesProps) {
  const [selectedImageId, setSelectedImageId] = useState(images[0]?.id);

  // Get the selected image based on the ID
  const selectedImage =
    images.find((img) => img.id === selectedImageId) || images[0];

  // Get current image index for accessibility
  const currentIndex =
    images.findIndex((img) => img.id === selectedImageId) + 1;
  const totalImages = images.length;

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 ${className}`}
      role="region"
      aria-label="Product image gallery"
    >
      {/* Desktop: Thumbnails on the left side */}
      <div className="hidden sm:flex flex-col gap-3 order-1">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`
              relative w-20 h-20 border rounded-xl overflow-hidden
              ${
                selectedImageId === image.id
                  ? "border-black"
                  : "border-gray-200"
              }
            `}
            onClick={() => setSelectedImageId(image.id)}
            type="button"
            aria-label={`View ${image.alt}`}
            aria-current={selectedImageId === image.id ? "true" : "false"}
            aria-controls="mainProductImage"
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main product image */}
      <div
        id="mainProductImage"
        className="relative rounded-2xl overflow-hidden aspect-square w-full mb-2 sm:mb-0 sm:order-2 sm:flex-1"
        aria-live="polite"
      >
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
          className="object-cover"
          priority
        />
        <span className="sr-only">
          Image {currentIndex} of {totalImages}: {selectedImage.alt}
        </span>
      </div>

      {/* Mobile: Thumbnails below */}
      <div
        className="flex sm:hidden flex-row gap-3 overflow-x-auto -mx-1 px-1 py-1"
        aria-label="Product thumbnails"
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`
              relative h-16 w-16 flex-shrink-0 border rounded-lg overflow-hidden
              ${
                selectedImageId === image.id
                  ? "border-black"
                  : "border-gray-200"
              }
            `}
            onClick={() => setSelectedImageId(image.id)}
            type="button"
            aria-label={`View ${image.alt}`}
            aria-current={selectedImageId === image.id ? "true" : "false"}
            aria-controls="mainProductImage"
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="64px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
