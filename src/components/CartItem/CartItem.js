import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartCount from "../CartCount/CartCount";

const CartItem = ({
  id,
  quantity,
  category,
  price,
  title,
  pictureUrl,
  stock,
}) => {
  const { removeItem, getQuantity, addItem } = useContext(CartContext);

  const handleAdd = (count) => {
    console.log(`Added ${count} items to cart!`);

    const objProd = {
      id,
      title,
      price,
      pictureUrl,
      category,
      quantity: count,
    };

    addItem(objProd, stock);
  };
  // return (
  //   <>
  //     {quantity} -- {title} - ${getTotalPrice(id)}
  //     <button className={"btn btn-primary"} onClick={() => removeItem(id)}>
  //       X
  //     </button>
  //   </>
  // );

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={pictureUrl} alt={title} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">{category}</span>
          <button
            onClick={() => removeItem(id)}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </button>
        </div>
      </div>
      {/* <div className="flex justify-center w-1/5"> */}
      <CartCount onAdd={handleAdd} stock={stock} initial={getQuantity(id)} />

      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${price * quantity}
      </span>
    </div>
  );
};

export default CartItem;
