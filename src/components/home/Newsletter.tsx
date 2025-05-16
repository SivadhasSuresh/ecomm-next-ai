"use client";

import { useState } from "react";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    // Simulate API call
    try {
      // In a real app, this would be an API call to your newsletter service
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("Thanks for subscribing!");
      setMessageType("success");
      setEmail("");
    } catch {
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-black text-white py-8 md:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-integralCF font-bold text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-0">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>

          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Image
                    src="/icons/email-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 text-gray-400"
                  />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full py-3 md:py-4 pl-12 pr-4 bg-white rounded-full text-sm md:text-base text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                  aria-label="Email address for newsletter"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 md:py-4 px-6 md:px-8 rounded-full bg-white text-black font-medium text-sm md:text-base hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-black transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
              </button>
            </form>

            {message && (
              <div
                className={`mt-3 text-sm ${
                  messageType === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
