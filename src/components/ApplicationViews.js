import { Route } from "react-router-dom";
import React, { Component } from "react";
// import NavBar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import ParkHome from "../components/parkhome/ParkHome";
import ItemsList from "../components/parkhome/ItemsList";
import VisitorForm from "../components/visitors/VisitorForm";

class ApplicationViews extends Component {
  // isAuthenticated = () => localStorage.getItem("userId") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          path="/home"
          render={props => {
            return <Home {...props} />;
          }}
        />

        <Route
          path="/login"
          render={props => {
            return <Login {...props} />;
          }}
        />

        <Route
          path="/parkhome"
          render={props => {
            return <ParkHome {...props} />;
          }}
        />

        <Route
          path="/items"
          render={props => {
            return <ItemsList {...props} />;
          }}
        />

        <Route
          exact
          path="/visitorform"
          render={props => {
            return <VisitorForm {...props} />;
          }}
        />

        {/* <Route
          path="/visitorform/confirm"
          render={props => {
            return <VisitorConfirm {...props} />;
          }}
        /> */}
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
