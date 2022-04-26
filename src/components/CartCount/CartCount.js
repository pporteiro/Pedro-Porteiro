import { useState, useEffect } from "react";

const CartCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // console.log("CART!! cambio el count");
    setCount(initial);
  }, [initial]);

  const changeCounter = async (condition) => {
    if (condition === "-") {
      await setCount(count - 1);
      onAdd(count - 1);
    } else if (condition === "+") {
      await setCount(count + 1);
      onAdd(count + 1);
    } else {
      console.log(`Something went wrong ${condition} is not recognised.`);
    }
  };

  return (
    <div className="flex justify-center w-1/5">
      <svg
        onClick={() => {
          if (count > 1) {
            changeCounter("-");
            onAdd(count);
          }
        }}
        className="fill-current text-gray-600 w-3"
        viewBox="0 0 448 512"
      >
        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
      <span className="mx-2 border text-center w-8" type="text">
        {count}
      </span>

      <svg
        onClick={() => {
          if (count < stock) {
            changeCounter("+");
            onAdd(count);
          }
        }}
        className="fill-current text-gray-600 w-3"
        viewBox="0 0 448 512"
      >
        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
    </div>
  );
};

export default CartCount;
