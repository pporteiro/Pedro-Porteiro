import { useContext } from "react";
import CartContext from "../../context/CartContext";

import CartItem from "../CartItem";

const Cart = () => {
  const { getTotalPrice, cart } = useContext(CartContext);

  console.log(cart);
  return (
    <>
      <h1> Cart view </h1>
      <h4> On development...</h4>
      <ul>
        {cart.map((prod) => (
          <li key={prod.id}>
            <CartItem {...prod} />
          </li>
        ))}
      </ul>

      {cart.length > 0 ? <h2>Total: {getTotalPrice()}</h2> : <div></div>}
    </>
  );
};

export default Cart;
