"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductPage from "@/app/components/product/ProductPage";
import ProductDetailPage from "../product/[id]/page";

const queryclient = new QueryClient();

export default function ProductHome() {
  return (
    <QueryClientProvider client={queryclient}>
      <ProductPage />
    </QueryClientProvider>
  );
}
