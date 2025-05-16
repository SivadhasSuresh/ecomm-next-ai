interface StarRatingProps {
  rating: number;
  maxRating?: number;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  showText = true,
  size = "md",
  className = "",
}: StarRatingProps) {
  // Calculate size of stars based on size prop
  const starSize = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  // Calculate text size based on size prop
  const textSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  // Round to nearest 0.5 for display
  const displayRating = Math.round(rating * 2) / 2;

  // Format for screen readers
  const ariaLabel = `${displayRating} out of ${maxRating} stars`;

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <div className="flex" aria-hidden="true">
        {[...Array(maxRating)].map((_, i) => {
          // For half stars
          const isHalfStar = i + 0.5 === displayRating;
          // For full stars
          const isFullStar = i < displayRating;

          return (
            <span key={i}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className={starSize[size]}
                xmlns="http://www.w3.org/2000/svg"
              >
                {isHalfStar ? (
                  // Half star
                  <>
                    <defs>
                      <linearGradient
                        id={`halfStar-${i}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="50%" stopColor="#FFC633" />
                        <stop offset="50%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                      fill={`url(#halfStar-${i})`}
                      stroke="#FFC633"
                      strokeWidth="1"
                    />
                  </>
                ) : (
                  // Full or empty star
                  <path
                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                    fill={isFullStar ? "#FFC633" : "none"}
                    stroke="#FFC633"
                    strokeWidth="1"
                  />
                )}
              </svg>
            </span>
          );
        })}
      </div>

      {showText && (
        <span
          className={`${textSize[size]} text-black font-medium`}
          aria-hidden="true"
        >
          {displayRating.toFixed(1)}/{maxRating}
        </span>
      )}
    </div>
  );
}
