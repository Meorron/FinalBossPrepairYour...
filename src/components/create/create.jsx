import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Main extends Component {
	constructor (){
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event){
		let newOrder = {
			name: this.name.value,
			desc: this.description.value			
		};
	event.preventDefault();
	this.props.AddNewOrder(newOrder);
	}

	render() {
		return(
			<>
			<div className = "container">
				<div className = "row">
					<div className="col-md-6">
						<div>
							<div className="form-group">
								<label for="exampleInputEmail1">Name</label>
								<input type="text" className=""  placeholder="name of your project" ref={(el) => this.name = el}/>	    
							</div>
							<div className="form-group">
			    				<label for="exampleFormControlTeinputNamextarea1">Description</label>
			    				<textarea className="inputDesc" rows="5" placeholder="description of your project" ref={(el) => this.description = el}> </textarea>
			  				</div>
			  			</div>
			  		</div>
			  		<div className="col-md-6">
			  			<div>
			  				<div className="form-group">
			    				<label for="exampleFormControlTeinputNamextarea1">Image</label>
			    				<button>add</button>
			  				</div>
			  				<div className="form-group">
			    				<label for="exampleFormControlTeinputNamextarea1">Notes</label>
			    				<textarea className="inputDesc" rows="5" placeholder="add some notes"></textarea>
			  				</div>	
			  			</div>


			  		</div>
			  		<div className="col-md-6">
			  				<h3>Contact information</h3>

							<div className="form-group">
								<label for="exampleInputEmail1">Phone</label>
								<input type="text" className=""/>	    
							</div>
							<div className="form-group">
								<label for="exampleInputEmail1">Email</label>
								<input type="text" className=""/>	    
							</div>		  				
	  				</div>
	  				<div className="col-md-6">
						<button type="submit" className="submit">Add on the Board</button> 				
	  				</div>
	  			</div>
  			</div>
			</>	
			)
	}
}