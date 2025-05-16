"use client";

import Link from "next/link";
import Image from "next/image";
import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";
import PaymentMethods from "@/components/cart/PaymentMethods";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items } = useCart();

  return (
    <main className="container max-w-screen-2xl mx-auto px-4 md:px-16 py-8 md:py-12">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-2 mb-4 md:mb-8">
        <Link
          href="/"
          className="text-gray-500 hover:text-black text-sm md:text-base flex items-center gap-1"
        >
          Home
          <Image
            src="/images/chevron-right.svg"
            alt=""
            width={16}
            height={16}
            className="w-3 h-3 md:w-4 md:h-4"
            aria-hidden="true"
          />
        </Link>
        <span className="text-black text-sm md:text-base">Cart</span>
      </div>

      {/* Page title */}
      <h1 className="text-3xl md:text-4xl font-integralCF font-bold mb-6 md:mb-8">
        Your cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Cart items */}
        <div className="lg:flex-1">
          <CartList />
        </div>

        {/* Order summary */}
        <div className="lg:w-1/3">
          <OrderSummary />
        </div>
      </div>

      {/* Payment methods */}
      <PaymentMethods />
    </main>
  );
}
