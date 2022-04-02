import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/Navbar/NavBar";
import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

const App = () => {
  const commerceName = "Pedidos Libre";

  const myFunction = () => {
    console.log("Click!!");
  };

  return (
    <>
      <div className="App">
        <MyNavbar name={commerceName} logo={logo} />
        <ItemListContainer />
        <Button callback={myFunction} label={"Boton"} />
      </div>
    </>
  );
};

export default App;
