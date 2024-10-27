import Image from "next/image";
import { ProductsUser, ProductListProps } from "@/app/types/products";

export default function ProductList({
  products,
  onProductClick,
}: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products?.map((product: ProductsUser) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 hover:shadow-lg"
            onClick={() => onProductClick(product)}
          >
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-600 font-bold">
                {product.description.slice(0, 60)}...
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-600">
          No hay productos disponibles
        </p>
      )}
    </div>
  );
}
