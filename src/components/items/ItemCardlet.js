import React, { Component } from "react";
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import "../LostToFound.css";

class ItemCardlet extends Component {
// this Cardlet page creates Item Cards with less content to be used on all visitor/customer focused pages
  render() {
    return (
      <>
        <Card id="item-card" style={{ width: "18rem" }}>
          <Card.Img id="item-pic" variant="top" src={this.props.ItemProp.photo} />
          <Card.Body>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <Card.Title>{this.props.ItemProp.itemName}</Card.Title>
            <ListGroupItem>{this.props.ItemProp.date}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.park.parkName}</ListGroupItem>
          </ListGroup>
        </Card>
      </>
    );
  }
}

export default ItemCardlet;
