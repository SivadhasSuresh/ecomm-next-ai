"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";

interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  isVerified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    content:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    isVerified: true,
  },
  {
    id: "2",
    name: "Alex K.",
    content:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
    isVerified: true,
  },
  {
    id: "3",
    name: "James L.",
    content:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    isVerified: true,
  },
  {
    id: "4",
    name: "Mooen",
    content:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    isVerified: true,
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(1);
  const [pageCount, setPageCount] = useState(testimonials.length);

  // Handle responsive display of testimonials
  useEffect(() => {
    const handleResize = () => {
      const perPage =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setTestimonialsPerPage(perPage);
      setPageCount(Math.ceil(testimonials.length / perPage));
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="w-full py-10 md:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        <SectionHeading title="Our Happy Customers" className="mb-8 md:mb-12" />

        <div className="relative">
          {/* Desktop Navigation Buttons */}
          <button
            onClick={prevPage}
            className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 z-10"
            aria-label="Previous testimonials"
          >
            <Image
              src="/icons/arrow-left.svg"
              alt="Previous"
              width={24}
              height={24}
            />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border border-gray-200 rounded-2xl p-4 md:p-6"
              >
                <div className="flex flex-col h-full">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill={i < testimonial.rating ? "#FFC633" : "none"}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 me-1"
                        >
                          <path
                            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                            stroke={i < testimonial.rating ? "" : "#FFC633"}
                            strokeWidth="1"
                          />
                        </svg>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="font-bold text-base md:text-lg">
                      {testimonial.name}
                    </span>
                    {testimonial.isVerified && (
                      <span className="ml-2 bg-green-50 p-1 rounded-full">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-green-600"
                        >
                          <path
                            d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z"
                            fill="#01AB31"
                          />
                        </svg>
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm md:text-base flex-grow">
                  &quot;{testimonial.content}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextPage}
            className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 z-10"
            aria-label="Next testimonials"
          >
            <Image
              src="/icons/arrow-right.svg"
              alt="Next"
              width={24}
              height={24}
            />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center mt-6 md:hidden space-x-4">
            <button
              onClick={prevPage}
              className="p-2 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Previous testimonials"
            >
              <Image
                src="/icons/arrow-left.svg"
                alt="Previous"
                width={20}
                height={20}
              />
            </button>
            <button
              onClick={nextPage}
              className="p-2 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Next testimonials"
            >
              <Image
                src="/icons/arrow-right.svg"
                alt="Next"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
