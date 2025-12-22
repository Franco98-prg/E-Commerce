


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";

//FIREBASE
import { db } from "../../../firebase/config.js"; 
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "items", id);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("No existe el documento!");
          setProduct(null);
        }
      })
      .catch((error) => {
        console.error("Error obteniendo el detalle:", error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [id]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando detalle...</p>;
  
  if (!product) return <p style={{ textAlign: "center", marginTop: "20px" }}>Producto no encontrado</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;