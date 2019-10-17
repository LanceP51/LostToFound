import React, { Component } from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import "../LostToFound.css"

class ItemCard extends Component {
  render() {
    return (
      <>
        {/* from react-bootstrap */}
        <Card id="item-card" style={{ width: "18rem" }}>
          <Card.Img id="item-pic" variant="top" src={this.props.ItemProp.photo} />
          <Card.Body>
            <Card.Title>{this.props.ItemProp.itemName}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.ItemProp.category.type}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.date}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.park.parkName}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.status.type}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={`/items/${this.props.ItemProp.id}/edit`}>Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ItemCard;
