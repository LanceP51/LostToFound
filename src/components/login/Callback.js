import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";
import "../../components/LostToFound.css";
import {ProgressBar} from "react-bootstrap";

class Callback extends Component {

state={
  parkName:""
};

  async componentDidMount() {
    await auth0Client.handleAuthentication();

    // Needs to be refactored, put in its own module, etc
    fetch(`http://localhost:5002/parks?aud=${auth0Client.getProfile().sub}`)
      .then(matchingPark => matchingPark.json())
      .then(matchingPark => {
        console.log(
          "This is our array of Parks that have the current user's aud",
          matchingPark
        );

        // If the the fetch call comes back empty, it means that the user who just logged in with Auth 0 doesn't exist in our json-server database. We need to register them!
        if (matchingPark.length === 0) {
          console.log("User not found, registering a new user!");

          // Create a new user object to post to the db
          const newUser = {
            aud: auth0Client.getProfile().sub,
            name: auth0Client.getProfile().nickname,
            parkName: "",
            email: "",
            streetAddress: "",
            city: "",
            state: "",
            zip: "",
            phone: ""

          };

          // Post it!!
          fetch(`http://localhost:5002/parks`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
          })
            .then(newlyCreatedUser => newlyCreatedUser.json())
            .then(parsedUser => {
              //Once the POST request is successfully completed, store the PK json-server generated for us in session storage
              console.log(
                "We created this new user in the json-server db and we're about to log them in",
                parsedUser
              );
              sessionStorage.setItem("credentials", parsedUser.id);
              this.props.history.replace("/login");
            });
        } else {
          // If something DOES come back from the fetch call (i.e. the array has a user in it), that means the user already exists in our db and we just need to log them in
          console.log(
            "We found that user! Here's their id!",
            matchingPark[0].id
          );
          sessionStorage.setItem("credentials", matchingPark[0].id);
          this.props.history.replace("/parkhome");
        }
      });
  }

  render() {
    return <>
    <div id="progress"> <ProgressBar now={65} />
    <p>Loading profile...</p>
    </div>
    </>
  }
}

export default withRouter(Callback);
