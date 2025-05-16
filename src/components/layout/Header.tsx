"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/categories";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const { items } = useCart();
  const menuRef = useRef<HTMLDivElement>(null);
  const shopDropdownRef = useRef<HTMLDivElement>(null);
  const shopButtonRef = useRef<HTMLButtonElement>(null);

  // Calculate total items in cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        shopDropdownRef.current &&
        !shopDropdownRef.current.contains(event.target as Node) &&
        shopButtonRef.current &&
        !shopButtonRef.current.contains(event.target as Node)
      ) {
        setIsShopDropdownOpen(false);
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isShopDropdownOpen]);

  // Close dropdown with ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsShopDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header className="w-full py-4 md:py-6 bg-white border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        <div className="flex items-center justify-between">
          {/* Left: Hamburger (mobile only) and Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger menu (mobile only) */}
            <button
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-md"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <Image
                src="/images/homepage/hamburger-mobile.svg"
                alt=""
                width={24}
                height={24}
                className="w-5 h-5"
                aria-hidden="true"
              />
            </button>

            {/* Logo */}
            <Link
              href="/"
              aria-label="SHOP.CO Home"
              className="md:mr-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded"
            >
              <h1 className="text-2xl md:text-3xl font-integralCF font-bold text-primary-black">
                SHOP.CO
              </h1>
            </Link>
          </div>

          {/* Center: Navigation Links (desktop only) */}
          <nav
            className="hidden md:flex items-center"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="relative group px-6">
              <button
                ref={shopButtonRef}
                className="flex items-center gap-1 text-base font-normal text-gray-500 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-md p-1"
                onClick={toggleShopDropdown}
                aria-expanded={isShopDropdownOpen}
                aria-controls="shop-dropdown"
              >
                Shop
                <Image
                  src="/images/homepage/chevron-down.svg"
                  alt=""
                  width={16}
                  height={16}
                  className={`w-4 h-4 transition-transform ${
                    isShopDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isShopDropdownOpen && (
                <div
                  id="shop-dropdown"
                  ref={shopDropdownRef}
                  className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-1 z-50"
                  role="menu"
                >
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black"
                      role="menuitem"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={`/category/${categories[1].slug}`}
              className="px-6 text-base font-normal text-gray-500 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-md p-1"
            >
              On Sale
            </Link>
            <Link
              href={`/category/${categories[2].slug}`}
              className="px-6 text-base font-normal text-gray-500 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-md p-1"
            >
              New Arrivals
            </Link>
            <Link
              href={`/category/${categories[3].slug}`}
              className="px-6 text-base font-normal text-gray-500 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-md p-1"
            >
              Brands
            </Link>
          </nav>

          {/* Center to right: Search Bar (desktop only) */}
          <div className="hidden md:flex flex-1 max-w-md ml-14">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Image
                  src="/icons/search-icon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="search"
                id="desktop-search"
                className="block w-full py-3 pl-12 pr-4 bg-gray-100 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Search for products..."
                aria-label="Search for products"
              />
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            {/* Search icon (mobile only) */}
            <button
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-full"
              aria-label="Search for products"
              onClick={() => {
                setIsMenuOpen(true);
                setTimeout(() => {
                  document.getElementById("mobile-search")?.focus();
                }, 100);
              }}
            >
              <Image
                src="/images/homepage/search-mobile.svg"
                alt=""
                width={24}
                height={24}
                className="w-5 h-5"
                aria-hidden="true"
              />
            </button>

            {/* User profile icon */}
            <div
              className="p-2 rounded-full cursor-default"
              aria-label="User account (not available)"
            >
              <Image
                src="/images/homepage/user-mobile.svg"
                alt=""
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6 opacity-70"
                aria-hidden="true"
              />
            </div>

            {/* Shopping cart icon */}
            <Link
              href="/cart"
              className="relative p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-full"
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <Image
                src="/images/homepage/cart-mobile.svg"
                alt=""
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
                aria-hidden="true"
              />
              {totalItems > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center pointer-events-none"
                  aria-hidden="true"
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden mt-4 py-3 border-t border-gray-100"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Image
                    src="/icons/search-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="search"
                  id="mobile-search"
                  className="block w-full py-2 pl-10 pr-3 bg-gray-100 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                  placeholder="Search for products..."
                  aria-label="Search for products"
                />
              </div>
            </div>
            <nav className="flex flex-col space-y-3">
              <div className="relative">
                <button
                  className="flex w-full items-center justify-between text-base font-normal text-gray-500 hover:text-black transition-colors py-1 focus:outline-none focus:text-black"
                  onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                  aria-expanded={isShopDropdownOpen}
                  aria-controls="mobile-shop-dropdown"
                >
                  Shop
                  <Image
                    src="/images/homepage/chevron-down.svg"
                    alt=""
                    width={16}
                    height={16}
                    className={`w-4 h-4 transition-transform ${
                      isShopDropdownOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isShopDropdownOpen && (
                  <div
                    id="mobile-shop-dropdown"
                    className="pl-4 mt-2 space-y-2"
                    role="region"
                    aria-label="Shop categories"
                  >
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="block text-base font-normal text-gray-500 hover:text-black transition-colors py-1 focus:outline-none focus:text-black"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={`/category/${categories[1].slug}`}
                className="text-base font-normal text-gray-500 hover:text-black transition-colors py-1 focus:outline-none focus:text-black"
              >
                On Sale
              </Link>
              <Link
                href={`/category/${categories[2].slug}`}
                className="text-base font-normal text-gray-500 hover:text-black transition-colors py-1 focus:outline-none focus:text-black"
              >
                New Arrivals
              </Link>
              <Link
                href={`/category/${categories[3].slug}`}
                className="text-base font-normal text-gray-500 hover:text-black transition-colors py-1 focus:outline-none focus:text-black"
              >
                Brands
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
