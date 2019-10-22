import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../../components/LostToFound.css";
import ItemsMgr from "../../modules/ItemsMgr";
import StatusMgr from "../../modules/StatusMgr";
// import ParksMgr from "../../modules/ParksMgr";

class ItemEdit extends Component {
  state = {
    ownerName: "",
    ownerEmail: "",
    itemName: "",
    date: "",
    photo: "",
    // categoryId: [],
    // parkId: [],
    statusId: [],
    loadingStatus: false,
    // selectedPark:"",
    // selectedCategory:"",
    selectedStatus: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /* method for validation, set loadingStatus, create listing      object, invoke the jsonManager post method, and redirect to the full home page (later to confirmation page)*/

  editListing = evt => {
    evt.preventDefault();
    // if (
    //   this.state.ownerName === "" ||
    //   this.state.ownerEmail === "" ||
    //   this.state.itemName === "" ||
    //   this.state.date === "" ||
    //   this.state.selectedCategory === "" ||
    //   this.state.selectedPark === ""
    // ) {
    //   window.alert("Please input all criteria");
    // } else {
    this.setState({ loadingStatus: true });
    const editedListing = {
      id: this.props.match.params.itemId,
      ownerName: this.state.ownerName,
      ownerEmail: this.state.ownerEmail,
      itemName: this.state.itemName,
      date: this.state.date,
      photo: this.state.photo,
      // categoryId: Number(this.state.selectedCategory),
      // parkId: Number(this.state.selectedPark),
      statusId: Number(this.state.selectedStatus)
    };

    // update the listing and redirect user to a confirmation page)
    ItemsMgr.edit(editedListing).then(() =>
      this.props.history.push("/visitorform/confirm")
    );
    // }
  };

  componentDidMount() {
    ItemsMgr.getOne(this.props.match.params.itemId);
    StatusMgr.getAll()
      .then(statuses => {
        // statuses.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
        this.setState({
          statusId: statuses
        });
      })
    //   .then(item => {
    //     this.setState({
    //       ownerName: item.ownerName,
    //       ownerEmail: item.ownerEmail,
    //       itemName: item.itemName,
    //       date: item.date,
    //       photo: item.photo,
    //       loadingStatus: false,
    //       selectedStatus: item.selectedStatus
    //     });
    //   });
    //   .then(() => ParksMgr.getAll())
    //   .then(parks => {
    //     this.setState({
    //       parkId: parks
    //     });
    //   });
  }

  render() {
    return (
      <>
        <div id="visitor-form-container">
          <h4> Update Form</h4>
          {/* from bootstrap // add name and date */}
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="ownerName"
                as="textarea"
                placeholder="Owner Name"
                rows="1"
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="ownerEmail"
                type="email"
                placeholder="name@example.com"
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item</Form.Label>
              <Form.Control
                id="itemName"
                as="textarea"
                value={this.state.itemName}
                rows="1"
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                id="date"
                type="date"
                value={this.state.date}
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                id="statusId"
                value={this.state.statusId}
                onChange={this.handleFieldChange}
              >
                <option>Select a Status</option>
                {/* {this.state.statusId.map(status => (
                  <option key={status.id} value={status.type}>
                    {status.selectedStatus}
                  </option>
                ))} */}
              </Form.Control>
            </Form.Group>
            {/* <Form.Group >
              <Form.Label>Park</Form.Label>
              <Form.Control
                as="select"
                id="selectedPark"
                value={this.state.parkId}
                onChange={this.handleFieldChange}
              ><option>Select a Park</option>
                {this.state.parkId.map(park => (
                  <option key={park.id} value={park.id}>
                    {park.parkName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group> */}
            {/* <Form.Group >
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                // multiple
                id="selectedCategory"
                value={this.state.categoryId}
                onChange={this.handleFieldChange}
              >
                <option>Select a Category</option>
                {this.state.categoryId.map(category => (
                <option key={category.id} value={category.id}>
              {category.type}</option>))}
              </Form.Control>
            </Form.Group> */}
            <Form.Group>
              <Form.Label>Photo url</Form.Label>
              <Form.Control
                id="photo"
                as="textarea"
                value={this.state.photo}
                rows="1"
                onChange={this.handleFieldChange}
              />
            </Form.Group>
          </Form>
          <Button
            disabled={this.state.loadingStatus}
            onClick={this.editListing}
            type="submit"
          >
            Complete
          </Button>
        </div>
      </>
    );
  }
}

export default ItemEdit;
