"use client";
import React from "react";
import Head from "next/head";
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
      <Head>
        <title>{`Inventory - Eshop`}</title>
        <meta name="description" content="Manage your products" />
      </Head>

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
