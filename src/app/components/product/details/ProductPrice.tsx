import { FaDollarSign } from "react-icons/fa";

type ProductPriceProps = {
  price: number;
};

export default function ProductPrice({ price }: ProductPriceProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center text-2xl font-bold text-green-600">
        <FaDollarSign className="w-6 h-6" />
        <span >{price.toFixed(2)}</span>
      </div>
      <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-2 py-1">
        USD
      </span>
    </div>
  );
}
