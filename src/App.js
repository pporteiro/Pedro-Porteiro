import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  const commerceName = "PedidoLibre";

  const greeting = "Welcome to PedidoLibre!! ";

  return (
    <>
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <MyNavbar name={commerceName} logo={logo} />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={greeting} />}
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer greeting={greeting} />}
              />
              <Route
                path="/item/:productId"
                element={<ItemDetailContainer />}
              />

              <Route path="*" element={<h1>404 NOT FOUND</h1>} />

              <Route path="/cart" element={<Cart />} />

              <Route
                path="/checkout-success"
                element={<h1>Order completed!!!</h1>}
              />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
    </>
  );
};

export default App;
