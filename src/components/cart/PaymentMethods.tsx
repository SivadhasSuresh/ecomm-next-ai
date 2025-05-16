import Image from "next/image";

export default function PaymentMethods() {
  const paymentMethods = [
    { name: "Visa", image: "/images/visa.svg" },
    { name: "Mastercard", image: "/images/mastercard.svg" },
    { name: "PayPal", image: "/images/paypal.svg" },
    { name: "Apple Pay", image: "/images/apple-pay.svg" },
    { name: "Google Pay", image: "/images/google-pay.svg" },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-12 md:mt-16">
      {paymentMethods.map((method) => (
        <div
          key={method.name}
          className="w-14 h-8 md:w-16 md:h-10 border border-gray-200 rounded-md flex items-center justify-center bg-white shadow-sm"
        >
          <Image
            src={method.image}
            alt={method.name}
            width={28}
            height={20}
            className="w-8 h-5"
          />
        </div>
      ))}
    </div>
  );
}
