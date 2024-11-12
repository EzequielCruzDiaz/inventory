import { useCategories } from "./useCategories";
import { useProductsData } from "./useProductData";

const useProducts = (selectedCategory?: string, searchTerm?: string) => {
  const categories = useCategories();
  const { products, filteredProducts } = useProductsData(
    selectedCategory,
    searchTerm
  );
  return { products, categories, filteredProducts };
};

export default useProducts;
