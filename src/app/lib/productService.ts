import type { Product } from "../types/products";
import storeApi from "./axiosInstance";

export const fetchProducts = async (
  category?: string,
  limit: number = 50,
  page: number = 1
): Promise<Product[]> => {
  const response = await storeApi.get("/products", {
    params: {
      limit,
      page,
      ...(category ? { category } : {}),
    },
  });
  return response.data;
};

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await storeApi.get<string[]>(
      "https://fakestoreapi.com/products/categories"
    );

    return ["All", ...response.data];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories. Please try again later.");
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const response = await storeApi.get<Product>(`/products/${id}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw new Error("Failed to fetch product. Please try again later.");
  }
};
