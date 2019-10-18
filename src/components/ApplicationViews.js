import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import NavBar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import ParkHome from "../components/parkhome/ParkHome";
import ItemsList from "../components/parkhome/ItemsList";
import VisitorForm from "../components/visitors/VisitorForm";
import Confirmation from "../components/visitors/VisitorConfirm";
import Callback from "../components/login/Callback";
import auth0Client from "./login/Auth";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/callback" component={Callback} />

        <Route
          exact
          path="/"
          render={props => {
            return <Home {...props} />;
          }}
        />

        <Route
          path="/home"
          render={props => {
            return <Home {...props} />;
          }}
        />

        {/* <Route
          path="/login"
          render={props => {
            return <Login {...props} />;
          }}
        /> */}

        <Route
          path="/login"
          render={props => {
            if (sessionStorage.getItem('credentials') !== null) {
              return <Login {...props} />;
            } else {
              auth0Client.signIn();
              return null;
            }
          }}
        />

        <Route
          path="/parkhome"
          render={props => {
            if (sessionStorage.getItem('credentials') !== null) {
              return <ParkHome {...props} />;
            } else {
              auth0Client.signIn();
              return null;
            }
          }}
        />

        {/* <Route
          path="/items"
          render={props => {
            // console.log(auth0Client.isAuthenticated())
            // return null
            if (auth0Client.isAuthenticated()) {
              return <ItemsList {...props} />;
            } else {
              auth0Client.signIn();
              return null;
            }
          }}
        /> */}

        <Route
          path="/items"
          render={props => {
            if (sessionStorage.getItem('credentials') !== null) {
              return <ItemsList {...props} />;
            } else {
              auth0Client.signIn();
              return null;
            }
          }}
        />

        <Route
          path="/visitorform"
          render={props => {
            return <VisitorForm {...props} />;
          }}
        />

        <Route
          path="/visitorform/confirm"
          render={props => {
            if (sessionStorage.getItem('credentials') !== null) {
              return <Confirmation {...props} />;
            } else {
              auth0Client.signIn();
              return null;
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
