import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/Navbar/NavBar";
// import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import MLListContainer from "./components/MLListContainer/MLListContainer";
// import MLDataGet from "./components/MLListContainer/MLDataGet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "./components/Form/Form";

const App = () => {
  const commerceName = "PedidoLibre";

  const greeting = "Welcome to PedidoLibre!! ";

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MyNavbar name={commerceName} logo={logo} />
          <Link to="/form" className="Option">
            {" "}
            Form{" "}
          </Link>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={greeting} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting={greeting} />}
            />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />

            <Route path="*" element={<h1>404 NOT FOUND</h1>} />

            <Route path="/form" element={<Form />} />

            {/* <Route path="/MLGet" element={<MLDataGet />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
