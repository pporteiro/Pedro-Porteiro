import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { LoadData } from "../../utils/getItems";
import ItemList from "../ItemList";
import Loader from "../Loader";

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

  console.log(products);

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
          <h1>No products to show for the category ({categoryId})</h1>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
