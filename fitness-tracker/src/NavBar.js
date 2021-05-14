import React from 'react'
import { Link } from 'react-router-dom'
import * as ReactBootStrap from 'react-bootstrap'
import { SiHomeassistant } from "react-icons/si";
import { FaDumbbell } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";



class NavBar extends React.Component {
	render () {
	return (
		<>
		<ReactBootStrap.Navbar bg="dark" variant="dark">
		<ReactBootStrap.Navbar.Brand href="#home">Welcome</ReactBootStrap.Navbar.Brand>
		<ReactBootStrap.Nav className="mr-auto">
		  <ReactBootStrap.Nav.Link> <Link style={{color: 'gray'}} to="/"> <SiHomeassistant /> Home</Link></ReactBootStrap.Nav.Link>
		  <ReactBootStrap.Nav.Link><Link style={{color: 'gray'}} to="/workout"> <FaDumbbell /> WorkOut Plans</Link></ReactBootStrap.Nav.Link>
		  <ReactBootStrap.Nav.Link><Link style={{color: 'gray'}} to="/About"><FaPeopleCarry />About us </Link></ReactBootStrap.Nav.Link>
		</ReactBootStrap.Nav>
		</ReactBootStrap.Navbar>

		<div>
		<h1 style={{marginTop: "30px", fontSize: "60px", opacity: 1}}>Fitness Tracker</h1>
            <div className="ui form">
        <em>World's Best Accountable Partner</em>
		</div>
		</div>
		</>
	)
}
}

export default NavBar


	{/* <nav className= "navbar">
		  <h1 style={{marginTop: "30px", fontSize: "60px", opacity: 1}}>Fitness-Tracker</h1>
            <div className="ui form">
        <p style={{marginBottom: "30px", fontSize: "20px"}}><em>World's Best Accountable Partner</em></p>
		<div className="links">
			<Link to="/">Home</Link>
			<br />
			<Link to="/workout">WorkOut Plans</Link>
		</div>
		</div>
		</nav> */}