import { useState, useEffect } from "react";
import { fetchCategories } from "../lib/productService";

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    loadCategories();
  }, []);

  return categories;
};
