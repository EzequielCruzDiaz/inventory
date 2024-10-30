import Image from "next/image";
import { ProductsUser } from "../types/products";
import { FiDollarSign, FiTag } from "react-icons/fi";

export type ProductListProps = {
  products: ProductsUser[];
  onProductClick: (product: ProductsUser) => void;
};

export default function ProductList({
  products,
  onProductClick,
}: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products?.map((product: ProductsUser) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={() => onProductClick(product)}
          >
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start gap-2">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {product.title}
                </h2>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full whitespace-nowrap">
                  {product.category || "General"}
                </span>
              </div>
              <p className="text-gray-600 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <div className="flex items-center text-lg font-bold text-gray-900">
                  <FiDollarSign className="mr-1" />
                  {product.price || "N/A"}
                </div>
                <span className="flex items-center text-sm text-gray-500">
                  <FiTag className="mr-1" />
                  {product.id || "En stock"}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl shadow-md">
          <svg
            className="w-12 h-12 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <p className="text-xl font-semibold text-gray-800">
            No hay productos disponibles
          </p>
          <p className="text-gray-500 mt-2">
            Intenta con otros filtros o vuelve más tarde
          </p>
        </div>
      )}
    </div>
  );
}
