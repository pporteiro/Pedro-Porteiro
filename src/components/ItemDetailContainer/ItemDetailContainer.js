import { useState, useEffect } from "react";
import { getItemById } from "../../utils/getItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getItemById(productId)
      .then((prod) => {
        setProduct(prod);
      })
      .catch((error) => console.log(error, "error"))
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="ItemsDetailContainer">
      {loading ? (
        <h1>Cargando...</h1>
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <h1>El producto no existe</h1>
      )}
      {/* <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} /> */}
      {/* <ItemDetail product={} /> */}
    </div>
  );
};

export default ItemDetailContainer;
