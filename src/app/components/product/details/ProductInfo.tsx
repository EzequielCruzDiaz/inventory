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
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
        {category}
      </span>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
}
