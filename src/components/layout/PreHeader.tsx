"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PreHeader() {
  const [isVisible, setIsVisible] = useState(true);

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="bg-black w-full text-white"
      role="banner"
      aria-label="Promotion banner"
    >
      <div className="relative flex items-center justify-center px-4 py-2 md:py-[9px] max-w-screen-2xl mx-auto">
        <div className="text-center text-xs md:text-sm font-medium">
          <span>Sign up and get 20% off to your first order.</span>{" "}
          <Link
            href="/signup"
            className="underline font-medium hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
            aria-label="Sign up for 20% discount"
          >
            Sign Up Now
          </Link>
        </div>

        {/* Close button - only visible on desktop */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1.5 hover:bg-gray-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black hidden md:block"
          aria-label="Close promotion banner"
        >
          <Image
            src="/icons/close-icon.svg"
            alt="Close"
            width={10}
            height={10}
            className="w-3.5 h-3.5"
          />
        </button>
      </div>
    </div>
  );
}
