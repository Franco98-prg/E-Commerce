import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import styles from "./style.module.css";
import cartIcon from "../../../assets/cart3.svg"; 

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  const quantity = totalQuantity();

  return (
    <Link to="/cart" className={styles.widget}>
      <img src={cartIcon} alt="Carrito" className={styles.icon} />
      
      {quantity > 0 && <span className={styles.badge}>{quantity}</span>}
    </Link>
  );
};

export default CartWidget;