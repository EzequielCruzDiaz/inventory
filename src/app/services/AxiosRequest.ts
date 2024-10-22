import axios from "axios";

const Api_Url = "https://6712b4a86c5f5ced66246f27.mockapi.io/api/v1/products";

export const getProducts = async (page: number = 1, limit: number = 2) => {
  try {
    const response = await axios.get(Api_Url, {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
