import { Cards } from "react-bootstrap";
import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        // from react-bootstrap
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>item name</ListGroupItem>
            <ListGroupItem>date</ListGroupItem>
            <ListGroupItem>status</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Card;
