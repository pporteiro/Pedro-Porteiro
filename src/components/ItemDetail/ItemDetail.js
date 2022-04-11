import { Container, Row, Col, Card } from "react-bootstrap";
import "./ItemDetail.css";
const ItemDetail = (product) => {
  console.log(product);
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
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
