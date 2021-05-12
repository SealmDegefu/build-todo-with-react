import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav className= "navbar">
		<h1> Fitness-Tracker</h1>
		<div className="links">
			<Link to="/">Home</Link>
			<br />
			<Link to="/workout">WorkOut Plans</Link>
		</div>
		</nav>
	)
}

export default NavBar