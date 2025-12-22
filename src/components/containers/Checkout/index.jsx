import { useState, useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { db } from "../../../firebase/config"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Button from "../../common/Button";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const { cart, totalAmount, clearCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // orden de compra
    const order = {
      buyer: buyer,
      items: cart,
      total: totalAmount(),
      date: serverTimestamp(), 
    };

    // Guardar en firebase
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((docRef) => {
        // si se hace con exito, se guarda el id, se limpia el carrito y se muestra un mensaje
        setOrderId(docRef.id);
        clearCart();
      })
      .catch((error) => {
        console.error("Error al crear la orden:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <h2 style={{textAlign: "center", marginTop: 50}}>Generando su orden...</h2>;
  }

  if (orderId) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>¡Gracias por tu compra!</h1>
        <p className={styles.text}>Tu número de orden es:</p>
        <p className={styles.orderId}>{orderId}</p>
        <Link to="/">
          <Button variant="primary">Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  // Si el carrito está vacío, redirigir o avisar
  if (cart.length === 0) {
    return <h2 style={{textAlign: "center", marginTop: 50}}>No hay productos en el carrito.</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Finalizar Compra</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label>Nombre Completo</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleInputChange}
            required
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div className={styles.field}>
          <label>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleInputChange}
            required
            placeholder="Ej: 1122334455"
          />
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
            required
            placeholder="Ej: juan@email.com"
          />
        </div>

        <Button type="submit" variant="success" className={styles.submitBtn}>
          Confirmar Compra
        </Button>
      </form>
    </div>
  );
};

export default Checkout;