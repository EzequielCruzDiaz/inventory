import styles from "../styles/ProductDetail.module.css";

export default function ProductDetail({ product, onBack }) {
  return (
    <div className={styles.detailView}>
      <button onClick={onBack} className={styles.backButton}>
        Back to Products
      </button>
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
      <p className={styles.date}>
        <strong>Created At:</strong>{" "}
        {new Date(product.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
