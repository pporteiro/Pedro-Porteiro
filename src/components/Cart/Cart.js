import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

import CartItem from "../CartItem";
import Loader from "../Loader/Loader";

// Firebase imports
import {
  writeBatch,
  getDocs,
  query,
  where,
  collection,
  documentId,
  addDoc,
} from "firebase/firestore";
import { firestoredb } from "../../services/firebase";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState([]);

  // Modal states
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const { getTotalPrice, getQuantity, cart } = useContext(CartContext);

  const taxes = 0.17;

  const createOrder = () => {
    setLoading(true);

    let errors = [];

    const objOrder = {
      items: cart,
      buyer: {
        name: "Pedro",
        phone: "123456789",
        email: "pporteiro22@gmail.com",
      },
      total: getTotalPrice() * (1 + taxes),
      date: new Date(),
    };

    const ids = cart.map((prod) => prod.id);

    const batch = writeBatch(firestoredb);

    const collectionRef = collection(firestoredb, "products");

    const outOfStock = [];

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = cart.find(
            (prod) => prod.id === doc.id
          )?.quantity;

          console.log(dataDoc);
          console.log(prodQuantity);

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            errors.push(`Not enough stock for ${dataDoc.title}`);
            console.log("ERROR, NO STOCK");
            setErrors(errors);
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(firestoredb, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({
            name: "outOfStockError",
            products: outOfStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();
        console.log(`Order ID: ${id}`);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div>
        <h1>Generating order...</h1>;
        <div className="pos-center">
          <Loader />
        </div>
      </div>
    );
  }

  const checkoutHandler = () => {
    console.log(
      `Checkout: ${getQuantity()} items in cart. Total price: ${(
        getTotalPrice() *
        (1 + taxes)
      ).toFixed(2)}`
    );
    // alert(
    //   `Checkout: ${getQuantity()} items in cart. Total price: ${(
    //     getTotalPrice() *
    //     (1 + taxes)
    //   ).toFixed(2)}`
    // );
    console.log(modalOn);
    setModalOn(true);
  };

  const promoCodeHandler = () => {
    // alert(`Invalid code. (${input.toString().replace(/[._-\s,]/g, "")})`);
    alert(`Invalid code. (${input.toString().replace(/[^a-zA-Z0-9]/g, "")})`);
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="bg-gray-100">
          <div className="container mx-auto mt -10">
            <div className="flex shadow-md my- 10">
              <div className="w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">
                    {getQuantity()} Items
                  </h2>
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    Product Details
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Price
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Total
                  </h3>
                </div>

                {cart.map((prod) => (
                  <CartItem key={prod.id} {...prod} />
                ))}

                <Link
                  to="/"
                  className="float-left inline-flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>

              <div id="summary" className="w-1/4 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Items {getQuantity()}
                  </span>
                  <span className="font-semibold text-sm">
                    ${getTotalPrice()}
                  </span>
                </div>
                <div className="flex justify-between mt-10">
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Taxes ( {taxes * 100}% )
                  </label>
                  <span className="font-semibold text-sm">
                    ${(getTotalPrice() * taxes).toFixed(2)}
                  </span>
                </div>
                {/* <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div> */}
                <div className="py-10">
                  <label
                    htmlFor="promo"
                    className="font-semibold inline-block mb-3 text-sm uppercase"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter your code"
                    className="p-2 text-sm w-full"
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                  onClick={() => promoCodeHandler()}
                >
                  Apply
                </button>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>${(getTotalPrice() * (1 + taxes)).toFixed(2)}</span>
                  </div>
                  <button
                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                    // onClick={() => checkoutHandler()}
                    onClick={() => createOrder()}
                  >
                    Checkout
                  </button>
                  <button
                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                    onClick={() => checkoutHandler()}
                    // onClick={() => createOrder()}
                  >
                    Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2> Your Cart is empty </h2>
          <Link className="btn btn-primary" to="/">
            Start shopping
          </Link>
        </div>
      )}

      {modalOn && (
        <CheckoutModal setModalOn={setModalOn} setChoice={setChoice} />
      )}
    </>
  );
};

export default Cart;
