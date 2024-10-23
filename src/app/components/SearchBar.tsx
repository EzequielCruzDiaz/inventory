import styles from "../styles/SearchBar.module.css";
import { searchBarProps } from "../types/products";

export default function SearchBar({ value, onChange }: searchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={onChange}
      className={styles.searchBar}
    />
  );
}
