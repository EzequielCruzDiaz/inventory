import axios from "axios";

const storeApi = axios.create({
  baseURL: "https://cloud.appwrite.io/v1/databases/store/collections",
  headers: {
    "Content-Type": "application/json",
    "X-Appwrite-Project": "6605ce7266a07e6fb0ba",
  },
});

export default storeApi;
