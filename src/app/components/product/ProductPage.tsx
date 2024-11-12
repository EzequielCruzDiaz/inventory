"use client";
import React from "react";
import { CategoryFilter } from "../filters/CategoryFilter";
import SearchBar from "../search/SearchBar";
import { ProductList } from "./ProductList";
import { Pagination } from "../nav/Pagination";
import { useFilters } from "@/app/hooks/useFilters";
import { usePagination } from "@/app/hooks/usePagination ";

const ProductPage = () => {
  const { filteredProducts } = useFilters();
  const { paginatedProducts, totalPages, page, handlePageChange } =
    usePagination(filteredProducts);

  return (
    <>
      <div>
        <CategoryFilter />
        <SearchBar />
        <ProductList products={paginatedProducts} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default ProductPage;
