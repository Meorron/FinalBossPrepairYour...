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
						    	{this.props.data.name}
						    </div>
						    <div className="card-price">
						    	{this.props.data.price}
						    </div>
					    <Link to={`/order/${this.props.data.name}`} href="#" className="btn btn-primary">More</Link>
					  </div>
					</div>
				</div>
			</div>
			)
	}
}