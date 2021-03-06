import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../../components/LostToFound.css";
import ItemsMgr from "../../modules/ItemsMgr";
import CategoryMgr from "../../modules/CategoryMgr";
import ParksMgr from "../../modules/ParksMgr";
import backgroundPhoto from "../home/mount-cascades-park.jpg";


class VisitorForm extends Component {
  state = {
    // empty strings for entering info in form
    ownerName: "",
    ownerEmail: "",
    itemName: "",
    date: "",
    photo: "",
    // arrays for category and park dropdowns
    categoryId: [],
    parkId: [],
    loadingStatus: false,
    // chosen park and category
    selectedPark:"",
    selectedCategory:""
  };

  // handles field changes from fields
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /* method for validation, set loadingStatus, create listing object, post method, and redirect to confirmation page*/

  buildListing = evt => {
    evt.preventDefault();
    if (
      // conditional for checking that all required fields are entered
      this.state.ownerName === "" ||
      this.state.ownerEmail === "" ||
      this.state.itemName === "" ||
      this.state.date === "" ||
      this.state.selectedCategory === "" ||
      this.state.selectedPark === ""
    ) {
      window.alert("Please input all criteria");
    } else {
      // build new object for listing to post to server
      this.setState({ loadingStatus: true });
      const newListing = {
        ownerName: this.state.ownerName,
        ownerEmail: this.state.ownerEmail,
        itemName: this.state.itemName,
        date: this.state.date,
        photo: this.state.photo != "" ? this.state.photo : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG",
        categoryId: Number(this.state.selectedCategory),
        parkId: Number(this.state.selectedPark),
        statusId: +1
      };

      // post the listing and redirect user to a confirmation page
      ItemsMgr.post(newListing).then(() => this.props.history.push("/visitorform/confirm"));
    }
  };

  componentDidMount() {
    // mounts categories and parks to array in state for dropdowns
    CategoryMgr.getAll()
      .then(categories => {
        this.setState({
          categoryId: categories
        });
      })
      .then(() => ParksMgr.getAll())
      .then(parks => {
        this.setState({
          parkId: parks
        });
      });
  }

  render() {
    return (
      <>
        <div id="visitor-form-container">
          {/* form for lost item */}
          <h4> What Did You Lose?</h4>
          <Form>
            <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control id="ownerName" as="textarea" placeholder="Your Name" rows="1" onChange={this.handleFieldChange}/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Email address</Form.Label>
              <Form.Control id="ownerEmail" type="email" placeholder="name@example.com" onChange={this.handleFieldChange}/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Item</Form.Label>
              <Form.Control id="itemName" as="textarea" placeholder="Item Title" rows="1" onChange={this.handleFieldChange}/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Date</Form.Label>
              <Form.Control id="date" type="date" onChange={this.handleFieldChange}/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Park</Form.Label>
              <Form.Control
                as="select"
                id="selectedPark"
                value={this.state.selectedPark}
                onChange={this.handleFieldChange}
              ><option>Select a Park</option>
                {this.state.parkId.map(park => (
                  <option key={park.id} value={park.id}>
                    {park.parkName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group >
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                id="selectedCategory"
                value={this.state.selectedCategory}
                onChange={this.handleFieldChange}
              >
                <option>Select a Category</option>
                {this.state.categoryId.map(category => (
                <option key={category.id} value={category.id}>
              {category.type}</option>))}
              </Form.Control>
            </Form.Group>
            <Form.Group >
              <Form.Label>Photo url</Form.Label>
              <Form.Control id="photo" as="textarea" placeholder="url" rows="1" onChange={this.handleFieldChange}/>
            </Form.Group>
          </Form>
          <Button
          // btn will build listing and submit it to json server
            disabled={this.state.loadingStatus}
            onClick={this.buildListing}
            type="submit"
          >
            Post
          </Button>
        </div>
      </>
    );
  }
}

export default VisitorForm;
