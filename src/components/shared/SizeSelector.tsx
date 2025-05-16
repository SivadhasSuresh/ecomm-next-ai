"use client";

interface Size {
  id: string;
  name: string;
  label: string;
}

interface SizeSelectorProps {
  sizes: Size[];
  selectedSizeId?: string;
  onSizeChange: (sizeId: string) => void;
  className?: string;
}

export default function SizeSelector({
  sizes,
  selectedSizeId,
  onSizeChange,
  className = "",
}: SizeSelectorProps) {
  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      role="radiogroup"
      aria-label="Product size options"
    >
      {sizes.map((size) => {
        const isSelected = selectedSizeId === size.id;

        return (
          <button
            key={size.id}
            className={`
              px-6 py-2.5 rounded-full text-sm font-medium transition-colors
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
              ${
                isSelected
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-black/60 hover:bg-gray-200"
              }
            `}
            onClick={() => onSizeChange(size.id)}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={`Size ${size.label}`}
          >
            {size.label}
          </button>
        );
      })}
    </div>
  );
}
