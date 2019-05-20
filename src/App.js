import React, { Component } from 'react';
import NavBar from './components/Navbar/NavBar.jsx';
import Main from './components/Main/Main.jsx';
import Create from './components/create/create.jsx';
import Order from './components/Orderpage/orderpage.jsx';
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
                  img: "./images/funnyman.jpg",
                  price:10

                },
                {
                  name:'Power armor',
                  desc:'I have this brilliant work of helmet of @JimboArtist, i like it very much. Can some body design a body for this costume? it would be great if it will be in the similar art style',
                  img:"https://pp.userapi.com/c851424/v851424792/122d3b/CbxzHh-XRx4.jpg",
                  price:'contracted price'
                  
                },
                {
                  name:'Johana Causen',
                  desc:'Human warrior, it is an art, and i want to have full-body referens. in interesting art-style. Can some body solve my problem? u can create your own armor style, as i have not any design skills. And pleas before to make thith attach your portfolio',
                  img:"https://pp.userapi.com/c851020/v851020277/5a23b/05NND6mVPug.jpg",
                  price:'contracted price'
                },
                {
                  name:'Cavierr Lonzelot',
                  desc:'young human warrior 27 yo.Always very gloomy. Black hair, green eyes. He is 176 centimeters. Always wear dark clothes. I want to see him in a new style in everyday rich fantasy citizen clothes, pls',
                  img: "https://pp.userapi.com/c846320/v846320158/1459c3/WLRYwTZZPeA.jpg",
                  price:5
                }
              ]
            }          
    }

        addNewOrder = order => {
          let newOrder = this.state.orderList;
          newOrder.push(order);
          this.setState({orderList: newOrder});
        }


  render() {
    return (
    	<>
	    	<NavBar/>
        <Route exact path="/"
          render={(props) => <Main orders={this.state.orderList}/>}/>
	    	<Route path="/create" 
          render={(props) => <Create addNewOrder={(order) => this.addNewOrder(order)}/>}/>
	    	<Route path="/order/:name"
          render={props => <Order {...props} orders={this.state.orderList}/>}/>
        }
    	</>
    );

  }
}

export default App;
