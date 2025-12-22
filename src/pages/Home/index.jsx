import { Link } from "react-router-dom"; // Importamos Link para el botón "Ver todo"
import ItemListContainer from "../../components/containers/ItemListContainer";
import Button from "../../components/common/Button"; // Si tienes un botón común
import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Sección Hero */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Bienvenido a Kafëa</h1>
        <p className={styles.subtitle}>
          El mejor café de especialidad, directo a tu taza.
        </p>
      </section>

      {/* Sección Destacados */}
      <section className={styles.catalogSection}>
        <h2 className={styles.sectionTitle}>Productos Destacados</h2>
        
        {/* solo 4 productos */}
        <ItemListContainer isHome={true} />
        
        
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/products">
            <Button variant="primary">Ver Catálogo Completo</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;