interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PriceDisplay({
  price,
  originalPrice,
  discountPercentage,
  size = "md",
  className = "",
}: PriceDisplayProps) {
  // Text sizes based on the size prop
  const sizeClasses = {
    sm: {
      current: "text-base font-bold",
      original: "text-sm",
      discount: "text-xs px-2 py-0.5",
    },
    md: {
      current: "text-xl md:text-2xl font-bold",
      original: "text-base md:text-lg",
      discount: "text-xs px-2 py-1",
    },
    lg: {
      current: "text-2xl md:text-3xl font-bold",
      original: "text-lg md:text-xl",
      discount: "text-sm px-3 py-1",
    },
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Current price */}
      <span className={sizeClasses[size].current}>${price.toFixed(2)}</span>

      {/* Original price (if provided) */}
      {originalPrice && (
        <span
          className={`text-gray-400 line-through ${sizeClasses[size].original}`}
        >
          ${originalPrice.toFixed(2)}
        </span>
      )}

      {/* Discount badge (if provided) */}
      {discountPercentage && (
        <span
          className={`bg-red-50 text-red-500 rounded-full ${sizeClasses[size].discount}`}
        >
          -{discountPercentage}%
        </span>
      )}
    </div>
  );
}
