import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './Jobprewie/JobPrewie.jsx';

export default class Board extends Component {
	 constructor() {
				super();

				this.state = {
				    appName: 'HeroBook',
				    heroList: [
				        {
				          name:'funnyman',
				          desc:'God of Party',
				          img: "./images/funnyman.jpg"

				        },
				        {
				          name:'Jimbo',
				          desc:'Starcraft profi',
				          img:"./images/geek.jpg"
				          
				        },
				        {
				          name:'Jonatan Jostar',
				          desc:'Hamon master',
				          img:"./images/jonathan.png"
				        },
				        {
				          name:'superman',
				          desc:'not enough to be proffesional? as Jonatan? bt is red pants are awesome',
				          img: "https://im7.kommersant.ru/ISSUES.PHOTO/WEEKEND/2018/020/spw20_introd.png"
				        }
				      ]
				    }
					 
			}
	render() {


		let cardList = this.state.heroList.map((hero, i) => {	
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