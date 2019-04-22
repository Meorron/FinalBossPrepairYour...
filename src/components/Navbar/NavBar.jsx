import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <Link to={'/main'} className="nav-link">Main</Link>
				      </li>
				      <li className="nav-item">
				        <Link to={'/makeAnOrder'} className="nav-link" >Create</Link>
				      </li>
				      <li className="nav-item">
				        <Link to={'/checkInfo'} className="nav-link" >Info</Link>
				      </li>

				    </ul>
				 
				  </div>
				</nav>
			)
	}
}