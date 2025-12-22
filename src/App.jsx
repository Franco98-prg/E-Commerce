import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ItemListContainer from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";


import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

//cart
import Cart from "./components/containers/Cart";
import { CartProvider } from "./context/CartContext.jsx";
import Checkout from "./components/containers/Checkout";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        
        <Header />
        
        <main style={{ padding: 20 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <Footer />
        
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;