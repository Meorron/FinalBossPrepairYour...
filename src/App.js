import React, { Component } from 'react';
import NavBar from './components/Navbar/NavBar.jsx';
import Main from './components/Main/Main.jsx';
import Create from './components/create/create.jsx';
import { Route } from 'react-router-dom';

class App extends Component {
    constructor() {
        super();

        this.state = {
            appName: 'orders',
            orderList: [
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
    return (
    	<>
	    	<NavBar/>
	    	<Route path="/create" component={Create}/>

	    	<Route path="/Main"
          render={(props) => <Main orders={this.state.orderList}/>}/>
	    	
    	</>
    );

  }
}

export default App;
