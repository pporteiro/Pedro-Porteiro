import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/Navbar/NavBar";
// import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  const commerceName = "PedidoLibre";

  // const myFunction = () => {
  //   console.log("Click!!");
  // };

  const greeting = "Welcome to PedidoLibre!! ";

  return (
    <>
      <div className="App">
        <MyNavbar name={commerceName} logo={logo} />
        {/* <ItemListContainer greeting={greeting} /> */}
        <ItemDetailContainer />

        {/* <Button callback={myFunction} label={"Boton"} /> */}
      </div>
    </>
  );
};

export default App;
