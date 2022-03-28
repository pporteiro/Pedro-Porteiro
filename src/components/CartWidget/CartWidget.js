import "./CartWidget.css";

import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const CartWidget = (props) => {
  return (
    <IconButton
      className="shoppingCart"
      aria-label="Show cart items"
      color="primary"
      href="#cart/"
    >
      <Badge badgeContent={2} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
