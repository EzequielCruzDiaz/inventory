"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { fetchProductById } from "@/app/lib/productService";
import { Loader } from "@/app/components/product/ProductLoader";
import { Product } from "@/app/types/products";
import { FaArrowLeft, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
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

  if (!product)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-semibold text-red-500 mb-4">
          Product not found.
        </p>
        <button
          onClick={() => router.push("/products")}
          className="text-blue-600 hover:underline flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Products
        </button>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={() => router.push("/products")}
        className="mb-6 text-blue-600 hover:underline flex items-center"
      >
        <FaArrowLeft className="mr-2" /> Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-64 object-cover md:w-72 md:h-72"
            />
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <p className="text-sm text-gray-600 mb-4">{product.category}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-600">(5.0)</span>
            </div>
            <p className="text-xl font-bold text-gray-900 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
