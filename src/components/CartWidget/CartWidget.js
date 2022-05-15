import "./CartWidget.css";

import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = (props) => {
  const { getQuantity } = useContext(CartContext);

  return (
    <IconButton
      className="shoppingCart"
      aria-label="Show cart items"
      color="primary"
    >
      <Badge badgeContent={getQuantity()} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
