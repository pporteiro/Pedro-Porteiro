import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/Navbar/NavBar";
// import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
// import MLListContainer from "./components/MLListContainer/MLListContainer";
// import MLDataGet from "./components/MLListContainer/MLDataGet";
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

              {/* <Route path="/MLGet" element={<MLDataGet />} /> */}
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
    </>
  );
};

export default App;
