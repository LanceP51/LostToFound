import React, { Component } from "react";
import "../../components/LostToFound.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ItemCard from "../items/ItemCard"
import ItemsMgr from "../../modules/ItemsMgr"

class Items extends Component {

    state = {
        items: []
      };

      componentDidMount() {
        ItemsMgr.getAll().then(items => {
          this.setState({
            items: items
          });
        });
      }

  render() {
    return (
      <>
        <div id="logout-btn">
        <Button variant="secondary" size="sm" href="home" {...localStorage.clear("activeuser")}>Logout</Button>
        </div>
        <div id="search-filter">
          <Form.Control className="sf" type="text" placeholder="Search" />
          <Form.Control className="sf" type="text" placeholder="Filter Status" />
          <Form.Control className="sf" type="text" placeholder="Filter Category" />
        </div>
        <div>
          <Container className="home-containers">
            <h2>All Items</h2>
            <Row className="home-items">
              <Col id="items-list-page-container">
                {this.state.items.map(singleItem => (
                    <ItemCard key={singleItem.id} ItemProp={singleItem} />
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Items;
