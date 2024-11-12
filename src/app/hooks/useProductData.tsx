import { useState, useEffect } from "react";
import { fetchProducts } from "@/app/lib/productService";
import { Product } from "@/app/types/products";

export const useProductsData = (selectedCategory?: string, searchTerm?: string) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts(selectedCategory);
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchTerm?.toLowerCase() || "");
    return matchesCategory && matchesSearchTerm;
  });

  return { products, filteredProducts };
};
