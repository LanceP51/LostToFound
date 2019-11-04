import React, { Component } from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

class NavBar extends Component {

  render() {
    // renders navbar from react bootstrap
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          {/* title and home link go to same home page visible to all */}
          <Navbar.Brand href="/home">The Great Lost + Found</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              {/* to visitor lost item form */}
              <Nav.Link href="/visitorform">Visitors</Nav.Link>
              <NavDropdown title="Parks" id="collasible-nav-dropdown">
                {/* to Parks looged in home page with form */}
                <NavDropdown.Item href="/parkhome">Home</NavDropdown.Item>
                {/* to list of all park-specific items */}
                <NavDropdown.Item href="/items">Items</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* link to external national parks webpage */}
                <NavDropdown.Item href="https://www.nps.gov/index.html">
                  National Parks
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* link to account dashboard/login */}
              <Nav.Link href="/login">Account/Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
