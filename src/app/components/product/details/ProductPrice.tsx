type ProductPriceProps = {
  price: number;
};

export default function ProductPrice({ price }: ProductPriceProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-2xl font-bold text-gray-900">${price}</span>
      <span className="text-sm text-gray-500">USD</span>
    </div>
  );
}
