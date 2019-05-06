import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './Jobprewie/JobPrewie.jsx';

export default class Board extends Component {
	render() {

		let cardList = this.props.orders.map((hero, i) => {	
			return(
				<Card key={i} data={hero}/>
			)
		});	 

		return(
			<>
				<div className="container">
					<div className="row">
						{cardList}
					</div>
				</div>

			</>	

			)

	}
}