import React, { useMemo } from "react";
import type { Product } from "@/app/types/products";
import ProductItem from "./ProductItem";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  const renderedProducts = useMemo(() => {
    return products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  }, [products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 rounded-lg">
      {products && products.length > 0 ? (
        renderedProducts
      ) : (
        <p className="col-span-full text-center text-gray-600">
          No hay productos disponibles
        </p>
      )}
    </div>
  );
}
