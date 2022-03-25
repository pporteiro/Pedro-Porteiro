import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

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
        <Nav>
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
          <Nav.Link href="#sign-in">SignIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
