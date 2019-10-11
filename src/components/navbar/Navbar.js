import { Navbar } from "react-bootstrap";

class Navbar extends Component {
  render() {
    return (
      <>
        // from bootstrap
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Lost to Found</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#visitors">Visitors</Nav.Link>
              <NavDropdown title="Parks" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#parksHome">Home</NavDropdown.Item>
                <NavDropdown.Item href="#items">Items</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.nps.gov/index.html">
                  National Parks
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Park Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navbar;
