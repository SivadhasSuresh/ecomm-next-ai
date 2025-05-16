"use client";

interface Color {
  id: string;
  name: string;
  value: string;
}

interface ColorSelectorProps {
  colors: Color[];
  selectedColorId?: string;
  onColorChange: (colorId: string) => void;
  className?: string;
}

export default function ColorSelector({
  colors,
  selectedColorId,
  onColorChange,
  className = "",
}: ColorSelectorProps) {
  return (
    <div
      className={`flex items-center gap-4 ${className}`}
      role="radiogroup"
      aria-label="Product color options"
    >
      {colors.map((color) => {
        const isSelected = selectedColorId === color.id;
        return (
          <button
            key={color.id}
            className={`relative w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all ${
              isSelected ? "ring-2 ring-offset-2 ring-black" : ""
            }`}
            style={{ backgroundColor: color.value }}
            onClick={() => onColorChange(color.id)}
            title={color.name}
            aria-label={`Select ${color.name} color`}
            aria-checked={isSelected}
            role="radio"
            type="button"
          >
            {isSelected && (
              <span
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-md"
                >
                  <path
                    d="M4.5 8.25L2.25 6M2.25 6L4.5 3.75M2.25 6H9.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
