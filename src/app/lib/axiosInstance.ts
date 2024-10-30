import axios from "axios";

const storeApi = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 1000,
});

export default storeApi;
