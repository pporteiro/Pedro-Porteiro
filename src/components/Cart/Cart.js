import { useContext } from "react";
import CartContext from "../../context/CartContext";

import Item from "../Item/Item";
const Cart = () => {
  const { getQuantity, cart } = useContext(CartContext);

  console.log(cart);
  return (
    <>
      <h1> Cart view </h1>
      <h4> On development...</h4>
      <ul>
        {cart.map((prod) => (
          // <Item key={prod.id} {...prod} />
          <li>
            {prod.quantity} -- {prod.title} - ${prod.price * prod.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
