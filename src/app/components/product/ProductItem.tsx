import React from "react";
import type { Product } from "@/app/types/products";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li key={product.id}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} width="100" />
    </li>
  );
};

export default ProductItem;
