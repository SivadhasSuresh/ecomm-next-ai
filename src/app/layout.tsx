import type { Metadata } from "next";
import "./globals.css";
import PreHeader from "@/components/layout/PreHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { satoshi, integralCF } from "./fonts";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "SHOP.CO - Modern Fashion E-commerce",
  description: "Shop fashionable clothes that match your style",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${integralCF.variable} antialiased font-satoshi`}
      >
        <a 
          href="#main-content" 
          className="bg-black text-white absolute -top-10 left-0 z-50 p-3 focus:top-0 transition-all focus:outline-none" 
          aria-label="Skip to main content"
        >
          Skip to content
        </a>
        <CartProvider>
          <PreHeader />
          <Header />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
