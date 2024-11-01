import type { Product } from "../types/products";
import storeApi from "./axiosInstance";
import axios from "axios";

export const fetchProducts = async (
  category: string = "All",
  limit: number = 20,
  page: number = 2
): Promise<Product[]> => {
  try {
    const categoryQuery = category !== "All" ? `&category=${category}` : "";
    const response = await storeApi.get<Product[]>(
      `/products?limit=${limit}&page=${page}${categoryQuery}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching products:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Failed to fetch products. Please try again later.");
  }
};

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await axios.get<string[]>(
      "https://fakestoreapi.com/products/categories"
    );
    return ["All", ...response.data];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching categories:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Failed to fetch categories. Please try again later.");
  }
};
