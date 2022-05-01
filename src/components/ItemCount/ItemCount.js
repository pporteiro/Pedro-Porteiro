import "./ItemCount.css";
import { useState, useEffect } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("cambio el count");
    setCount(initial);
  }, [initial]);

  const changeCounter = (condition) => {
    if (condition === "-") {
      setCount(count - 1);
    } else if (condition === "+") {
      setCount(count + 1);
    } else {
      console.log(`Something went wrong ${condition} is not recognised.`);
    }
  };

  return (
    <div className="">
      {stock > 1 ? (
        <>
          <ButtonGroup className="mb-2">
            <Button
              className="btn-left"
              onClick={() => {
                if (count > 1) {
                  changeCounter("-");
                }
              }}
            >
              -
            </Button>

            <Button className="disabled">{count}</Button>

            <Button
              className="btn-right"
              onClick={() => {
                if (count < stock) changeCounter("+");
              }}
            >
              +
            </Button>
          </ButtonGroup>
          <br />
        </>
      ) : (
        <br />
      )}

      {stock > 0 ? (
        <ButtonGroup>
          <Button
            onClick={() => {
              if (count <= stock) onAdd(count);
            }}
          >
            Add to cart
          </Button>
        </ButtonGroup>
      ) : (
        <p className="text-red-500">Out of stock</p>
      )}
    </div>
  );
};

export default ItemCount;
