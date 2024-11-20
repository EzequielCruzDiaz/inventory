import React from "react";
import Link from "next/link";
import type { Product } from "@/app/types/products";
import ProductImage from "@/app/components/product/details/ProductImage";
import { FaShoppingCart, FaTag } from "react-icons/fa";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative">
          <ProductImage image={product.image} title={product.title} />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-grow">
              {product.title}
            </h2>
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full flex items-center">
              <FaTag className="mr-1" />
              {product.category}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </p>
            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center">
              <FaShoppingCart className="mr-1" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
