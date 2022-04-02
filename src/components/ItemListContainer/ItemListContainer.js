import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemListContainer = (props) => {
  const [count, setCount] = useState(1);

  const onAdd = (condition) => {
    if (condition === "-") {
      setCount(count - 1);
    }
    if (condition === "+") {
      setCount(count + 1);
    }
  };
  const stock = 6;
  const initial = 1;

  return (
    <div className="ItemsList">
      <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
    </div>
  );
};

export default ItemListContainer;
