import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ({ id, quantity, title }) => {
  const { getTotalPrice, removeItem } = useContext(CartContext);

  return (
    <>
      {quantity} -- {title} - ${getTotalPrice(id)}
      <button className={"btn btn-primary"} onClick={() => removeItem(id)}>
        X
      </button>
    </>
  );
};

export default CartItem;
