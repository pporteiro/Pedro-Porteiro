import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (productToAdd) => {
    if (isInCart(productToAdd.id)) {
      console.log("Update quantity");
      const np = updateQuantity(productToAdd);
      removeItem(productToAdd.id);
      setCart([...cart, np]);
    } else {
      setCart([...cart, productToAdd]);
    }
  };

  const updateQuantity = (p) => {
    const q = getQuantity(p.id);
    const q2 = p.quantity + q;
    const newProduct = { ...p, quantity: q2 };

    return newProduct;
  };

  const removeItem = (id) => {
    const products = cart.filter((prod) => prod.id !== id);
    setCart(products);
  };

  const getQuantity = (id) => {
    if (id) {
      const item = cart.find((prod) => prod.id === id);
      console.log("Item already in cart. Quantity:", item.quantity);
      return item.quantity;
    } else {
      let count = 0;
      cart.forEach((prod) => {
        count += prod.quantity;
      });
      return count;
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantityOfItem = (id) => {
    // id will always be on cart. isInCart will run first always.
    const item = cart.find((prod) => prod.id === id);
    // console.log(item.quantity);
    return item.quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        getQuantity,
        isInCart,
        getQuantityOfItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
