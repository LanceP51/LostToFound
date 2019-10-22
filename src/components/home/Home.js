import React, { Component } from "react";
import backgroundPhoto from "./mount-cascades-park.jpg";
import slogan from "./slogan.png"
import "../../components/LostToFound.css";
import {Container, Row, Col} from "react-bootstrap"
import ItemCardlet from "../items/ItemCardlet"
import ItemsMgr from "../../modules/ItemsMgr"

class Home extends Component {

  state = {
    claimedItems: [],
    donatedItems: []
  };

  componentDidMount() {
    ItemsMgr.getClaimed().then(items => {
      this.setState({
        claimedItems: items
      });
    });
    ItemsMgr.getDonated().then(items => {
      this.setState({
        donatedItems: items
      });
    });
  }

  render() {
    return (
      <>
        <div className="background-container">
          <img id="backgroundHome" src={backgroundPhoto} alt="mountain"></img>
          <h4 className="centered-text">
            <img id="slogan-img" src={slogan} alt="slogan"></img>
          </h4>
        </div>
        <Container className="home-containers">
			<h2> Claimed Items</h2>
          <Row className="home-items">
            <Col id="items-list-page-container">
                {this.state.claimedItems.map(singleItem => (
                    <ItemCardlet key={singleItem.id} ItemProp={singleItem} />
                ))}</Col>
          </Row>
        </Container>
		<Container className="home-containers">
			<h2> Donated Items</h2>
          <Row className="home-items">
            <Col id="items-list-page-container">
                {this.state.donatedItems.map(singleItem => (
                    <ItemCardlet key={singleItem.id} ItemProp={singleItem} />
                ))}</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
