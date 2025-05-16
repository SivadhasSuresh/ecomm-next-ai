import Image from "next/image";

export default function Brands() {
  return (
    <section className="w-full py-10 md:py-16 bg-black">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        {/* Brands logos container */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 lg:gap-16 py-2">
          {/* Versace */}
          <div className="w-24 h-12 md:w-32 md:h-16 relative flex items-center justify-center">
            <Image
              src="/logos/versace-logo.svg"
              alt="Versace"
              width={120}
              height={40}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Zara */}
          <div className="w-20 h-12 md:w-28 md:h-16 relative flex items-center justify-center">
            <Image
              src="/logos/zara-logo.svg"
              alt="Zara"
              width={110}
              height={40}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Gucci */}
          <div className="w-28 h-12 md:w-36 md:h-16 relative flex items-center justify-center">
            <Image
              src="/logos/gucci-logo.svg"
              alt="Gucci"
              width={140}
              height={40}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Prada */}
          <div className="w-24 h-12 md:w-32 md:h-16 relative flex items-center justify-center">
            <Image
              src="/logos/prada-logo.svg"
              alt="Prada"
              width={120}
              height={40}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Calvin Klein */}
          <div className="w-32 h-12 md:w-40 md:h-16 relative flex items-center justify-center">
            <Image
              src="/logos/calvin-klein-logo.svg"
              alt="Calvin Klein"
              width={150}
              height={40}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
