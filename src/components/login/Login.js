import React, { Component } from "react";
import {Form, Col, Button} from "react-bootstrap";
import ParksMgr from "../../modules/ParksMgr"
import "../../components/LostToFound.css"

class Login extends Component {
  // Set initial state
  state = {
    loginEmail: "",
    loginPassword: ""
  };

//   state for REGISTER
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     loadingStatus: false,
// };

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = (e) => {
    e.preventDefault();
    const loginEmail = this.state.loginEmail
    const loginPassword = this.state.loginPassword
    ParksMgr.getOne(loginEmail).then(park => {
        if (loginPassword === "") { alert("Please enter password") }
        else if (park[0].password === loginPassword) {
          localStorage.setItem("parkId", park[0].id)
        }
        else { (alert("Incorrect password")) }
      this.props.history.push("/login")
    });
  }

  // constructNewUser = evt => {
  //   evt.preventDefault();
  //   if (this.state.name === "" || this.state.email === "" || this.state.password === "") {
  //       window.alert("Please input name, email, and create a password");

  //   } else {
  //       UserManager.getOne(this.state.name).then(userBack => {

  //           if (userBack[0]) {
  //               window.alert("User already registered, please use another User Name")
  //           }
  //           else {
  //               this.setState({ loadingStatus: true });
  //               const newUser = {
  //                   name: this.state.name,
  //                   email: this.state.email,
  //                   password: this.state.password
  //               }


  //               console.log(newUser)
  //               UserManager.postNewUser(newUser)
  //                   .then((newUserObject) => {
  //                       localStorage.setItem("userId", newUserObject.id)
  //                   }
  //                   )
  //                   .then(() => this.props.history.push("/home"));
  //           }
  //       })
    // }


  render() {
    return (
      <>
        {/* from bootstrap // login */}
        <div id="login-container">
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
        </Form></div>

        {/* register */}
        <div id="register-container">
        <h3>Register</h3>
        <Form>
          <Form.Row>
          <Form.Group controlId="formGridName">
            <Form.Label>Park Name</Form.Label>
            <Form.Control placeholder="Your National Park" />
          </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>State</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="I am not a robot" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form></div>
      </>
    );
  }
}

export default Login;
