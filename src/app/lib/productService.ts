import type { ApiCategory, ApiProducts, Product } from "../types/products";
import storeApi from "./axiosInstance";

export const fetchProducts = async (
  page: 1,
  limit: 20,
  category?: string[]
) => {
  const response = await storeApi.get<{ documents: ApiProducts[] }>(
    "/products/documents",
    {
      params: {
        page,
        limit,
        category,
      },
    }
  );

  return response.data.documents.map((doc) => ({
    ...doc,
    id: doc.$id,
  }));
};

export const fetchCategories = async (): Promise<string[]> => {
  const response = await storeApi.get<{ documents: ApiCategory[] }>(
    "/categories/documents"
  );

  return response.data.documents.map((doc) => doc.name);
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await storeApi.get(`/products/documents/${id}`);

  return {
    ...response.data,
    id: response.data.$id,
  };
};
