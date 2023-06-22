import React from "react";
import NavBar from './Navbar.jsx';
import Jumbo from "./Jumbo.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<div className="w-100">
		<NavBar/>
		<Jumbo/>
		</div>
	);
};


export default Home;
