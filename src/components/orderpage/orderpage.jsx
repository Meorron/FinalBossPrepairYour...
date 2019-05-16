import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Card extends Component {
		render() {
			
			const orderData = this.props.orders.filter(order => order.name === this.props.match.params.name);

		return(
			<>
				


						<h1>{this.props.match.params.name}</h1>
				<div className = "row">
					<div className="col-md-6">
						<img src={orderData[0].img}/>
					</div>
					<div className="col-md-6">
						{orderData[0].desc}
					</div>

				</div>
				<div className = "notes">
					<p>blah blah blah</p>
				</div>
				<div className = "row">
					<div className="col-md-6">
						<button>Main</button>
					</div>
					<div className="col-md-6">
						<p className = "profile">lmao</p>
						
					</div>
				</div>
			</>
			)
	}
}