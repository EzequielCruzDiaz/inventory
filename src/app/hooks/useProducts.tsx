import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { fetchProducts } from "../lib/productService";

export const useProducts = () => {
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || undefined;

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () => fetchProducts(selectedCategory),
    staleTime: 5 * 60 * 1000,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      const matchesSearchTerm = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearchTerm;
    });
  }, [products, selectedCategory, searchTerm]);

  return { filteredProducts, isLoading, error, searchTerm, selectedCategory };
};
