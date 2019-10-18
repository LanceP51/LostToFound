import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import ParksMgr from "../../modules/ParksMgr";
import "../../components/LostToFound.css";

class Login extends Component {
  state = {
    parkName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    phone: "",
    loadingStatus: false,
    parkId: [],
    newPark: {},
    id: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // handleLogin = (e) => {
  //   e.preventDefault();
  //   const loginEmail = this.state.loginEmail
  //   const loginPassword = this.state.loginPassword
  //   ParksMgr.getOne(loginEmail).then(park => {
  //       if (loginPassword === "") { alert("Please enter password") }
  //       else if (park[0].password === loginPassword) {
  //         localStorage.setItem("parkId", park[0].id)
  //       }
  //       else { (alert("Incorrect password")) }
  //     this.props.history.push("/login")
  //   });
  // }

  // build/update new park after Auth0 sign up
  buildNewPark = evt => {
    evt.preventDefault();
    if (
      this.state.parkName === "" ||
      this.state.email === "" ||
      this.state.streetAddress === "" ||
      this.state.city === "" ||
      this.state.state === "" ||
      this.state.phone === ""
    ) {
      window.alert("Please fill in all criteria.");
    } else {
      this.setState({ loadingStatus: true });
      const newPark = {
        aud: this.state.aud,
        id: this.state.id,
        name: this.state.name,
        parkName: this.state.parkName,
        email: this.state.email,
        streetAddress: this.state.streetAddress,
        city: this.state.city,
        state: this.state.state,
        phone: this.state.phone
      };

      ParksMgr.update(newPark)
        .then(() => this.props.history.push("/parkhome"));
    }
  };

  componentDidMount() {
    ParksMgr.getAll().then(parks => {
      this.setState({
        parkId: parks
      });
    });
    ParksMgr.getOneBySession().then(park => {
      this.setState({
        id: park.id
      });
    });
  }

  render() {
    return (
      <>
        {/* from bootstrap // login */}
        {/* <div id="login-container">
        <h3>Login</h3>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this.handleFieldChange} id="loginEmail" type="email" placeholder="Enter NPS email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handleFieldChange} id="loginPassword" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form></div> */}

        {/* register */}
        <div id="register-container">
          <h3>Account Dashboard</h3>
          <Form>
            <Form.Row>
              <Form.Group>
                <Form.Label>Park Name</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="parkName" placeholder="Your National Park" />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="email" type="email" placeholder="Enter email" />
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}

            </Form.Row>
            <Form.Group >
              <Form.Label>Address</Form.Label>
              <Form.Control onChange={this.handleFieldChange} id="streetAddress" placeholder="1234 Main St" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>City</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="city" />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>State</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="state" as="select">
                  <option>State</option>
                  {this.state.parkId.map(park => (
                    <option key={park.id} value={park.id}>
                      {park.state}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="zip" />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="phone"/>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="I am not a robot"/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.buildNewPark}>
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default Login;
