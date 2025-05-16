import { ReactNode } from "react";

type BadgeVariant = "primary" | "discount" | "info" | "success" | "warning";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  rounded?: boolean;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
  rounded = true,
}: BadgeProps) {
  // Define variant-specific styles
  const variantStyles = {
    primary: "bg-black text-white",
    discount: "bg-red-50 text-red-500",
    info: "bg-blue-50 text-blue-500",
    success: "bg-green-50 text-green-500",
    warning: "bg-yellow-50 text-yellow-700",
  };

  // Define size-specific styles
  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  // Define border radius style
  const radiusStyle = rounded ? "rounded-full" : "rounded";

  return (
    <span
      className={`
        inline-flex items-center justify-center font-medium
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${radiusStyle}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
