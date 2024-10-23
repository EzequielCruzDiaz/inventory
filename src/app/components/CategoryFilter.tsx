import styles from "../styles/Categories.module.css";
import { categoryFilterProps } from "../types/products";

export default function CategoryFilter({
  categories,
  value,
  onChange,
}: categoryFilterProps) {
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
