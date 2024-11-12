import { useSearchParams } from "next/navigation";
import useProducts from "@/app/hooks/useProducts";
import { Product } from "../types/products";

export const useFilters = (): {
  filteredProducts: Product[];
  searchTerm: string;
  selectedCategory?: string;
} => {
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || undefined;

  const { filteredProducts } = useProducts(selectedCategory, searchTerm);
  return {
    filteredProducts,
    searchTerm,
    selectedCategory,
  };
};
