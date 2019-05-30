import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Prewiestile from '../../../../assets/styles/components/jobBoard/jobPreview/jobPreview.scss';
import enumContainer from '../../../../enums.js';

export default class Card extends Component {
	render() {

		return(
				<div className="col-md-6">
					<div className="card ">
						<div className="job-preview">
							<div className="job-preview__image" style = {{ backgroundImage: `url(${this.props.data.img ? this.props.data.img : enumContainer.defaultImageUrl})`}}></div>
							
						  	<div className="card-body job-preview__info">
							    <div className="card-title">
							    	<h5>Project name: </h5>
							    	<h5>{this.props.data.name}</h5>
							    </div>
							    <div className="card-price">
							    	<h6>Price: </h6>
							    	<h6>{!isNaN(this.props.data.price) ? `${this.props.data.price} $` : 'contaced price'}</h6>
							    </div>

							 <Link to={`/order/${this.props.data.name}`} href="#" className="button">More</Link>
							 
							 
						   
						  </div>

						  <div className="profilePic" title={this.props.data.customer} style = {{ backgroundImage: `url(${this.props.data.customerimg})`}}></div>

						</div>
					</div>
				</div>
			)
	}
}