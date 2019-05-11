import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Card extends Component {
	render() {
		return(
			<div className="col-md-6">
				<div className="card">
				  <img src="..." className="card-img-top" alt="..."/>
				  <div className="card-body">
				    <div className="card-title">
				    	{this.props.data.name}
				    </div>
				    <div className="card-text">
				    	{this.props.data.desc}
				    </div>
				    <Link href="#" className="btn btn-primary">Go somewhere</Link>
				  </div>
				</div>
			</div>
			)
	}
}