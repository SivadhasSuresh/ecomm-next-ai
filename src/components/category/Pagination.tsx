"use client";

import { useState } from "react";
import Image from "next/image";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    // In a real app, we would fetch new products here
    // and scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`flex items-center justify-center h-10 w-10 rounded ${
          currentPage === 1
            ? "bg-black text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        1
      </button>
    );

    // If we're not at the start, we need ellipsis or more pages
    if (currentPage > 3) {
      pages.push(
        <button
          key="ellipsis1"
          className="flex items-center justify-center h-10 w-10"
        >
          ...
        </button>
      );
    } else if (totalPages > 1) {
      pages.push(
        <button
          key={2}
          onClick={() => handlePageChange(2)}
          className={`flex items-center justify-center h-10 w-10 rounded ${
            currentPage === 2
              ? "bg-black text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          2
        </button>
      );

      if (totalPages > 2) {
        pages.push(
          <button
            key={3}
            onClick={() => handlePageChange(3)}
            className={`flex items-center justify-center h-10 w-10 rounded ${
              currentPage === 3
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            3
          </button>
        );
      }
    }

    // Middle pages
    if (
      currentPage !== 1 &&
      currentPage !== totalPages &&
      currentPage > 3 &&
      currentPage < totalPages - 2
    ) {
      pages.push(
        <button
          key={currentPage}
          onClick={() => handlePageChange(currentPage)}
          className="flex items-center justify-center h-10 w-10 rounded bg-black text-white"
        >
          {currentPage}
        </button>
      );
    }

    // If we're not at the end, we need ellipsis or more pages
    if (currentPage < totalPages - 2) {
      pages.push(
        <button
          key="ellipsis2"
          className="flex items-center justify-center h-10 w-10"
        >
          ...
        </button>
      );
    } else if (totalPages > 3) {
      if (totalPages > 4) {
        pages.push(
          <button
            key={totalPages - 2}
            onClick={() => handlePageChange(totalPages - 2)}
            className={`flex items-center justify-center h-10 w-10 rounded ${
              currentPage === totalPages - 2
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {totalPages - 2}
          </button>
        );
      }

      pages.push(
        <button
          key={totalPages - 1}
          onClick={() => handlePageChange(totalPages - 1)}
          className={`flex items-center justify-center h-10 w-10 rounded ${
            currentPage === totalPages - 1
              ? "bg-black text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {totalPages - 1}
        </button>
      );
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`flex items-center justify-center h-10 w-10 rounded ${
            currentPage === totalPages
              ? "bg-black text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {/* Previous Page Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center h-10 px-4 border border-gray-200 rounded font-medium disabled:opacity-40"
      >
        <Image
          src="/images/category/arrow-right.svg"
          alt="Previous"
          width={16}
          height={16}
          className="transform rotate-180 mr-2"
        />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center mx-2">{renderPageNumbers()}</div>

      {/* Next Page Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center h-10 px-4 border border-gray-200 rounded font-medium disabled:opacity-40"
      >
        Next
        <Image
          src="/images/category/arrow-right.svg"
          alt="Next"
          width={16}
          height={16}
          className="ml-2"
        />
      </button>
    </div>
  );
}
