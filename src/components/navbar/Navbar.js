import React, { Component } from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

class NavBar extends Component {

  render() {
    return (
      <>
        {/* from bootstrap */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">The Great Lost + Found</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/visitorform">Visitors</Nav.Link>
              <NavDropdown title="Parks" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/parkhome">Home</NavDropdown.Item>
                <NavDropdown.Item href="/items">Items</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.nps.gov/index.html">
                  National Parks
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="login">Account/Register</Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
