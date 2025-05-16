import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F0F0F0] pt-10 md:pt-16 pb-6 md:pb-10">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-0 justify-between">
          {/* Brand and Social Media */}
          <div className="w-full md:w-1/4 md:pr-8">
            <Link href="/" className="inline-block mb-4">
              <h2 className="font-integralCF text-2xl md:text-3xl font-bold">
                SHOP.CO
              </h2>
            </Link>
            <p className="mb-6 text-gray-600 text-sm md:text-base">
              We have clothes that suits your style and which you&apos;re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                aria-label="Twitter"
              >
                <Image
                  src="/icons/twitter.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Facebook"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                aria-label="GitHub"
              >
                <Image
                  src="/icons/github.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-1/2 md:w-1/6">
            <h3 className="uppercase tracking-wider text-sm font-medium mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/6">
            <h3 className="uppercase tracking-wider text-sm font-medium mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/customer-support"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/6">
            <h3 className="uppercase tracking-wider text-sm font-medium mb-4">
              FAQ
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/account"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href="/deliveries"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/payments"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Payments
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/6">
            <h3 className="uppercase tracking-wider text-sm font-medium mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/ebooks"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/youtube"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  YouTube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 md:my-10 border-gray-200" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mt-6 md:mt-0">
            Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
          </p>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Payment method badges */}
            {["visa", "mastercard", "paypal", "apple-pay", "google-pay"].map(
              (method) => (
                <div
                  key={method}
                  className="p-2 bg-white rounded-md border border-gray-200 shadow-sm"
                >
                  <Image
                    src={`/images/payment/${method}.svg`}
                    alt={method}
                    width={36}
                    height={24}
                    className="h-5 w-auto"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
