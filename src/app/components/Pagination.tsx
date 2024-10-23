import styles from "../styles/Pagination.module.css";
import { PaginationProps } from "../types/products";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={styles.pageButton}
      >
        Previous
      </button>
      <span className={styles.pageInfo}>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={styles.pageButton}
      >
        Next
      </button>
    </div>
  );
}
