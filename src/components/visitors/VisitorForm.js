import React, { Component } from "react";
import {Button, Form} from "react-bootstrap";
import "../../components/LostToFound.css"

class VisitorForm extends Component {
  render() {
    return (
      <>
      <div id="visitor-form-container">
      <h4> What Did You Lose?</h4>
        {/* from bootstrap // add name and date */}
        <Form>
           <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control as="textarea" placeholder="Your Name" rows="1" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
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
        </div></>
    );
  }
}

export default VisitorForm;
