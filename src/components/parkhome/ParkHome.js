import React, { Component } from "react";
import "../../components/LostToFound.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ItemCardlet from "../items/ItemCardlet";
import ItemsMgr from "../../modules/ItemsMgr";
import CategoryMgr from "../../modules/CategoryMgr";
import ParksMgr from "../../modules/ParksMgr";
import auth0Client from "../login/Auth";

class ParksHome extends Component {
  state = {
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
      this.state.itemName === "" ||
      this.state.date === "" ||
      this.state.selectedCategory === "" ||
      this.state.selectedPark === ""
    ) {
      window.alert("Please input all criteria");
    } else {
      this.setState({ loadingStatus: true });
      {if(this.state.photo==="" && this.state.selectedCategory===3){this.setState({photo:"https://images.all-free-download.com/images/graphiclarge/orange_gear_icon_vector_280682.jpg"})}
      else if(this.state.photo==="" && this.state.selectedCategory===2){this.setState({photo:"https://icon-library.net/images/electronics-icon-png/electronics-icon-png-3.jpg"})}
      else if(this.state.photo==="" && this.state.selectedCategory===1){this.setState({photo:"https://www.brandeps.com/icon-download/C/Camera-icon-vector-05.svg"})}
      else if(this.state.photo==="" && this.state.selectedCategory===4){this.setState({photo:"https://i2.wp.com/littleastronaut.creativecollagemedia.com/wp-content/uploads/2018/10/PURCHASE-ICON-BLUE.jpg?w=512&ssl=1"})}
      else if(this.state.photo==="" && this.state.selectedCategory===7){this.setState({photo:"https://icon-library.net/images/dog-icon/dog-icon-4.jpg"})}
      else if(this.state.photo==="" && this.state.selectedCategory===6){this.setState({photo:"https://cdn.pixabay.com/photo/2019/01/04/01/37/wallet-3912327_960_720.jpg"})}
      else if(this.state.photo==="" && this.state.selectedCategory===5){this.setState({photo:"http://world-of-cliparts.com/images2/3d-circle/2/kisspng-toy-stock-photography-infant-icon-baby-vector-3d-icon-vector-5aa5c1e1e340c8.2985105415208125139308.jpg"})}
      else{this.state.photo=this.state.photo}};
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

      // post the listing and redirect user to a confirmation page
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
          <Form>
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
                value={this.state.selectedPark}
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
                id="selectedCategory"
                value={this.state.selectedCategory}
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
