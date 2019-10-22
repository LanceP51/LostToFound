import React, { Component } from "react";
import "../../components/LostToFound.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ItemCardlet from "../items/ItemCardlet";
import ItemsMgr from "../../modules/ItemsMgr";
import CategoryMgr from "../../modules/CategoryMgr";
import ParksMgr from "../../modules/ParksMgr";
import auth0Client from "../login/Auth"

class ParksHome extends Component {
  state = {
    // ownerName: "",
    // ownerEmail: "",
    itemName: "",
    date: "",
    photo: "",
    categoryId: [],
    parkId: [],
    loadingStatus: false,
    selectedPark: "",
    selectedCategory: "",
    items: []
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /* method for validation, set loadingStatus, create listing      object, invoke the jsonManager post method, and redirect to the full home page (later to confirmation page)*/

  buildListing = evt => {
    evt.preventDefault();
    if (
    //   this.state.ownerName === "" ||
    //   this.state.ownerEmail === "" ||
      this.state.itemName === "" ||
      this.state.date === "" ||
      this.state.selectedCategory === "" ||
      this.state.selectedPark === ""
    ) {
      window.alert("Please input all criteria");
    } else {
      this.setState({ loadingStatus: true });
      const newListing = {
        ownerName: "",
        ownerEmail: "",
        itemName: this.state.itemName,
        date: this.state.date,
        photo: this.state.photo,
        categoryId: Number(this.state.selectedCategory),
        parkId: Number(this.state.selectedPark),
        statusId: +2
      };

      // post the listing and redirect user to home (and later to a confirmation page)
      ItemsMgr.post(newListing).then(() => this.props.history.push("/items"));
    }
  };

  componentDidMount() {
    CategoryMgr.getAll()
      .then(categories => {
        this.setState({
          categoryId: categories
        });
      })
      .then(() => ParksMgr.getAll())
      .then(parks => {
        parks.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
        this.setState({
          parkId: parks
        });
      })
      .then(() => ItemsMgr.getStillLost())
      .then(items => {
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
        <Button variant="secondary" size="sm"  onClick={this.signOut}>Logout</Button>
        </div>
        <div id="visitor-form-container">
          <h4> What Did You Find?</h4>
          {/* from bootstrap // add name and date */}
          <Form>
            {/* <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="ownerName"
                as="textarea"
                placeholder="Your Name"
                rows="1"
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="ownerEmail"
                type="email"
                placeholder="name@example.com"
                onChange={this.handleFieldChange}
              />
            </Form.Group> */}
            <Form.Group>
              <Form.Label>Item</Form.Label>
              <Form.Control
                id="itemName"
                as="textarea"
                placeholder="Item Title"
                rows="1"
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                id="date"
                type="date"
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Park</Form.Label>
              <Form.Control
                as="select"
                id="selectedPark"
                value={this.state.parkId}
                onChange={this.handleFieldChange}
              ><option>Select a Park</option>
                {this.state.parkId.map(park => (
                  <option key={park.id} value={park.id}>
                    {park.parkName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                // multiple
                id="selectedCategory"
                value={this.state.categoryId}
                onChange={this.handleFieldChange}
              ><option>Select a Category</option>
                {this.state.categoryId.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Photo url</Form.Label>
              <Form.Control
                id="photo"
                as="textarea"
                placeholder="url"
                rows="1"
                onChange={this.handleFieldChange}
              />
            </Form.Group>
          </Form>
          <Button
            disabled={this.state.loadingStatus}
            onClick={this.buildListing}
            type="submit"
          >
            Post
          </Button>
        </div>
        <div id="still-lost-container">
          <Container className="home-containers">
            <h2> Still Lost</h2>
            <Row className="home-items">
              <Col id="items-list-page-container">
                {this.state.items.map(singleItem => (
                  <ItemCardlet key={singleItem.id} ItemProp={singleItem} />
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default ParksHome;
