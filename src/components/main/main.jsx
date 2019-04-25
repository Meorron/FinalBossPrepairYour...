import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Board from './Jobboard/JobBoard.jsx';
import Filters from './Filters/Filters.jsx';

export default class Main extends Component {
	render() {
		return(
			<>
				<Board/>
			</>	
			)
	}
}