import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../../services/products";
import ItemList from "../ItemList";
import CategoryFilter from "../CategoryFilter";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();

        if (mounted) setItems(res);
      } catch (err) {
        console.error(err);
        if (mounted) setItems([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => { mounted = false; };
  }, [categoryId]);

  if (loading)
    return <p>Cargando productos...</p>;
  
  if (!items || items.length === 0) 
    return <p>No se encontraron productos.</p>;

  return (
    <div style={{ paddingTop: "20px" }}>
      <CategoryFilter />
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;