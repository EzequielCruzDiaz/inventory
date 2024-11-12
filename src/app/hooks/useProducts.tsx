import { useCategories } from "./useCategories";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/app/lib/productService";
import { Product } from "@/app/types/products";

const useProducts = (selectedCategory?: string, searchTerm?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const categories = useCategories();

  useEffect(() => {
    const loadProducts = async () => {
      const categoryToFetch = selectedCategory;
      const fetchedProducts = await fetchProducts(categoryToFetch);
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchTerm?.toLowerCase() || "");
    return matchesCategory && matchesSearchTerm;
  });

  return { products, categories, filteredProducts };
};

export default useProducts;
