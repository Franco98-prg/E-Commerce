import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../services/products";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;