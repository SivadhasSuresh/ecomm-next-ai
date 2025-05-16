"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
  const { subtotal, discount, deliveryFee, total } = useCart();
  const [promoCode, setPromoCode] = useState("");

  const handleApplyPromoCode = () => {
    // This would handle applying promo codes in a real app
    console.log("Applying promo code:", promoCode);
    // Reset the input after applying
    setPromoCode("");
  };

  const handleCheckout = () => {
    // In a real app, this would navigate to the checkout page
    console.log("Proceeding to checkout");
  };

  // Helper function to format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(0)}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6">
      <h2 className="font-bold text-xl md:text-2xl mb-6">Order Summary</h2>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span className="text-gray-600 text-base md:text-lg">Subtotal</span>
          <span className="font-bold text-base md:text-lg">
            {formatCurrency(subtotal)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 text-base md:text-lg">
            Discount (-20%)
          </span>
          <span className="font-bold text-base md:text-lg text-red-500">
            -{formatCurrency(discount)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 text-base md:text-lg">
            Delivery Fee
          </span>
          <span className="font-bold text-base md:text-lg">
            {formatCurrency(deliveryFee)}
          </span>
        </div>

        <div className="border-t border-gray-100 pt-5"></div>

        <div className="flex justify-between">
          <span className="text-black font-medium text-base md:text-lg">
            Total
          </span>
          <span className="font-bold text-xl md:text-2xl">
            {formatCurrency(total)}
          </span>
        </div>
      </div>

      {/* Promo code section */}
      <div className="flex gap-3 mt-6">
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 flex items-center">
          <Image
            src="/images/search-icon.svg"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 opacity-40 mr-2"
          />
          <input
            type="text"
            placeholder="Add promo code"
            className="bg-transparent w-full text-sm focus:outline-none"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>

        <button
          className="bg-black text-white rounded-full px-4 py-3 text-sm font-medium"
          onClick={handleApplyPromoCode}
          disabled={!promoCode}
        >
          Apply
        </button>
      </div>

      {/* Checkout button */}
      <button
        className="w-full bg-black text-white rounded-full py-4 font-medium mt-6 flex items-center justify-center hover:bg-gray-900 transition-colors"
        onClick={handleCheckout}
      >
        Go to Checkout
        <Image
          src="/images/chevron-right.svg"
          alt=""
          width={20}
          height={20}
          className="w-5 h-5 ml-2 rotate-90 invert"
        />
      </button>
    </div>
  );
}
