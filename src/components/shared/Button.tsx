"use client";

import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  onClick,
  type = "button",
  icon,
  iconPosition = "left",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  // Base styles applied to all buttons
  const baseStyles =
    "font-medium rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black";

  // Variant-specific styles
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-[#F0F0F0] text-black hover:bg-gray-200",
    outline: "border border-gray-200 bg-white text-black hover:bg-gray-50",
  };

  // Size-specific styles
  const sizeStyles = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-base py-4 px-8",
  };

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  // Disabled styles
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      aria-disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
}
