"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { fetchProductById } from "@/app/lib/productService";
import { Loader } from "@/app/components/product/ProductLoader";
import { Product } from "@/app/types/products";
import BackButton from "@/app/components/product/details/BackButton";
import { motion } from "framer-motion";

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
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-2xl font-semibold text-red-500 mb-4">
          Product not found.
        </p>
        <BackButton onBack={() => router.back()} />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <BackButton onBack={() => router.back()} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mt-6"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.category}
              </div>
              <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                ${product.price}
              </p>
              <p className="mt-4 text-gray-500">{product.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
