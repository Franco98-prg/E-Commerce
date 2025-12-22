import { createContext, useState } from "react";


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      // Si ya está, sumamos la cantidad
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      // Si no está, lo agregamos
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Remover un ítem
  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  // Vaciar todo
  const clearCart = () => {
    setCart([]);
  };

  // Ver si existe en el carrito
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  // Cantidad total de productos en el icono
  const totalQuantity = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  // Precio total de la compra
  const totalAmount = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export { CartContext, CartProvider };