import React, { Component } from "react";
import {Jumbotron, Button} from "react-bootstrap";

class Confirmation extends Component {
  render() {
    return (
      <>
        {/* from bootstrap */}
        <Jumbotron>
          <h1>This page confirms your submission.</h1>
          <p>
            This Park will update you with any new status of your lost item.
            Until then, please visit your State and National Parks and enjoy the
            great outdoors!
          </p>
          <p>
            <Button variant="primary">Home</Button>
          </p>
        </Jumbotron>
      </>
    );
  }
}

export default Confirmation;