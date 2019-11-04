import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../../components/LostToFound.css";
import ItemsMgr from "../../modules/ItemsMgr";
import StatusMgr from "../../modules/StatusMgr";

class ItemEdit extends Component {
  // shows all items or an empty string/array for dropdowns, chosen items, or filled-in content
  state = {
    ownerName: "",
    ownerEmail: "",
    itemName: "",
    date: "",
    photo: "",
    // chosen category
    categoryId: "",
    // chosen park
    parkId: "",
    // array of statuses
    statusId: [],
    loadingStatus: false,
    selectedStatus: ""
  };
// handles change to state when new info entered into specific fields
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /* method for validation, edit listing object, edit/PUT method on ItemsMgr.js, and redirect to confirmation page*/
  editListing = evt => {
    evt.preventDefault();
    // conditional to make sure all required fields are filled in
    if (
      this.state.itemName === "" ||
      this.state.date === "" ||
      this.state.categoryId === "" ||
      this.state.parkId === ""
    ) {
      window.alert("Please input all criteria");
    } else {
      // if required fields done, then allow submit and created object to edit object on server
    this.setState({ loadingStatus: true });
    const editedListing = {
      id: this.props.match.params.itemId,
      ownerName: this.state.ownerName,
      ownerEmail: this.state.ownerEmail,
      itemName: this.state.itemName,
      date: this.state.date,
      photo: this.state.photo,
      categoryId: Number(this.state.categoryId),
      parkId: Number(this.state.parkId),
      statusId: Number(this.state.selectedStatus)
    };

    // update the listing and redirect user to a confirmation page
    ItemsMgr.edit(editedListing).then(() =>
      this.props.history.push("/visitorform/confirm")
    );
    }
  };

  componentDidMount() {
    // mounts the chosen item to edit to state
    ItemsMgr.getOne(this.props.match.params.itemId)
      .then(item => {
        this.setState({
          ownerName: item.ownerName,
          ownerEmail: item.ownerEmail,
          itemName: item.itemName,
          date: item.date,
          parkId: item.parkId,
          categoryId: item.categoryId,
          photo: item.photo,
          loadingStatus: false,
          selectedStatus: item.statusId
        });
      })
      // mounts status dropdown to state
      .then(StatusMgr.getAll)
      .then(statuses => {
        this.setState({
          statusId: statuses
        });
      });
  }

  render() {
    return (
      <>
      {/* update form */}
        <div id="visitor-form-container">
          <h4> Update Form</h4>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="ownerName"
                as="textarea"
                placeholder="Owner Name"
                value={this.state.ownerName}
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
                value={this.state.ownerEmail}
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
                id="selectedStatus"
                value={this.state.selectedStatus}
                onChange={this.handleFieldChange}
              >
                <option>Select a Status</option>
                {/* maps through statuses array to list them in dropdown */}
                {this.state.statusId.map(status => (
                  <option key={status.id} value={status.id}>
                    {status.type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
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
            // btn calls on method to edit on server
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
