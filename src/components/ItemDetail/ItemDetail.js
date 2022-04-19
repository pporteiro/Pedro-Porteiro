import "./ItemDetail.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = (product) => {
  console.log(product);

  const [quantity, setQuantity] = useState(0);

  const handleAdd = (count) => {
    console.log(`Added ${count} items to cart!`);
    setQuantity(count);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="center">
            <Card.Img
              src={product.pictureUrl}
              alt="Card image"
              className="detail-img"
            />
          </Col>
          <Col className="center-text">
            <Card className=" ">
              <Row>
                <h1 className="card-title">{product.title}</h1>
              </Row>
              <br />
              <Row>
                <h2 className="card-title">${product.price}</h2>
              </Row>
              <br />

              <Row>
                <p className="card-title">{product.description}</p>
              </Row>
              <Row>
                {quantity > 0 ? (
                  <Link to="/cart">Ir al carrito</Link>
                ) : (
                  <ItemCount
                    onAdd={handleAdd}
                    stock={product.stock}
                    initial={1}
                  />
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
