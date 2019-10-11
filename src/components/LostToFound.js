import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import "./LostToFound.css"
import ApplicationViews from "./ApplicationViews";



class LostToFound extends Component {
	render() {
		return (
			<>
				<Navbar />
				<ApplicationViews />
			</>
		);
	}
}

export default LostToFound;
