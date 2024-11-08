import React from "react";
import Link from "next/link";
import type { Product } from "@/app/types/products";
import ProductImage from "@/app/components/product/details/ProductImage";
interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/product/${product.id}`}>
        <ProductImage image={product.image} title={product.title} />
        <div className="p-4">
          <h2 className="text-base font-medium text-gray-800">
            {product.title}
          </h2>
          <p className="text-xs text-gray-500 mt-1">${product.price}</p>
          <p className="text-xs text-gray-500">{product.category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
