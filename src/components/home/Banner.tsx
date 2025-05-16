import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      className="w-full bg-[#F2F0F1] relative overflow-hidden"
      aria-label="Featured collection"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16 relative">
        {/* Hero Content */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="w-full md:w-1/2 flex flex-col order-1 md:order-1 py-6 md:py-12">
            <h1 className="font-integralCF font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight md:leading-tight text-black mb-2 md:mb-6 break-words">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-8 max-w-xl">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link
              href="/shop"
              className="bg-black text-white rounded-full py-3 sm:py-4 px-6 sm:px-12 font-medium text-sm sm:text-base inline-block w-full text-center sm:w-fit hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              aria-label="Shop our collection"
            >
              Shop Now
            </Link>

            {/* Stats rebuilt with Tailwind-only */}
            <div className="flex flex-wrap justify-between sm:justify-start items-center gap-4 sm:gap-0 mt-8 md:mt-10">
              <div className="flex flex-col min-w-[100px] mb-3">
                <span className="block font-bold text-2xl md:text-[40px] leading-tight md:leading-[54px] text-black text-left">
                  200+
                </span>
                <span className="block text-xs md:text-base text-gray-600 text-left -mt-0.5 md:-mt-1.5">
                  International Brands
                </span>
              </div>

              <div
                className="hidden sm:block h-10 md:h-12 w-px bg-gray-200 mx-4 md:mx-8"
                aria-hidden="true"
              ></div>

              <div className="flex flex-col min-w-[100px] mb-3">
                <span className="block font-bold text-2xl md:text-[40px] leading-tight md:leading-[54px] text-black text-left">
                  2,000+
                </span>
                <span className="block text-xs md:text-base text-gray-600 text-left -mt-0.5 md:-mt-1.5">
                  High-Quality Products
                </span>
              </div>

              <div
                className="hidden sm:block h-10 md:h-12 w-px bg-gray-200 mx-4 md:mx-8"
                aria-hidden="true"
              ></div>

              <div className="flex flex-col min-w-[100px] mb-3">
                <span className="block font-bold text-2xl md:text-[40px] leading-tight md:leading-[54px] text-black text-left">
                  30,000+
                </span>
                <span className="block text-xs md:text-base text-gray-600 text-left -mt-0.5 md:-mt-1.5">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative order-2 md:order-2 mt-6 md:mt-0">
            {/* Background rectangle */}
            <div className="absolute right-0 top-0 bottom-0 w-full bg-white rounded-2xl"></div>

            {/* Hero image - heights adjusted to match Figma design */}
            <div className="relative h-[520px] md:h-[580px] lg:h-[640px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/figma-hero-image"
                alt="Fashion model showcasing clothing"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />

              {/* Glitter elements positioned relative to the image - reduced size for mobile */}
              <div className="absolute top-[30%] left-[10%] z-20">
                <Image
                  src="/images/glitter-vector1.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-[32px] h-[32px] md:w-[56px] md:h-[56px]"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute top-[5%] right-[5%] z-20">
                <Image
                  src="/images/glitter-vector2.svg"
                  alt=""
                  width={106}
                  height={106}
                  className="w-[56px] h-[56px] md:w-[106px] md:h-[106px]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
