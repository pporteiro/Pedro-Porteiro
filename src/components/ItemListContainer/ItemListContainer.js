import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { LoadData } from "../../utils/getItems";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

import { getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useAsync(
    setLoading,
    () => getProducts(categoryId),
    setProducts,
    () => console.log("Error in ItemListContainer"),
    [categoryId]
  );

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
