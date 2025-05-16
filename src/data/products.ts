export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  imageSrc: string;
  category: string;
  isNewArrival?: boolean;
  isTopSelling?: boolean;
}

export const products: Product[] = [
  {
    id: "gradient-tshirt",
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    imageSrc: "/images/category/products/gradient-tshirt.jpg",
    category: "casual",
    isNewArrival: true
  },
  {
    id: "polo-tipping",
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    imageSrc: "/images/category/products/polo-tipping.jpg",
    category: "casual",
    isNewArrival: true
  },
  {
    id: "black-striped-tshirt",
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discountPercentage: 30,
    rating: 5.0,
    imageSrc: "/images/category/products/black-striped-tshirt.jpg",
    category: "casual",
    isNewArrival: true
  },
  {
    id: "skinny-jeans",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discountPercentage: 20,
    rating: 3.5,
    imageSrc: "/images/category/products/skinny-jeans.jpg",
    category: "formal",
    isNewArrival: true
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    imageSrc: "/images/category/products/checkered-shirt.jpg",
    category: "formal",
    isNewArrival: true
  },
  {
    id: "sleeve-striped-tshirt",
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discountPercentage: 30,
    rating: 4.5,
    imageSrc: "/images/category/products/sleeve-striped-tshirt.jpg",
    category: "party",
    isNewArrival: true
  },
  {
    id: "vertical-striped-shirt",
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discountPercentage: 20,
    rating: 5.0,
    imageSrc: "/images/category/products/vertical-striped-shirt.jpg",
    category: "party",
    isTopSelling: true
  },
  {
    id: "courage-tshirt",
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    imageSrc: "/images/category/products/courage-tshirt.jpg",
    category: "gym",
    isTopSelling: true
  },
  {
    id: "bermuda-shorts",
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    imageSrc: "/images/category/products/bermuda-shorts.jpg",
    category: "gym",
    isTopSelling: true
  }
];

export const getNewArrivals = () => products.filter(product => product.isNewArrival);
export const getTopSelling = () => products.filter(product => product.isTopSelling);

// Function to get a product by its ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
}; 