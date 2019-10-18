import React, { Component } from "react";
import "../../components/LostToFound.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ItemCard from "../items/ItemCard";
import ItemsMgr from "../../modules/ItemsMgr";
import auth0Client from "../login/Auth"

class Items extends Component {
  state = {
    items: []
  };

  handleDelete = (id) => {
    //invoke the delete function and reload the page.
    // const parkId = parseInt(localStorage.getItem("parkId"));
    ItemsMgr.delete(id).then(() => {
      ItemsMgr.getAll().then(items => {
        items.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.setState({
          items: items
        });
      });
    });
  };

  componentDidMount() {
    ItemsMgr.getAll().then(items => {
      items.sort((a, b) => new Date(b.date) - new Date(a.date));
      this.setState({
        items: items
      });
    });
  }

  signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear()
    this.props.history.replace("/");
  };

  render() {
    return (
      <>
        <div id="logout-btn">
          <Button
            variant="secondary"
            size="sm"
            onClick={this.signOut}
          >
            Logout
          </Button>
        </div>
        <div id="search-filter">
          <Form.Control className="sf" type="text" placeholder="Search" />
          <Form.Control
            className="sf"
            type="text"
            placeholder="Filter Status"
          />
          <Form.Control
            className="sf"
            type="text"
            placeholder="Filter Category"
          />
        </div>
        <div>
          <Container className="home-containers">
            <h2>All Items</h2>
            <Row className="home-items">
              <Col id="items-list-page-container">
                {this.state.items.map(singleItem => (
                  <ItemCard
                    deleteProp={this.handleDelete}
                    key={singleItem.id}
                    ItemProp={singleItem}
                    {...this.props}
                  />
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
