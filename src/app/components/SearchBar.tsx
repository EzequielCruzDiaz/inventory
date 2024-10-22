import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
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
