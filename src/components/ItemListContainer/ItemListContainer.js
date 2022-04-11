import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { getItems } from "../../utils/getItems";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  // const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  // const onAdd = (c) => {
  //   console.log(`Added ${c} items to cart!`);
  // };

  useEffect(() => {
    getItems(categoryId)
      .then((prod) => {
        setProducts(prod);
      })
      .catch((error) => console.log(error, "error"));
  }, [categoryId]);

  // const stock = 10;
  // const initial = 1;

  return (
    <div className="ItemsListContainer">
      {/* <ItemCount onAdd={onAdd} stock={stock} initial={initial} /> */}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
