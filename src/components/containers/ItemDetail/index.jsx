import { useState } from "react";
import { Link } from "react-router-dom";

import Counter from "../../common/Counter";
import Button from "../../common/Button";
import styles from "./style.module.css";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>No se encontró el producto.</p>;

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: ${product.name} x ${quantity}`);
    alert(`Agregado al carrito: ${product.name} x ${quantity}`);
  };

  return (
    <div className={styles.container}>

      <div className={styles.card}>

        <img src={product.image} alt={product.name} className={styles.detailImg} />

        <h2 className={styles.title}>{product.name}</h2>

        <p className={styles.description}>{product.description}</p>

        <p className={styles.price}>Precio: ${product.price}</p>

        <p className={styles.stock}>Stock disponible: {product.stock}</p>

        <div className={styles.actions}>
          <Counter
            initial={1}
            min={1}
            max={product.stock}
            onChange={(value) => setQuantity(value)}
          />

          <Button callback={handleAddToCart} variant="primary">
            Agregar al carrito
          </Button>
        </div>

        <Link to="/products" className={styles.backButton}>
          Volver al catálogo
        </Link>
      </div>

    </div>
  );
};

export default ItemDetail;

