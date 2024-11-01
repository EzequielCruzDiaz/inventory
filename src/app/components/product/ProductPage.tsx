"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "@/app/lib/productService";
import type { Product } from "@/app/types/products";
import { Loader } from "../product/ProductLoader";
import ProductList from "./ProductList";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
