"use client";

import { useState } from "react";
import Image from "next/image";

interface FilterSection {
  id: string;
  title: string;
  isOpen: boolean;
  content: React.ReactNode;
}

export default function CategoryFilter() {
  // State to manage opened/closed filter sections
  const [sections, setSections] = useState<FilterSection[]>([
    {
      id: "product-type",
      title: "Product Type",
      isOpen: true,
      content: (
        <div className="space-y-4">
          {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((type) => (
            <div key={type} className="flex justify-between items-center">
              <label
                htmlFor={`type-${type.toLowerCase()}`}
                className="text-gray-600 cursor-pointer text-sm md:text-base"
              >
                {type}
              </label>
              <input
                type="checkbox"
                id={`type-${type.toLowerCase()}`}
                className="h-4 w-4 md:h-5 md:w-5 rounded border-gray-300 text-black focus:ring-black"
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "price",
      title: "Price",
      isOpen: true,
      content: (
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">$50</span>
            <span className="font-medium">$200</span>
          </div>
          <div className="relative mt-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="absolute h-2 bg-black rounded-full"
                style={{ width: "50%", left: "25%" }}
              ></div>
              <div
                className="absolute h-4 w-4 bg-black rounded-full -mt-1 -ml-2"
                style={{ left: "25%" }}
              ></div>
              <div
                className="absolute h-4 w-4 bg-black rounded-full -mt-1 -ml-2"
                style={{ left: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "colors",
      title: "Colors",
      isOpen: true,
      content: (
        <div className="space-y-4">
          <div className="flex space-x-3">
            <div className="h-6 w-6 rounded-full bg-[#00C12B] border border-gray-300 cursor-pointer ring-2 ring-black"></div>
            <div className="h-6 w-6 rounded-full bg-[#F50606] border border-gray-300 cursor-pointer"></div>
            <div className="h-6 w-6 rounded-full bg-[#F5DD06] border border-gray-300 cursor-pointer"></div>
            <div className="h-6 w-6 rounded-full bg-[#F57906] border border-gray-300 cursor-pointer"></div>
            <div className="h-6 w-6 rounded-full bg-[#06CAF5] border border-gray-300 cursor-pointer"></div>
          </div>
          <div className="flex space-x-3">
            <div className="h-6 w-6 rounded-full bg-[#063AF5] border border-gray-300 cursor-pointer"></div>
            <div className="h-6 w-6 rounded-full bg-[#7D06F5] border border-gray-300 cursor-pointer"></div>
            <div className="h-6 w-6 rounded-full bg-[#F506A4] border border-gray-300 cursor-pointer"></div>
            <div className="h-6 w-6 rounded-full bg-white border border-gray-300 cursor-pointer"></div>
            <div className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></div>
          </div>
        </div>
      ),
    },
    {
      id: "size",
      title: "Size",
      isOpen: true,
      content: (
        <div className="flex flex-wrap gap-2">
          {[
            "XX-Small",
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
            "3X-Large",
            "4X-Large",
          ].map((size, index) => (
            <button
              key={size}
              className={`py-2 px-3 rounded-full text-sm ${
                index === 4
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      ),
    },
    {
      id: "dress-style",
      title: "Dress Style",
      isOpen: true,
      content: (
        <div className="space-y-4">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <div key={style} className="flex justify-between items-center">
              <label
                htmlFor={`style-${style.toLowerCase()}`}
                className="text-gray-600 cursor-pointer text-sm md:text-base"
              >
                {style}
              </label>
              <input
                type="checkbox"
                id={`style-${style.toLowerCase()}`}
                className="h-4 w-4 md:h-5 md:w-5 rounded border-gray-300 text-black focus:ring-black"
              />
            </div>
          ))}
        </div>
      ),
    },
  ]);

  const toggleSection = (id: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8">
      <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
        Filters
      </h2>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-gray-100 pb-6">
            <button
              className="flex items-center justify-between w-full text-left mb-4"
              onClick={() => toggleSection(section.id)}
            >
              <h3 className="text-lg font-bold">{section.title}</h3>
              <Image
                src="/images/category/arrow-down.svg"
                alt={section.isOpen ? "Collapse" : "Expand"}
                width={16}
                height={16}
                className={`transition-transform ${
                  section.isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {section.isOpen && <div className="mt-4">{section.content}</div>}
          </div>
        ))}
      </div>

      <button className="w-full bg-black text-white font-medium py-4 rounded-full mt-6">
        Apply Filter
      </button>
    </div>
  );
}
