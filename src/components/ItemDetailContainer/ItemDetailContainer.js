import "./ItemDetailContainer.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Loader from "../Loader";

import { useAsync } from "../../hooks/useAsync";
import { getProduct } from "../../services/firebase/firestore";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useAsync(
    setLoading,
    () => getProduct(productId),
    setProduct,
    () => console.log("Error in ItemDetailContainer"),
    [productId]
  );

  return (
    <div className="ItemsDetailContainer">
      {loading ? (
        <div className="pos-center">
          <Loader />
        </div>
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <h1>El producto no existe</h1>
      )}
    </div>
  );
};

export default ItemDetailContainer;
