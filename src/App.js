import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/Navbar/NavBar";
import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

const App = () => {
  const commerceName = "PedidoLibre";

  const myFunction = () => {
    console.log("Click!!");
  };

  const greeting = "Welcome to PedidoLibre!! ";

  return (
    <>
      <div className="App">
        <MyNavbar name={commerceName} logo={logo} />
        <ItemListContainer greeting={greeting} />
        {/* <Button callback={myFunction} label={"Boton"} /> */}
      </div>
    </>
  );
};

export default App;
