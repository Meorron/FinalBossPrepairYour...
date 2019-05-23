import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbarstile from '../../assets/styles/navBar.scss';

export default class Navbar extends Component {
	render() {
		return(

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				    	<h1>ImgieArt</h1>
				      <li className="nav-item active">
				        <Link to={'/'} className="nav-link">Main</Link>
				      </li>
				      <li className="nav-item">
				        <Link to={'/create'} className="nav-link" >Create</Link>
				      </li>
				      <li className="nav-item">
				        <Link to={'/info'} className="nav-link" >Info</Link>
				      </li>

				    </ul>
				 
				  </div>
				</nav>
			)
	}
}