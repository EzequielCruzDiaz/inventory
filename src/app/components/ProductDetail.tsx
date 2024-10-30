import Image from "next/image";
import { Product } from "../types/products";

export type ProductDetailprops = {
  product: Product;
  onBack: () => void;
};

export default function ProductDetail({ product, onBack }: ProductDetailprops) {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {product.title}
              </h2>
              <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">USD</span>
              </div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="mt-8 w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg 
            hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}
