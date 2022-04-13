import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { getItems } from "../../utils/getItems";
import ItemList from "../ItemList/ItemList";
import { getCategories } from "../../utils/getItems";

import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    getItems(categoryId)
      .then((prod) => {
        setProducts(prod);
      })
      .catch((error) => console.log(error, "error"));
  }, [categoryId]);

  const [category, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories.find((c) => c.id === categoryId));
    });
  });

  return (
    <div className="ItemsListContainer">
      {category ? <h1>{category.description}</h1> : <h1>All items</h1>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
