import styles from "../styles/Categories.module.css";

export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className={styles.categoryFilter}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
