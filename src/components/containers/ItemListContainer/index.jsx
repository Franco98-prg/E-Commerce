import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import CategoryFilter from "../CategoryFilter";

import { db } from "../../../firebase/config";
import { collection, getDocs, query, where, limit } from "firebase/firestore"; 


const ItemListContainer = ({ isHome = false }) => { 
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const itemsRef = collection(db, "items");
    let q;

    if (categoryId) {
      //  Filtrar por categoría
      q = query(itemsRef, where("category", "==", categoryId));
    } else if (isHome) {
      q = query(itemsRef, limit(4));
    } else {

      q = itemsRef;
    }

    getDocs(q)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        setItems(products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, [categoryId, isHome]); // dependencia para home

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando...</p>;

  return (
    <div style={{ paddingTop: "20px" }}>

      {!isHome && <CategoryFilter />}
      
      {items.length === 0 ? (
        <p style={{ textAlign: "center" }}>No hay productos.</p>
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
};

export default ItemListContainer;