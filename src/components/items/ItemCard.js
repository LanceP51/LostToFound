import React, { Component } from "react";
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import "../LostToFound.css";
import {Link} from "react-router-dom"

class ItemCard extends Component {

  render() {
    return (
      <>
        <Card id="item-card" style={{ width: "18rem" }}>
          <Card.Img id="item-pic" variant="top" src={this.props.ItemProp.photo} />
          <Card.Body>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <Card.Title>{this.props.ItemProp.itemName}</Card.Title>
            <ListGroupItem>{this.props.ItemProp.category.type}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.date}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.park.parkName}</ListGroupItem>
            <ListGroupItem>{this.props.ItemProp.status.type}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Link
							to={`/items/${this.props.ItemProp.id}/edit`}
							variant="link"
						>
							Update
						</Link>
						<Button
							type="button"
							onClick={() => {
								this.props.deleteProp(this.props.ItemProp.id);
							}}
							variant="link"
						>
							Delete
						</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ItemCard;
