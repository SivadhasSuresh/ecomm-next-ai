"use client";

import { useState } from "react";
import Image from "next/image";

interface FilterOption {
  id: string;
  title: string;
  options: string[];
  isOpen: boolean;
}

export default function MobileFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    productType: [] as string[],
    priceRange: [50, 200],
    colors: [] as string[],
    size: [] as string[],
    dressStyle: [] as string[],
  });

  const [filterSections, setFilterSections] = useState<FilterOption[]>([
    {
      id: "productType",
      title: "Product Type",
      options: ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"],
      isOpen: true,
    },
    {
      id: "dressStyle",
      title: "Dress Style",
      options: ["Casual", "Formal", "Party", "Gym"],
      isOpen: true,
    },
  ]);

  const toggleFilterSection = (id: string) => {
    setFilterSections(
      filterSections.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  const toggleProductType = (type: string) => {
    if (activeFilters.productType.includes(type)) {
      setActiveFilters({
        ...activeFilters,
        productType: activeFilters.productType.filter((t) => t !== type),
      });
    } else {
      setActiveFilters({
        ...activeFilters,
        productType: [...activeFilters.productType, type],
      });
    }
  };

  const toggleDressStyle = (style: string) => {
    if (activeFilters.dressStyle.includes(style)) {
      setActiveFilters({
        ...activeFilters,
        dressStyle: activeFilters.dressStyle.filter((s) => s !== style),
      });
    } else {
      setActiveFilters({
        ...activeFilters,
        dressStyle: [...activeFilters.dressStyle, style],
      });
    }
  };

  const handleOpenFilter = () => {
    setIsFilterOpen(true);
    // Prevent body scroll when filter is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseFilter = () => {
    setIsFilterOpen(false);
    // Restore body scroll when filter is closed
    document.body.style.overflow = "auto";
  };

  const selectSize = (size: string) => {
    if (activeFilters.size.includes(size)) {
      setActiveFilters({
        ...activeFilters,
        size: activeFilters.size.filter((s) => s !== size),
      });
    } else {
      setActiveFilters({
        ...activeFilters,
        size: [...activeFilters.size, size],
      });
    }
  };

  return (
    <>
      <button
        onClick={handleOpenFilter}
        className="flex items-center justify-center w-full py-3 px-4 bg-gray-100 rounded-full"
      >
        <span className="font-medium">Filter</span>
        <Image
          src="/images/category/arrow-down.svg"
          alt="Filter"
          width={20}
          height={20}
          className="ml-2"
        />
      </button>

      {/* Mobile Filter Panel */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col">
          <div
            className="absolute inset-0 -z-10"
            onClick={handleCloseFilter}
          ></div>

          <div className="bg-white rounded-t-2xl mt-auto max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={handleCloseFilter}>
                <Image
                  src="/images/category/close-icon.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div className="p-6 space-y-6 mb-20">
              {/* Product Type Section */}
              <div>
                <div
                  className="flex justify-between items-center mb-4 cursor-pointer"
                  onClick={() => toggleFilterSection("productType")}
                >
                  <h3 className="text-lg font-bold">Product Type</h3>
                  <Image
                    src="/images/category/arrow-down.svg"
                    alt="Toggle"
                    width={16}
                    height={16}
                    className={`transition-transform ${
                      filterSections.find((s) => s.id === "productType")?.isOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>

                {filterSections.find((s) => s.id === "productType")?.isOpen && (
                  <div className="space-y-4">
                    {filterSections
                      .find((s) => s.id === "productType")
                      ?.options.map((type) => (
                        <div
                          key={type}
                          className="flex justify-between items-center"
                        >
                          <label
                            htmlFor={`mobile-type-${type.toLowerCase()}`}
                            className="text-gray-600 cursor-pointer"
                          >
                            {type}
                          </label>
                          <input
                            type="checkbox"
                            id={`mobile-type-${type.toLowerCase()}`}
                            checked={activeFilters.productType.includes(type)}
                            onChange={() => toggleProductType(type)}
                            className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black"
                          />
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* Price Range */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold mb-4">Price Range</h3>
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

              {/* Colors */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold mb-4">Colors</h3>
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
              </div>

              {/* Size */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold mb-4">Size</h3>
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
                  ].map((size) => (
                    <button
                      key={size}
                      onClick={() => selectSize(size)}
                      className={`py-2 px-3 rounded-full text-sm ${
                        activeFilters.size.includes(size) || size === "Large"
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dress Style */}
              <div className="border-t border-gray-100 pt-6">
                <div
                  className="flex justify-between items-center mb-4 cursor-pointer"
                  onClick={() => toggleFilterSection("dressStyle")}
                >
                  <h3 className="text-lg font-bold">Dress Style</h3>
                  <Image
                    src="/images/category/arrow-down.svg"
                    alt="Toggle"
                    width={16}
                    height={16}
                    className={`transition-transform ${
                      filterSections.find((s) => s.id === "dressStyle")?.isOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>

                {filterSections.find((s) => s.id === "dressStyle")?.isOpen && (
                  <div className="space-y-4">
                    {filterSections
                      .find((s) => s.id === "dressStyle")
                      ?.options.map((style) => (
                        <div
                          key={style}
                          className="flex justify-between items-center"
                        >
                          <label
                            htmlFor={`mobile-style-${style.toLowerCase()}`}
                            className="text-gray-600 cursor-pointer"
                          >
                            {style}
                          </label>
                          <input
                            type="checkbox"
                            id={`mobile-style-${style.toLowerCase()}`}
                            checked={activeFilters.dressStyle.includes(style)}
                            onChange={() => toggleDressStyle(style)}
                            className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black"
                          />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>

            {/* Apply Filter Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
              <button className="w-full bg-black text-white font-medium py-4 rounded-full">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
