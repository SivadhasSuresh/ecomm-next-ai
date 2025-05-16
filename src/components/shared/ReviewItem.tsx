import StarRating from "./StarRating";

interface ReviewItemProps {
  authorName: string;
  date: string;
  rating: number;
  content: string;
  verified?: boolean;
  className?: string;
}

export default function ReviewItem({
  authorName,
  date,
  rating,
  content,
  verified = false,
  className = "",
}: ReviewItemProps) {
  return (
    <div
      className={`border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 ${className}`}
    >
      <div className="flex flex-col gap-4">
        {/* Rating and author info */}
        <div className="flex flex-col gap-3">
          <StarRating rating={rating} size="sm" />

          <div className="flex items-center gap-2">
            <h4 className="font-bold text-base md:text-lg">{authorName}</h4>

            {verified && (
              <span className="flex items-center text-green-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L9.4 1.45L11.4 0.55L12.1 2.4L14.2 2.2L14.3 4.3L16 5.6L14.6 7L15.55 9L13.7 9.7L13.9 11.8L11.85 11.95L10.5 13.6L9 12.15L7 13.1L6.3 11.25L4.2 11.45L4.05 9.35L2.4 8L3.85 6.6L2.9 4.6L4.75 3.9L4.55 1.85L6.65 1.7L8 0Z"
                    fill="#01AB31"
                  />
                  <path
                    d="M6 7.6L7.25 9L10.25 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-1 text-xs">Verified</span>
              </span>
            )}
          </div>
        </div>

        {/* Review content */}
        <div>
          <p className="text-gray-600 text-sm md:text-base">{content}</p>
        </div>
      </div>

      {/* Review date */}
      <div className="mt-auto">
        <p className="text-sm text-gray-500">Posted on {date}</p>
      </div>
    </div>
  );
}
