import { FaTag } from "react-icons/fa";

type ProductInfoProps = {
  title: string;
  category: string;
  description: string;
};

export default function ProductInfo({
  title,
  category,
  description,
}: ProductInfoProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <div className="flex items-center space-x-2">
        <FaTag className="w-4 h-4 text-gray-500" />
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
}
