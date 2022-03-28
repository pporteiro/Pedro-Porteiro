import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";

const ItemListContainer = (props) => {
  return <div className="ItemsList">{props.greeting}</div>;
};

export default ItemListContainer;
