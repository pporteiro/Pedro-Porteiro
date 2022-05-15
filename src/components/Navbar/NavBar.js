import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";
import { getCategories } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

const MyNavbar = (props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useAsync(
    setLoading,
    () => getCategories(),
    setCategories,
    () => console.log("Error in NavBar (Categories)"),
    []
  );

  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      expand="sm"
      sticky="top"
      collapseOnSelect
    >
      <Navbar.Brand as={NavLink} to="/" style={{ display: "inline-flex" }}>
        <img src={props.logo} width="40px" height="40px" alt="LogoImage" />
        {props.name}
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          {loading
            ? ""
            : categories.map((cat) => (
                <Nav.Link
                  as={NavLink}
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  eventKey={`link-${cat.linkNumber}`}
                  className={(isActive) =>
                    isActive ? "active-link" : "inactive-link"
                  }
                >
                  {cat.description}
                </Nav.Link>
              ))}

          <Nav.Link as={NavLink} to="/contact-us" eventKey="link-4">
            Contact Us
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link as={NavLink} to="/cart">
            <CartWidget />
          </Nav.Link>
          <Nav.Link as={NavLink} to="#sign-in" eventKey="link-5">
            Sign In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
