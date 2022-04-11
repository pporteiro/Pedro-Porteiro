import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/Navbar/NavBar";
// import Button from "./components/Button/Button";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import MLListContainer from "./components/MLListContainer/MLListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const commerceName = "PedidoLibre";

  // const myFunction = () => {
  //   console.log("Click!!");
  // };

  const greeting = "Welcome to PedidoLibre!! ";

  return (
    <>
      <div className="App">
<<<<<<< HEAD
        <MyNavbar name={commerceName} logo={logo} />
        {/* <ItemListContainer greeting={greeting} /> */}
        <ItemDetailContainer />

        {/* <MLListContainer /> */}
=======
        <BrowserRouter>
          <MyNavbar name={commerceName} logo={logo} />
          <Routes>
            {/* <Route path="/" element={<h1>HOME</h1>} /> */}
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
          </Routes>
        </BrowserRouter>
>>>>>>> Router

        {/* <Button callback={myFunction} label={"Boton"} /> */}
      </div>
    </>
  );
};

export default App;
