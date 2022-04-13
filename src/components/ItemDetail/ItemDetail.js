import { Container, Row, Col, Card } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (product) => {
  console.log(product);

  const onAdd = (c) => {
    console.log(`Added ${c} items to cart!`);
    alert(`Added ${c} items to cart.`);
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
                <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
