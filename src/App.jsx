import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import ItemListContainer from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
