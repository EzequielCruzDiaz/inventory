import type { Product } from "../types/products";
import storeApi from "./axiosInstance";
import axios from "axios";

export const getProducts = async () => {
  const reponse = await storeApi.get<Product[]>("/products");
  return reponse.data;
};

export async function fetchProducts(
  category: string = "All",
  limit: number = 10,
  page: number = 2
): Promise<Product[]> {
  try {
    const categoryQuery = category !== "All" ? `&category=${category}` : "";
    const response = await axios.get<Product[]>(
      `https://fakestoreapi.com/products?limit=${limit}&page=${page}${categoryQuery}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products. Please try again later.");
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const response = await axios.get<string[]>(
      "https://fakestoreapi.com/products/categories"
    );
    return ["All", ...response.data];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories. Please try again later.");
  }
}
