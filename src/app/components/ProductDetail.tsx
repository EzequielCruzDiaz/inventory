import styles from "../styles/ProductDetail.module.css";
import { ProductDetailprops } from "../types/products";

export default function ProductDetail({ product, onBack }: ProductDetailprops) {
  console.log("Created At:", product.createdAt);

  return (
    <div className={styles.detailView}>
      <h2 className={styles.productName}>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className={styles.detailImage}
      />
      <p className={styles.description}>{product.description}</p>
      <p className={styles.category}>
        <strong>Category:</strong> {product.category}
      </p>

      <button onClick={onBack} className={styles.backButton}>
        Back to Products
      </button>
    </div>
  );
}
