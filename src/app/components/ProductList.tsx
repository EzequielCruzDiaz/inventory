import Image from "next/image";
import styles from "../styles/ProductList.module.css";
import { ProductsUser } from "@/app/types/products";

type ProductListProps = {
  products: ProductsUser[];
  onProductClick: (product: ProductsUser) => void;
};

export default function ProductList({
  products,
  onProductClick,
}: ProductListProps) {
  return (
    <div className={styles.grid}>
      {products.length > 0 ? (
        products?.map((product: ProductsUser) => (
          <div
            key={product.id}
            className={styles.card}
            onClick={() => onProductClick(product)}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.description}>
                {product.description.slice(0, 60)}...
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
}
