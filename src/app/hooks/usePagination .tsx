import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useQueryParam } from "./useSearchProduct";
import { Product } from "../types/products";

const PRODUCTS_PER_PAGE = 5;

export const usePagination = (filteredProducts: Product[]) => {
  const searchParams = useSearchParams();
  const { updateQueryParam } = useQueryParam();

  const page = parseInt(searchParams.get("page") || "1", 10);

  const totalPages = useMemo(
    () => Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
    [filteredProducts]
  );

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (page - 1) * PRODUCTS_PER_PAGE,
      page * PRODUCTS_PER_PAGE
    );
  }, [filteredProducts, page]);

  const handlePageChange = (newPage: number) => {
    updateQueryParam("page", newPage.toString());
  };

  return {
    paginatedProducts,
    totalPages,
    handlePageChange,
    page,
  };
};
