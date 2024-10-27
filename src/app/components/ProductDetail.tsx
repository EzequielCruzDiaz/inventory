import Image from "next/image";
import { ProductDetailprops } from "../types/products";

export default function ProductDetail({ product, onBack }: ProductDetailprops) {
  console.log("Created At:", product.createdAt);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h2>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-gray-700 mb-6">
        <strong>Category:</strong> {product.category}
      </p>
      <button
        onClick={onBack}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Back to Products
      </button>
    </div>
  );
}
