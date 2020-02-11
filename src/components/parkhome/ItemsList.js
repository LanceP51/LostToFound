import React, { Component } from "react";
import "../../components/LostToFound.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ItemCard from "../items/ItemCard";
import ItemsMgr from "../../modules/ItemsMgr";
import auth0Client from "../login/Auth";
import CategoryMgr from "../../modules/CategoryMgr";
import StatusMgr from "../../modules/StatusMgr"

class Items extends Component {
  state = {
    // items array for all items for a given park
    items: [],
    parkName: "",
    // search is an empty string for entered search criteria
    search: "",
    // categoryArr shows dropdown for all categories for filter
    categoryArr: [],
    // statusArr shows dropdown for all statuses for filter
    statusArr: []
  };

  handleDelete = (id) => {
    //invoke the delete function and reload the page.
    ItemsMgr.delete(id).then(() => {
      ItemsMgr.getAll().then(items => {
        items.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.setState({
          items: items
        });
      });
    });
  };

  // handles change to state when entering info in a certain field
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    // mounts items to state and the park name to state
    ItemsMgr.getAll().then(items => {
      items.sort((a, b) => new Date(b.date) - new Date(a.date));
      this.setState({
        items: items,
        parkName: items[0].park.parkName
      });
    });
    // mounts categories to state for dropdown
    CategoryMgr.getAll()
      .then(categories => {
        this.setState({
          categoryArr: categories
        });
      })
      // mounts statuses to state for dropdown
      .then(() => StatusMgr.getAll())
      .then(statuses => {
        this.setState({
          statusArr: statuses
        });
      });
  }

  // method for signout and clears session storage
  signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear()
    this.props.history.replace("/");
  };

  render() {
    return (
      <>
      {/* logout calls signout method above */}
        <div id="logout-btn">
          <Button
            variant="secondary"
            size="sm"
            onClick={this.signOut}
          >
            Logout
          </Button>
        </div>
        {/* search box */}
        <div id="search-filter">
        <Form.Group ><Form.Control className="sf" type="text" id="search" onChange={this.handleFieldChange} placeholder="Search" /></Form.Group>
          <Form.Group >
            {/* status filter */}
              <Form.Control
                as="select"
                id="search"
                value={this.state.selectedCategory}
                onChange={this.handleFieldChange}
              >
                <option>Select a Status</option>
                {this.state.statusArr.map(status => (
                <option key={status.id} value={status.type}>
              {status.type}</option>))}
              </Form.Control>
            </Form.Group>
            {/* category filter */}
            <Form.Group >
              <Form.Control
                as="select"
                id="search"
                value={this.state.selectedCategory}
                onChange={this.handleFieldChange}
              >
                <option>Select a Category</option>
                {this.state.categoryArr.map(category => (
                <option key={category.id} value={category.type}>
              {category.type}</option>))}
              </Form.Control>
            </Form.Group>
        </div>
        <p id="searchTag">Use one of the filters above to search through items</p>
        <br />
        <div>
          {/* items container */}
          <Container className="home-containers">
            <h2 className="titleLabel" >All Items at {this.state.parkName}</h2>
            <Row className="home-items">
              <Col id="items-list-page-container">
                {this.state.items.filter(items => items.itemName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || items.status.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || items.category.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
                .map(singleItem => (
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
