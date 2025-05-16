"use client";

import StarRating from "@/components/shared/StarRating";
import PriceDisplay from "@/components/shared/PriceDisplay";
import ColorSelector from "@/components/shared/ColorSelector";
import SizeSelector from "@/components/shared/SizeSelector";
import QuantitySelector from "@/components/shared/QuantitySelector";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductDetailsClientProps {
  name: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  description: string;
  colors: Array<{ id: string; name: string; value: string }>;
  sizes: Array<{ id: string; name: string; label: string }>;
  imageSrc: string;
}

export default function ProductDetailsClient({
  name,
  price,
  originalPrice,
  discountPercentage,
  rating,
  description,
  colors,
  sizes,
  imageSrc,
}: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColorId, setSelectedColorId] = useState(colors[0].id);
  const [selectedSizeId, setSelectedSizeId] = useState(sizes[2].id);
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const selectedColor = colors.find((color) => color.id === selectedColorId);
    const selectedSize = sizes.find((size) => size.id === selectedSizeId);

    if (selectedColor && selectedSize) {
      addItem({
        id: `product-${selectedColorId}-${selectedSizeId}`,
        name,
        price,
        image: imageSrc,
        color: selectedColor.name,
        size: selectedSize.name,
        quantity,
      });

      // Show added to cart feedback
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Product Title and Badges */}
      <div className="mb-4 flex items-center gap-3">
        <h1 className="font-integralCF text-2xl md:text-3xl lg:text-4xl font-bold">
          {name}
        </h1>

        {discountPercentage && (
          <Badge variant="discount">-{discountPercentage}%</Badge>
        )}
      </div>

      {/* Brand Logo */}
      <div className="mb-4">
        <img
          src="/images/brands/calvin-klein.svg"
          alt="Calvin Klein Logo"
          className="h-6 md:h-7"
        />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>

      {/* Price */}
      <div className="mb-6">
        <PriceDisplay price={price} originalPrice={originalPrice} size="lg" />
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">{description}</p>

      {/* Color Selection */}
      <div className="mb-6">
        <h3 className="text-gray-600 mb-3">Select Colors</h3>
        <ColorSelector
          colors={colors}
          selectedColorId={selectedColorId}
          onColorChange={setSelectedColorId}
        />
      </div>

      {/* Size Selection */}
      <div className="mb-8">
        <h3 className="text-gray-600 mb-3">Choose Size</h3>
        <SizeSelector
          sizes={sizes}
          selectedSizeId={selectedSizeId}
          onSizeChange={setSelectedSizeId}
        />
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

        <Button
          fullWidth
          icon={
            <img src="/icons/cart-icon.svg" alt="Cart" width={20} height={20} />
          }
          onClick={handleAddToCart}
        >
          {isAdded ? "Added to Cart!" : "Add to Cart"}
        </Button>
      </div>

      {/* Payment Methods */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-500">Secure Payment Options:</span>
        <div className="flex gap-3">
          <img src="/images/payment/visa.svg" alt="Visa" className="h-6" />
          <img
            src="/images/payment/mastercard.svg"
            alt="Mastercard"
            className="h-6"
          />
          <img src="/images/payment/paypal.svg" alt="PayPal" className="h-6" />
          <img
            src="/images/payment/apple-pay.svg"
            alt="Apple Pay"
            className="h-6"
          />
          <img
            src="/images/payment/google-pay.svg"
            alt="Google Pay"
            className="h-6"
          />
        </div>
      </div>
    </div>
  );
}
