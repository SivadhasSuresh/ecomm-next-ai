"use client";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  className = "",
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const isDecrementDisabled = quantity <= min;
  const isIncrementDisabled = quantity >= max;

  return (
    <div
      className={`inline-flex items-center justify-between bg-[#F0F0F0] rounded-full ${className}`}
      role="group"
      aria-label="Product quantity selector"
    >
      <button
        type="button"
        className="w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-full disabled:opacity-50"
        onClick={handleDecrease}
        disabled={isDecrementDisabled}
        aria-label="Decrease quantity"
        aria-disabled={isDecrementDisabled}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 8H12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <span
        className="mx-2 text-base font-medium min-w-[20px] text-center"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Quantity: ${quantity}`}
      >
        {quantity}
      </span>

      <button
        type="button"
        className="w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-full disabled:opacity-50"
        onClick={handleIncrease}
        disabled={isIncrementDisabled}
        aria-label="Increase quantity"
        aria-disabled={isIncrementDisabled}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 4V12M4 8H12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
