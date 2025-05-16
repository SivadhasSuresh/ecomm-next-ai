"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";

export default function CartList() {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 text-center">
        <p className="text-gray-500 py-8">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 mb-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={index < items.length - 1 ? "border-b border-gray-100" : ""}
        >
          <div className={index < items.length - 1 ? "pb-6 mb-6" : ""}>
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              size={item.size}
              color={item.color}
              quantity={item.quantity}
              onQuantityChange={updateQuantity}
              onRemove={removeItem}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
