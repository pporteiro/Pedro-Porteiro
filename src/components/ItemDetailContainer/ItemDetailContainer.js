import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../utils/getItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

//  === FIREBASE ===
import { firestoredb } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    // getItemById(productId)
    //   .then((prod) => {
    //     setProduct(prod);
    //   })
    //   .catch((error) => console.log(error, "error"))
    //   .finally(() => {
    //     setLoading(false);
    //   });

    console.log(productId);
    getDoc(doc(firestoredb, "products", productId))
      .then((response) => {
        console.log("Respuesta: ", response);
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .catch((error) => console.log(error, "error"))
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productId]);

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
