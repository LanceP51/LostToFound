import React, { Component } from "react";
import backgroundPhoto from "./mount-cascades-park.jpg";
import "../../components/LostToFound.css";
import {Container, Row, Col} from "react-bootstrap"

class Home extends Component {
  render() {
    return (
      <>
        <div class="background-container">
          <img id="backgroundHome" src={backgroundPhoto} alt="mountain"></img>
          <h4 class="centered-text">
            Let us know if you left something behind at your last park visit! We would love to help!
          </h4>
        </div>
        <Container className="home-containers">
			<h2> Claimed Items</h2>
          <Row className="home-items">
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
		<Container className="home-containers">
			<h2> Donated Items</h2>
          <Row className="home-items">
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
