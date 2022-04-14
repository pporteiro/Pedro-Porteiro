import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../utils/getItems";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getItems(categoryId)
      .then((prod) => {
        setProducts(prod);
      })
      .catch((error) => console.log(error, "error"))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="ItemsListContainer">
      {loading ? (
        <div className="pos-center">
          <Loader />
        </div>
      ) : products ? (
        <ItemList products={products} />
      ) : (
        <h1>No products to show</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
