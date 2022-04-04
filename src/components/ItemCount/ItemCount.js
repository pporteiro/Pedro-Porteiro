import { ButtonGroup, Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd, count }) => {
  return (
    <div className="">
      <ButtonGroup className="mb-2">
        <Button
          className="btn-left"
          onClick={() => {
            if (count > initial) {
              onAdd("-");
            }
          }}
        >
          -
        </Button>

        <Button className="disabled">{count}</Button>

        <Button
          className="btn-right"
          onClick={() => {
            if (count < stock) onAdd("+");
          }}
        >
          +
        </Button>
      </ButtonGroup>
      <br />

      <ButtonGroup>
        <Button
          onClick={() => {
            if (count <= stock) onAdd("add");
          }}
        >
          Add to cart
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
