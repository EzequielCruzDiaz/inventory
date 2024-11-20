import type { Product } from "@/app/types/products";
import ProductItem from "./ProductItem";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <ul className="flex flex-wrap gap-16 p-4">
      {products && products.length > 0 ? (
        products.map((product) => (
          <li
            key={product.id}
            className="w-full sm:w-1/1 lg:w-1/6 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <ProductItem product={product} />
          </li>
        ))
      ) : (
        <li className="col-span-full text-center text-gray-600 bg-gray-100 p-6 rounded-lg shadow-md">
          No available Products
        </li>
      )}
    </ul>
  );
}
