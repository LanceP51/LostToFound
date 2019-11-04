import React, { Component } from "react";
import {Jumbotron, Button} from "react-bootstrap";

class Confirmation extends Component {
  render() {
    // rendering a confirmation page after visitor submits an item. shows a link also to home page
    return (
      <>
        <Jumbotron>
          <h1>This page confirms your submission.</h1>
          <p>
            This Park will update you with any new status of your lost item.
            Until then, please visit your State and National Parks and enjoy the
            great outdoors!
          </p>
          <p>
            <Button href="/home" variant="secondary">Home</Button>
          </p>
        </Jumbotron>
      </>
    );
  }
}

export default Confirmation;