import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Home = () => (
  <div className={styles.container}>
    
    {/* HERO */}
    <section className={styles.hero}>
      <h1 className={styles.title}>Bienvenido a Kafëa</h1>
      <p className={styles.subtitle}>
        El aroma, la esencia y la pureza del café artesanal.
      </p>

      <Link to="/products" className={styles.heroButton}>
        Ver Productos
      </Link>
    </section>

    {/* DESTACADOS */}
    <section className={styles.featured}>
      <h2 className={styles.sectionTitle}>Destacados</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Café de Colombia</h3>
          <p>Notas afrutadas y balance perfecto.</p>
        </div>

        <div className={styles.card}>
          <h3>Café de Brasil</h3>
          <p>Cuerpo intenso, aroma dulce y tostado natural.</p>
        </div>

        <div className={styles.card}>
          <h3>Café de Kenia</h3>
          <p>Personalidad cítrica y sabor profundo.</p>
        </div>
      </div>
    </section>

  </div>
);

export default Home;