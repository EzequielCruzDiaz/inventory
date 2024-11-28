"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductPage from "@/app/components/product/ProductPage";

const queryclient = new QueryClient();

export default function ProductHome() {
  return (
    <QueryClientProvider client={queryclient}>
      <ProductPage />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
