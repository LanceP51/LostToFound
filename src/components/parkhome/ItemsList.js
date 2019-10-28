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
    items: [],
    parkName: "",
    search: "",
    filterStatus: "",
    filterCategory: "",
    categoryArr: [],
    statusArr: []
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

  handleFilter = () => {
    // if they type in search field and not the other two, then filter by search only and reset the other two fields
    this.state.items.filter(items => items.itemName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || items.status.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || items.category.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
    // if they use search and status filter then check those and clear category
    // if they use search and category filter, then check those and clear status
    // if they use status and category, then check those and clear search
    // if they use all three, then ...
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    ItemsMgr.getAll().then(items => {
      items.sort((a, b) => new Date(b.date) - new Date(a.date));
      this.setState({
        items: items,
        parkName: items[0].park.parkName
      });
    });
    CategoryMgr.getAll()
      .then(categories => {
        this.setState({
          categoryArr: categories
        });
      })
      .then(() => StatusMgr.getAll())
      .then(statuses => {
        this.setState({
          statusArr: statuses
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
        <Form.Group ><Form.Control className="sf" type="text" id="search" onChange={this.handleFieldChange} placeholder="Search" /></Form.Group>
          <Form.Group >
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
        <div>
          <Container className="home-containers">
            <h2>All Items at {this.state.parkName}</h2>
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
