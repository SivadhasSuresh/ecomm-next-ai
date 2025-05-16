import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="w-full bg-black text-white py-2 relative" 
      role="region" 
      aria-label="Promotional information"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16 flex items-center justify-center">
        <p className="text-xs md:text-sm text-center font-medium">
          Sign up and get 20% off to your first order.{" "}
          <Link 
            href="/signup" 
            className="underline hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Sign up for 20% discount on your first order"
          >
            Sign Up Now
          </Link>
        </p>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2"
          aria-label="Close promotional banner"
        >
          <Image 
            src="/images/homepage/close-icon.svg" 
            alt=""
            width={12} 
            height={12}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}