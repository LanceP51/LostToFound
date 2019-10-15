import Card from "react-bootstrap";
import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        {/* from react-bootstrap */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.ItemProp.photo} />
          <Card.Body>
            <Card.Title>{this.props.ItemProp.itemName}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.ItemProp.categoryId}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.date}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.parkId}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.statusId}</ListGroupItem>
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
