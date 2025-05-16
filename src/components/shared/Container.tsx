import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  noFill?: boolean;
}

export default function Container({
  children,
  className = "",
  size = "xl",
  noFill = false,
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm", // 640px
    md: "max-w-screen-md", // 768px
    lg: "max-w-screen-lg", // 1024px
    xl: "max-w-screen-xl", // 1280px
    "2xl": "max-w-screen-2xl", // 1536px
  };

  return (
    <div
      className={`
      ${maxWidthClasses[size]} 
      w-full 
      mx-auto 
      px-4 
      sm:px-6 
      md:px-8 
      ${!noFill ? "h-full" : ""}
      ${className}
    `}
    >
      {children}
    </div>
  );
}
