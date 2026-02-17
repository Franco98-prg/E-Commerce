import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Button from "../../common/Button";
import styles from "./style.module.css";

const Cart = () => {
  const { cart, totalAmount, removeItem, clearCart } = useContext(CartContext);

  // Si el carrito está vacío, mostramos mensaje y botón para volver
  if (cart.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2>Tu carrito está vacío</h2>
        <p>¿Hecha un vistazo a nuestros productos?</p>
        <Link to="/products">
          <Button variant="primary">Ver productos</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tu Carrito</h1>

      <div className={styles.cartList}>
        {cart.map((prod) => (
          <div key={prod.id} className={styles.cartItem}>
            <div className={styles.info}>
              <img src={product.image} alt={product.name} className={styles.img} />
              <h3>{prod.name}</h3>
              <p>Precio unitario: ${prod.price}</p>
              <p>Cantidad: {prod.quantity}</p>
            </div>
            
            <div className={styles.actions}>
              <p className={styles.subtotal}>Subtotal: ${prod.price * prod.quantity}</p>
              <Button 
                callback={() => removeItem(prod.id)} 
                variant="secondary"
                className={styles.removeBtn}
              >
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <h3 className={styles.total}>Total a pagar: ${totalAmount()}</h3>
        
        <div className={styles.buttons}>
          <Button callback={clearCart} variant="outline">
            Vaciar Carrito
          </Button>
          
          <Link to="/checkout">
            <Button variant="success">Finalizar Compra</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;