import styles from "./style.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacto</h1>

      <label className={styles.label}>Nombre</label>
      <input type="text" className={styles.input} placeholder="Tu nombre" />

      <label className={styles.label}>Email</label>
      <input type="email" className={styles.input} placeholder="Correo electrónico" />

      <label className={styles.label}>Mensaje</label>
      <textarea className={styles.textarea} rows="4" placeholder="Escribe tu mensaje..." />

      <button className={styles.button}>Enviar</button>
    </div>
  );
};

export default Contact;

