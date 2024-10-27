import axios from "axios";
import { Product } from "../types/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
};
