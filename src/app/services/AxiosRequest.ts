import axios from "axios";
import type { Product } from "../types/products";

// i would separated axios from the fetchProducts function. axios instance would be in lib/axios.ts

// example of an axios intance
// import axios from "axios";
//
// const fakestoreapi = axios.create({
// 	baseURL: "https://fakestoreapi.com",
// });
//

// export default instance;

// ussage example
// import fakestoreapi from "./lib/axios";
//
// fakestoreapi.get("/products");

export const fetchProducts = async (): Promise<Product[]> => {
	const response = await axios.get<Product[]>(
		"https://fakestoreapi.com/products",
	);
	return response.data;
};
