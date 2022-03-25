import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/Navbar/NavBar";
import Button from "./components/Button/Button";

const App = () => {
  const commerceName = "Pedidos Libre";

  const myFunction = () => {
    console.log("Click");
  };

  return (
    <>
      <div className="App">
        <MyNavbar name={commerceName} logo={logo} />
        <Button callback={myFunction} label={"Boton"} />
      </div>
    </>
  );
};

export default App;
