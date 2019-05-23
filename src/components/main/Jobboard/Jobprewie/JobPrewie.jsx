import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Prewiestile from '../../../../assets/styles/components/jobBoard/jobPreview/jobPreview.scss';

export default class Card extends Component {
	render() {
		return(
			<div className="col-md-6">
				<div className="card ">
					<div className="job-preview">
						<div className="job-preview__image" style = {{ backgroundImage: `url(${this.props.data.img})`}}></div>
						
					  	<div className="card-body job-preview__info">
						    <div className="card-title">
						    	<h6>Project name</h6>
						    	<h5>{this.props.data.name}</h5>
						    </div>
						    <div className="card-price">
						    	<h6>Price: </h6>
						    	<h6>{this.props.data.price}</h6>
						    </div>
					    <Link to={`/order/${this.props.data.name}`} href="#" className="btn btn-primary">More</Link>
					  </div>
					</div>
				</div>
			</div>
			)
	}
}