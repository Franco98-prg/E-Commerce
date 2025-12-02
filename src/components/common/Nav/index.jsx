

import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>Kafëa</Link>

      <div className={styles.links}>
        <Link to="/products" className={styles.link}>Productos</Link>
        <Link to="/about" className={styles.link}>Sobre Nosotros</Link>
        <Link to="/contact" className={styles.link}>Contacto</Link>
      </div>
    </nav>
  );
};

export default Nav;