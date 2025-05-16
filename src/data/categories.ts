export interface Category {
  slug: string;
  name: string;
  icon?: string; // optional, for future use
}

export const categories: Category[] = [
  { slug: "casual", name: "Casual" },
  { slug: "formal", name: "Formal" },
  { slug: "party", name: "Party" },
  { slug: "gym", name: "Gym" },
]; 