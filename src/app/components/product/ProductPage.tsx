"use client";
import React from "react";
import { CategoryFilter } from "../filters/CategoryFilter";
import SearchBar from "../search/SearchBar";
import { ProductList } from "./ProductList";
import { Pagination } from "../nav/Pagination";
import { usePaginationAndFilters } from "@/app/hooks/usePaginationAndFilters";

const ProductPage = () => {
  const { paginatedProducts, totalPages, page, handlePageChange } =
    usePaginationAndFilters();

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
