import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
// import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { getItems } from "../../utils/getItems";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    getItems(categoryId)
      .then((prod) => {
        setProducts(prod);
      })
      .catch((error) => console.log(error, "error"));
  }, [categoryId]);

  const onAdd = (condition) => {
    if (condition === "-") {
      setCount(count - 1);
    }
    if (condition === "+") {
      setCount(count + 1);
    }
    if (condition === "add") {
      console.log(`Added ${count} items to cart`);
    }
  };
  const stock = 10;
  const initial = 1;

  return (
    <div className="ItemsListContainer">
      {/* <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} /> */}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
