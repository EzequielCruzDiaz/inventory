import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../lib/productService";

export const useCategories = () => {
  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });
  return { categories, isLoading, error };
};
