import { useState, useEffect } from "react";
import { getItems, getItemById } from "../../utils/getItems";
import ItemDetail from "../ItemDetail/ItemDetail";

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
    getItems()
      .then((prod) => {
        setProduct(prod);
      })
      .catch((error) => console.log(error, "error"));
  }, []);

  return (
    <div className="ItemsDetailContainer">
      {/* <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} /> */}
      <ItemDetail products={product} />
    </div>
  );
};

export default ItemDetailContainer;
