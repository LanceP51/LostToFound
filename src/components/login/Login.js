import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import ParksMgr from "../../modules/ParksMgr";
import "../../components/LostToFound.css";
import auth0Client from "../login/Auth"


class Login extends Component {
  state = {
    parkName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    loadingStatus: false,
    parkId: [],
    newPark: {},
    id: "",
    name: "",
    aud: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // build/update new park after Auth0 sign up
  buildNewPark = evt => {
    evt.preventDefault();
    if (
      this.state.parkName === "" ||
      this.state.email === "" ||
      this.state.streetAddress === "" ||
      this.state.city === "" ||
      this.state.state === "" ||
      this.state.zip === "" ||
      this.state.phone === "" ||
      this.state.loadingStatus===false
    ) {
      window.alert("Please fill in all criteria and click checkbox once you have double checked all fields.");
    } else {
      const newPark = {
        aud: this.state.aud,
        id: this.state.id,
        name: this.state.name,
        parkName: this.state.parkName,
        email: this.state.email,
        streetAddress: this.state.streetAddress,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone
      };

      ParksMgr.update(newPark)
        .then(() => this.props.history.push("/parkhome"));
    }
  };

  signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear()
    this.props.history.replace("/");
  };


  componentDidMount() {
    ParksMgr.getAll().then(parks => {
      parks.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
      this.setState({
        parkId: parks
      });
    });
    ParksMgr.getOneBySession().then(park => {
      this.setState({
        id: park.id,
        aud: park.aud,
        name: park.name,
        parkName: park.parkName,
        email: park.email,
        streetAddress: park.streetAddress,
        city: park.city,
        state: park.state,
        zip: park.zip,
        phone: park.phone

      });
    });
  }

  render() {
    return (
      <>
	  <div id="logout-btn">
        <Button variant="secondary" size="sm"  onClick={this.signOut}>Logout</Button>
        </div>
        <div id="register-container">
          <h3>Account Dashboard</h3>
          <Form>
            <Form.Row>
              <Form.Group>
                <Form.Label>Park Name</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="parkName" placeholder="Your National Park" value={this.state.parkName}/>
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="email" type="email" placeholder="Enter email" value={this.state.email}/>
              </Form.Group>
            </Form.Row>
            <Form.Group >
              <Form.Label>Address</Form.Label>
              <Form.Control onChange={this.handleFieldChange} id="streetAddress" placeholder="1234 Main St" value={this.state.streetAddress}/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>City</Form.Label>
                <Form.Control onChange={this.handleFieldChange} id="city" value={this.state.city}/>
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>State</Form.Label>
                <Form.Control
                onChange={this.handleFieldChange} value={this.state.state} id="state" as="select">
                  <option>State</option>
                  <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="WY">Wyoming</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="12345" onChange={this.handleFieldChange} id="zip" value={this.state.zip}/>
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="000-000-0000" onChange={this.handleFieldChange} id="phone" value={this.state.phone}/>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" onClick={()=>this.setState({ loadingStatus: true })} label="I've double checked my form"/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.buildNewPark}>
              Submit
            </Button>
          </Form>
          <div id="updateNotice">
  <p>Notice: Please occasionally review and update your information as needed.</p>
</div>
        </div>
      </>
    );
  }
}

export default Login;
