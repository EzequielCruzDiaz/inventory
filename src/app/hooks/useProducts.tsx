import { useState, useEffect } from "react";
import { fetchProducts, fetchCategories } from "@/app/lib/productService";
import { Product } from "@/app/types/products";

const useProducts = (selectedCategory?: string, searchTerm?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    loadCategories();
  }, []);

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

  return { products, categories, filteredProducts };
};

export default useProducts;
