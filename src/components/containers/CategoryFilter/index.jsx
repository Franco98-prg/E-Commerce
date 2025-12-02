import { Link, useParams } from "react-router-dom";
import styles from "./style.module.css";

const CategoryFilter = () => {
  const { categoryId } = useParams();

  return (
    <div className={styles.container}>
      <Link
        to="/products"
        className={`${styles.button} ${!categoryId ? styles.active : ""}`}
      >
        Todo
      </Link>

      <Link
        to="/category/Granos"
        className={`${styles.button} ${categoryId === "Granos" ? styles.active : ""}`}
      >
        Granos
      </Link>

      <Link
        to="/category/Tea"
        className={`${styles.button} ${categoryId === "Tea" ? styles.active : ""}`}
      >
        Tea
      </Link>

      <Link
        to="/category/Merch"
        className={`${styles.button} ${categoryId === "Merch" ? styles.active : ""}`}
      >
        Merch
      </Link>
    </div>
  );
};

export default CategoryFilter;