import "./ItemDetail.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ id, title, price, description, pictureUrl, stock }) => {
  const { addItem, isInCart, getQuantityOfItem, removeItem } =
    useContext(CartContext);

  const handleAdd = (count) => {
    // console.log(`Added ${count} items to cart!`);

    const objProd = {
      id,
      title,
      price,
      quantity: count,
    };

    addItem(objProd);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="center">
            <Card.Img
              src={pictureUrl}
              alt="Card image"
              className="detail-img"
            />
          </Col>
          <Col className="center-text">
            <Card className=" ">
              <Row>
                <h1 className="card-title">{title}</h1>
              </Row>
              <br />
              <Row>
                <h2 className="card-title">${price}</h2>
              </Row>
              <br />

              <Row>
                <p className="card-title">{description}</p>
              </Row>
              <Row>
                {isInCart(id) ? (
                  <>
                    {/* <Link to="/cart">Ir al carrito</Link> */}

                    <ItemCount
                      onAdd={handleAdd}
                      stock={stock}
                      initial={getQuantityOfItem(id)}
                    />
                  </>
                ) : (
                  <ItemCount onAdd={handleAdd} stock={stock} initial={1} />
                )}
                {isInCart(id) ? (
                  <div>
                    <Link to="/cart">See in cart</Link>
                    <p
                      className="btn btn-primary yaencarro"
                      onClick={() => {
                        removeItem(id);
                      }}
                    >
                      Remove from cart
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
