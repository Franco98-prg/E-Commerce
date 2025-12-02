import styles from "./style.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>QUEREMOS HACER ESPECIAL TU DÍA</h1>

      <p className={styles.text}>
        Somos más que una Kafëa, nuestra búsqueda reside en darle valor a toda nuestra cadena productiva, tostando nuestro propio grano de café desde fincas específicas, potenciando los sabores de nuestra carta de pastelería e innovando en nuestra propuesta gastronómica.
      </p>

      <p className={styles.text}>
        Somos clientes que buscamos algo distinto por eso trabajamos constantemente en capacitarnos y en brindar una atención cálida y cercana que te haga sentir que Kafëa, es el lugar donde iniciar tu día, donde relajarte después de las tareas diarias y porque no donde escribir un pedacito de la historia de tu vida.
      </p>

      <p className={styles.text}>
        Te invitamos a ser parte de nuestra historia, a explorar los sabores que guardamos y a ser testigo de cómo podemos transformarnos en un ritual cotidiano, en un instante sublime.
      </p>
    </div>
  );
};

export default About;