"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProductById } from "@/app/lib/productService";
import { Loader } from "@/app/components/product/ProductLoader";
import { Product } from "@/app/types/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const productData = await fetchProductById(id as string);
        setProduct(productData);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) return <Loader />;

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
