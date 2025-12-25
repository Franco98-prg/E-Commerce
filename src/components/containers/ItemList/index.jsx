

import { Link } from "react-router-dom";
import styles from "./style.module.css";

const ItemList = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.image} alt={product.name} className={styles.img} />
          {/* <img src={`/Products/${product.image}`}  alt={product.name} className={styles.itemImg} /> */}
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>${product.price}</p>

          <Link to={`/product/${product.id}`}>
            <button className={styles.button}>Ver detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;