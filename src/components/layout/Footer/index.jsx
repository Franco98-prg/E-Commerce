import styles from "./style.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h3 className={styles.brand}>Kafëa</h3>

        <p className={styles.text}>
          Café de especialidad. Calidad en cada detalle.
        </p>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Kafëa — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;