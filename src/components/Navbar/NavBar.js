import "bootstrap/dist/css/bootstrap.css";
import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getCategories } from "../../utils/getItems";

// import { ShoppingCart } from "@material-ui/icons";
// import { IconButton } from "@material-ui/core";

import CartWidget from "../CartWidget/CartWidget";

const MyNavbar = (props) => {
  console.log(props);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  });

  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      expand="sm"
      sticky="top"
      collapseOnSelect
    >
      <Navbar.Brand href="/">
        <img src={props.logo} width="40px" height="40px" alt="LogoImage" />
        {props.name}
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <NavDropdown title="Categories">
            {categories.map((cat) => (
              <NavDropdown.Item key={cat.id} href={`/category/${cat.id}`}>
                {cat.description}
              </NavDropdown.Item>
            ))}

            {/* <NavDropdown.Item href="/category/cars">Cars</NavDropdown.Item>
            <NavDropdown.Item href="/category/electronics">
              Electronics
            </NavDropdown.Item>
            <NavDropdown.Item href="/category/real-state">
              Real State
            </NavDropdown.Item>*/}
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/promotions">
              Promotions
            </NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          {/* <Nav.Link href="/category/:id">Categories</Nav.Link> */}
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
        </Nav>

        <Nav>
          <CartWidget />
          <Nav.Link href="#sign-in">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
