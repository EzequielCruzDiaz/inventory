import type { Product } from "@/app/types/products";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import BackButton from "./BackButton";

export type ProductDetailProps = {
  product: Product;
  onBack: () => void;
};

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-8">
        <ProductImage image={product.image} title={product.title} />
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <ProductInfo
              title={product.title}
              category={product.category}
              description={product.description}
            />
            <ProductPrice price={product.price} />
          </div>
          <BackButton onBack={onBack} />
        </div>
      </div>
    </div>
  );
}
