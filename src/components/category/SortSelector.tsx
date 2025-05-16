"use client";

import { useState } from "react";
import Image from "next/image";

export default function SortSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Most Popular");

  const options = [
    "Most Popular",
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: High to Low",
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-600"
      >
        <span>Sort by:</span>
        <span className="font-medium">{selectedOption}</span>
        <Image
          src="/images/category/sort-arrow.svg"
          alt="Toggle sorting options"
          width={16}
          height={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-10 py-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                option === selectedOption ? "bg-gray-50" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
