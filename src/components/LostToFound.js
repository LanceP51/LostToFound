import React, { Component } from "react";
import NavBar from "./navbar/Navbar";
import "./LostToFound.css"
import ApplicationViews from "./ApplicationViews";



class LostToFound extends Component {
	render() {
		return (
			<>
				<NavBar />
				<ApplicationViews />
			</>
		);
	}
}

export default LostToFound;
