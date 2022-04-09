import { useState, useEffect } from "react";
import { getItems, getItemById } from "../../utils/getItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     getItemById(1)
  //       .then((item) => {
  //         setProduct(item);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, []);

  useEffect(() => {
    getItemById(1)
      .then((prod) => {
        setProduct(prod);
      })
      .catch((error) => console.log(error, "error"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
