import "bootstrap/dist/css/bootstrap.css";
import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ShoppingCart } from "@material-ui/icons";
// import { IconButton } from "@material-ui/core";

import CartWidget from "../CartWidget/CartWidget";

const MyNavbar = (props) => {
  console.log(props);
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect>
      <Navbar.Brand>
        <img src={props.logo} width="40px" height="40px" />
        {props.name}
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <NavDropdown title="Products">
            <NavDropdown.Item href="#products/cars">Cars</NavDropdown.Item>
            <NavDropdown.Item href="#products/electronics">
              Electronics
            </NavDropdown.Item>
            <NavDropdown.Item href="#products/realstate">
              Real State
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#products/promotions">
              Promotions
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          <Nav.Link href="#sign-in">Sign In</Nav.Link>
        </Nav>

        <Nav>
          <CartWidget />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
