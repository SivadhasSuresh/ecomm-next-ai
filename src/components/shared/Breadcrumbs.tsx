import Link from "next/link";

interface Breadcrumb {
  id: string;
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
  currentPageLabel?: string;
  className?: string;
}

export default function Breadcrumbs({
  items,
  currentPageLabel,
  className = "",
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm ${className}`}
    >
      <ol
        className="flex items-center flex-wrap"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link
              href={item.href}
              className="text-gray-600 hover:text-black focus:outline-none focus:underline"
              itemProp="item"
              aria-label={`Navigate to ${item.label}`}
            >
              <span itemProp="name">{item.label}</span>
            </Link>
            <meta itemProp="position" content={`${index + 1}`} />

            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}

        {currentPageLabel && (
          <li
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            aria-current="page"
          >
            <span className="mx-2 text-gray-400" aria-hidden="true">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-medium text-black" itemProp="name">
              {currentPageLabel}
            </span>
            <meta itemProp="position" content={`${items.length + 1}`} />
          </li>
        )}
      </ol>
    </nav>
  );
}
