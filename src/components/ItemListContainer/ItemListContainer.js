import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems, LoadData } from "../../utils/getItems";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

//  === FIREBASE ===
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { firestoredb } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(
          collection(firestoredb, "products"),
          where("category", "==", categoryId)
        )
      : query(collection(firestoredb, "products"), orderBy("price", "asc"));

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(products);
        setProducts(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  // useEffect(() => {
  //   setLoading(true);
  //   getItems(categoryId)
  //     .then((prod) => {
  //       setProducts(prod);
  //     })
  //     .catch((error) => console.log(error, "error"))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [categoryId]);

  return (
    <div className="ItemsListContainer">
      {loading ? (
        <div className="pos-center">
          <Loader />
        </div>
      ) : products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div className="pos-center">
          <h1>No products to show</h1>
          <button
            className="bg-red-300 rounded p-2 border-red-700 border-2"
            onClick={() => LoadData(setLoading)}
          >
            Click here to load data
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
