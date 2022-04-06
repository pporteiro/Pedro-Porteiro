import { Card, Button } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import "./Item.css";

const Item = (props) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      {/* <Card style={{ width: "18rem" }}> */}
      <Card className="cardClass">
        <Card.Img className="card-image" variant="top" src={props.pictureUrl} />
        <Card.Body>
          <div className="card-text-body">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Title>${props.price}</Card.Title>
            <Button variant="primary">Details</Button>
          </div>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default Item;
