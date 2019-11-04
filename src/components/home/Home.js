import React, { Component } from "react";
import backgroundPhoto from "./mount-cascades-park.jpg";
import slogan from "./slogan.png"
import "../../components/LostToFound.css";
import {Container, Row, Col} from "react-bootstrap"
import ItemCardlet from "../items/ItemCardlet"
import ItemsMgr from "../../modules/ItemsMgr"

class Home extends Component {
// shows all cardlets from ItemCardlet.js which have claimed or donated status
  state = {
    claimedItems: [],
    donatedItems: []
  };

  componentDidMount() {
    // calls on ItemsMgr to fetch claimed and donated items from json through query strings and sets them to state
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
      {/* background image and text slogan */}
        <div className="background-container">
          <img id="backgroundHome" src={backgroundPhoto} alt="mountain"></img>
          <h4 className="centered-text">
            <img id="slogan-img" src={slogan} alt="slogan"></img>
          </h4>
        </div>
        {/* claimed items container */}
        <Container className="home-containers">
			<h2> Claimed</h2>
          <Row className="home-items">
            <Col id="items-list-page-container">
                {this.state.claimedItems.map(singleItem => (
                    <ItemCardlet key={singleItem.id} ItemProp={singleItem} />
                ))}</Col>
          </Row>
        </Container>
        {/* donated items container */}
		<Container className="home-containers">
			<h2> Donated</h2>
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
