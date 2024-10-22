import styles from "../styles/ProductList.module.css";
import { ProductsUser } from "@/app/types/products";

export default function ProductList({ products, onProductClick }) {
  return (
    <div className={styles.grid}>
      {products?.map((product: ProductsUser) => (
        <div
          key={product.id}
          className={styles.card}
          onClick={() => onProductClick(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.description}>
              {product.description.slice(0, 60)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
