import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../utils/getItems";
import CartWidget from "../CartWidget/CartWidget";

//  === FIREBASE ===
// import { firestoredb } from "../../services/firebase";
// import { getDocs, collection } from "firebase/firestore";

const MyNavbar = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });

    // getDocs(collection(firestoredb, "categories")).then();
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
      <Navbar.Brand as={NavLink} to="/" style={{ display: "inline-flex" }}>
        <img src={props.logo} width="40px" height="40px" alt="LogoImage" />
        {props.name}
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          {/* <NavDropdown title="Categories">
            {categories.map((cat) => (
              <NavDropdown.Item
                // as={NavLink}
                key={cat.id}
                href={`/category/${cat.id}`}
              >
                {cat.description}
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/promotions">
              Promotions
            </NavDropdown.Item>
          </NavDropdown> */}

          {categories.map((cat) => (
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
