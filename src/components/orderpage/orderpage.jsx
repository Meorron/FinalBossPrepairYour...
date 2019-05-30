import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Orderstyle from '../../assets/styles/orderpage.scss';
import enumContainer from '../../enums.js';
export default class Card extends Component {
		render() {
			
			const orderData = this.props.orders.filter(order => order.name === this.props.match.params.name);
			console.log(orderData);

		return(
			<div className="container">
				<h1>{this.props.match.params.name}</h1>
				<div className = "row">	
					<div className="col-md-4">
						<div className="orderpage__image" style={{ backgroundImage: `url(${orderData[0].img ? orderData[0].img : enumContainer.defaultImageUrl})`}}></div>
					</div>
					<div className="col-md-8">
						<div className="orderpage-info">
							<div className="info-desc">
								{orderData[0].desc}
							</div>
							<div className="info-price">
								<h6>price:</h6>
								<h6>{!isNaN(orderData[0].price) ? `${orderData[0].price} $` : 'contaced price'}</h6>
							</div>											
						</div>
					</div>
				</div>

				<div className="profile">
					<div className="profileImage" style={{ backgroundImage: `url(${orderData[0].customerimg})`}}></div>
					<h5>{orderData[0].customer}</h5>
				</div>
			</div>
			)
	}
}