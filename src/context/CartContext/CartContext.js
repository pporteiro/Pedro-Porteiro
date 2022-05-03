import { createContext, useState } from "react";
import { checkStock } from "./helper";
const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [errors, setErrors] = useState([]);
  console.log(cart);

  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [userErrors, setUserErrors] = useState([]);

  const loadUserData = ({ name, email, phone }) => {
    let errors = [];

    const obj = {
      name,
      email,
      phone,
    };

    if (name !== "" && email !== "" && phone !== "") {
      setUser(obj);
    } else {
      errors.push({ name: `Empty field detected.`, obj });
    }

    if (errors.length > 0) console.log(errors);
  };

  const addItem = (productToAdd, stock) => {
    let errors = [];

    if (isInCart(productToAdd?.id)) {
      const newCart = cart.map((item) => {
        if (item.id === productToAdd.id) {
          // console.log("Update quantity");
          const enoughStock = checkStock(productToAdd.quantity, stock);

          if (!enoughStock) {
            errors.push(`Not enough stock for ${item.title}`);
            setErrors(errors);
            return item;
          }

          return { ...item, quantity: productToAdd.quantity };
        }
        return item;
      });

      if (errors.length === 0) {
        setCart(newCart);
        setErrors([]);
      }
    } else {
      setCart([...cart, ...(productToAdd ? [productToAdd] : [])]);
    }
  };

  const getTotalPrice = (id) => {
    if (!id) {
      let total = 0;
      cart.forEach((prod) => (total += prod.price * prod.quantity));
      return total;
    } else {
      const item = cart.find((prod) => prod.id === id);
      return item.price * item.quantity;
    }
  };

  const removeItem = async (id) => {
    const products = cart.filter((prod) => prod.id !== id);
    await setCart(products);
  };

  const getQuantity = (id) => {
    if (id) {
      // console.log("Entro cart.", cart);
      return cart.find((prod) => prod.id === id)?.quantity;
      // const item = cart.find((prod) => prod.id === id);
      // return item.quantity;
      // console.log("Item already in cart. Quantity:", item.quantity);
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

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        getQuantity,
        getTotalPrice,
        isInCart,
        removeItem,
        errors,
        clearCart,
        user,
        loadUserData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
