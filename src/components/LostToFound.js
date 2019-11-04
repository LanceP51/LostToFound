import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import NavBar from "./navbar/Navbar";
import "./LostToFound.css"
import ApplicationViews from "./ApplicationViews";
import auth0Client from "./login/Auth"



class LostToFound extends Component {

	async componentDidMount() {
		if (this.props.location.pathname === '/callback') return;
		try {
		  await auth0Client.silentAuth();
		  this.forceUpdate();
		} catch (err) {
		  if (err.error !== 'login_required') console.log(err.error);
		}
	  }

	render() {
		return (
			<>
				<NavBar />
				<ApplicationViews />
			</>
		);
	}
}

export default withRouter(LostToFound);