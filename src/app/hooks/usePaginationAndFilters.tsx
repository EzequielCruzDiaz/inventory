import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import useProducts from "@/app/hooks/useProducts";
import { useQueryParam } from "@/app/hooks/useSearchProduct";

const PRODUCTS_PER_PAGE = 5;

export const usePaginationAndFilters = () => {
  const searchParams = useSearchParams();
  const { updateQueryParam } = useQueryParam();

  const searchTerm = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const selectedCategory = searchParams.get("category") || "All";

  const { filteredProducts } = useProducts(selectedCategory, searchTerm);

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
    filteredProducts,
  };
};
