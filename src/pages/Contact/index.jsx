import styles from "./style.module.css";

const Contact = () => {
  return (
    <div className={styles.page}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Contacto</h1>
        <p className={styles.subtitle}>
          Estamos para ayudarte. Completá el formulario o usá los medios de contacto.
        </p>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className={styles.main}>
        
        {/* FORMULARIO */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Enviar un mensaje</h2>

          <form className={styles.form}>
            
            <div className={styles.field}>
              <label>Nombre completo</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" required />
            </div>

            <div className={styles.field}>
              <label>Asunto</label>
              <input type="text" placeholder="Consulta, soporte, pedido..." required />
            </div>

            <div className={styles.field}>
              <label>Mensaje</label>
              <textarea rows="5" placeholder="Escribí tu mensaje..." required></textarea>
            </div>

            <button type="submit" className={styles.button}>
              Enviar
            </button>

          </form>
        </div>

        {/* INFORMACIÓN DE CONTACTO */}
        <div className={styles.infoCard}>
          <h2 className={styles.infoTitle}>Información</h2>

          <div className={styles.infoBlock}>
            <h3>Email</h3>
            <p>contacto@kafea.com</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>Horario</h3>
            <p>Lunes a Viernes</p>
            <p>9:00 — 18:00 hs</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>Ubicación</h3>
            <p>Buenos Aires, Argentina</p>
            <p>Av. Aroma del Café 123</p>
          </div>

        </div>
      </section>

      {/* CIERRE */}
      <section className={styles.footerText}>
        <p>Respondemos dentro de las próximas 24 horas hábiles.</p>
      </section>

    </div>
  );
};

export default Contact;