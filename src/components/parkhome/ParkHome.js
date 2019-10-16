import React, { Component } from "react";
import "../../components/LostToFound.css";
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import ItemCard from "../items/ItemCard"
import ItemsMgr from "../../modules/ItemsMgr"

class ParksHome extends Component {

	state = {
        items: []
      };

      componentDidMount() {
        ItemsMgr.getStillLost().then(items => {
          this.setState({
            items: items
          });
        });
      }

	render() {
		return (
			<>
			<div id="visitor-form-container">
			<h4> What Did You Find?</h4>
			  {/* from bootstrap // add name and date */}
			  <Form>
				 <Form.Group controlId="exampleForm.ControlTextarea1">
				  <Form.Label>Name</Form.Label>
				  <Form.Control as="textarea" placeholder="Your Name" rows="1" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlTextarea1">
				  <Form.Label>Date</Form.Label>
				  <Form.Control type="date"/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect1">
				  <Form.Label>Park</Form.Label>
				  {/* <Form.Control as="select">
					<option>{this.props.ParkProp.parkName}</option>
					<option>{this.props.ParkProp.parkName}</option>
					<option>{this.props.ParkProp.parkName}</option>
					<option>{this.props.ParkProp.parkName}</option>
					<option>{this.props.ParkProp.parkName}</option>
				  </Form.Control> */}
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect2">
				  <Form.Label>Category</Form.Label>
				  {/* <Form.Control as="select" multiple>
					<option>{this.props.StatusProp.type}</option>
					<option>{this.props.StatusProp.type}</option>
					<option>{this.props.StatusProp.type}</option>
					<option>{this.props.StatusProp.type}</option>
					<option>{this.props.StatusProp.type}</option>
				  </Form.Control> */}
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlTextarea1">
				  <Form.Label>Photo url</Form.Label>
				  <Form.Control as="textarea" placeholder="url" rows="1" />
				</Form.Group>
			  </Form>
			  <Button onClick={this.buildItem} type="submit">Button</Button>
			  </div>
			  <div id="still-lost-container">
			  <Container className="home-containers">
			<h2> Still Lost</h2>
          <Row className="home-items">
            <Col id="items-list-page-container">
                {this.state.items.map(singleItem => (
                    <ItemCard key={singleItem.id} ItemProp={singleItem} />
                ))}</Col>
          </Row>
        </Container></div></>
		);
	}
}

export default ParksHome;