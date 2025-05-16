"use client";

import Image from "next/image";
import { useState } from "react";

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  id,
  name,
  price,
  image,
  size,
  color,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  // Local state for handling optimistic UI updates
  const [localQuantity, setLocalQuantity] = useState(quantity);

  // Handle quantity decrease
  const handleDecrease = () => {
    if (localQuantity > 1) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
      onQuantityChange(id, newQuantity);
    }
  };

  // Handle quantity increase
  const handleIncrease = () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  // Handle item removal
  const handleRemove = () => {
    onRemove(id);
  };

  const itemTotal = price * localQuantity;

  return (
    <article
      className="flex flex-col md:flex-row md:items-center gap-4 md:gap-4"
      aria-labelledby={`cart-item-${id}-name`}
    >
      <div className="w-full md:w-24 h-24 md:h-24 bg-gray-50 rounded-lg flex items-center justify-center">
        <Image
          src={image}
          alt={`Product image of ${name}`}
          width={100}
          height={100}
          className="object-contain h-20 w-20"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        <div className="flex flex-col">
          <h3 id={`cart-item-${id}-name`} className="font-bold text-lg mb-1">
            {name}
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-900">
              Size: <span className="font-medium">{size}</span>
            </p>
            <p className="text-sm text-gray-900">
              Color: <span className="font-medium">{color}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center md:flex-col md:items-end gap-2 md:gap-16">
          <div className="flex items-center">
            <button
              aria-label={`Remove ${name} from cart`}
              className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-full p-1"
              onClick={handleRemove}
            >
              <Image
                src="/images/trash-icon.svg"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center bg-gray-100 rounded-full py-2 md:py-3 px-4 md:px-5"
              role="group"
              aria-label={`Quantity controls for ${name}`}
            >
              <button
                aria-label="Decrease quantity"
                aria-disabled={localQuantity <= 1}
                className="focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-full p-1"
                onClick={handleDecrease}
                disabled={localQuantity <= 1}
              >
                <Image
                  src="/images/minus-icon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className={`w-4 h-4 ${
                    localQuantity <= 1 ? "opacity-30" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <span
                className="mx-5 text-sm font-medium"
                aria-live="polite"
                aria-atomic="true"
              >
                {localQuantity}
              </span>
              <button
                aria-label="Increase quantity"
                className="focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-full p-1"
                onClick={handleIncrease}
              >
                <Image
                  src="/images/plus-icon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  aria-hidden="true"
                />
              </button>
            </div>
            <p
              className="font-bold text-lg md:text-xl"
              aria-label={`Price: $${itemTotal.toFixed(2)}`}
            >
              ${(price * localQuantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
