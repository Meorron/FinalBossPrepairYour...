import React, { Component } from 'react';
import Createstyle from '../../assets/styles/components/create/create.scss';

export default class Main extends Component {
	onSubmit = event => {
	event.preventDefault();
		let newOrder = {
			name: this.name.value,
			desc: this.description.value,
			price: this.price.value,
			image: this.img.value
		};	
	this.props.addNewOrder(newOrder);
	};

	render() {
		return(

			<div className="background">
				<div className = "container">
					<form onSubmit={this.onSubmit}  autocomplete="off">
						<div className = "row">
							<div className="col-md-6">
									<div className="form-group-name">
										<label for="exampleInputEmail1">Name</label>
										<input type="text" className="inputName"  placeholder="name of your project" maxlength="10" ref={(el) => this.name = el}/>	    
									</div>
									<div className="form-group-description">
					    				<label for="exampleFormControlTeinputNamextarea1">Description</label>
					    				<textarea className="inputDesc" rows="5" placeholder="description of your project"  ref={(el) => this.description = el}> </textarea>
					  				</div>
					  		</div>
					  		<div className="col-md-6">
					  				<div className="form-group-image">
					    				<label for="exampleFormControlTeinputNamextarea1">Image</label>
					    				<input className="inputDesc" ref={(el) => this.img = el}/>
					  				</div>
					  				<div className="form-group-price">
					    				<label for="exampleFormControlTeinputNamextarea1" >Price</label>
					    				<input type="number" className="inputDesc"  ref={(el) => this.price = el}/>
					  				</div>	

					  		</div>
					  		<div className="col-md-6">
					  				<h3>Contact information</h3>

									<div className="form-group-phone">
										<label for="exampleInputEmail1">Phone</label>
										<input type="text" className=""/>	    
									</div>
									<div className="form-group-email">
										<label for="exampleInputEmail1">Email</label>
										<input type="text" className=""/>	    
									</div>		  				
			  				</div>
			  				<div className="col-md-6">
								<button type="submit" className="submit">Add on the Board</button> 				
			  				</div>
			  			</div>
		  			</form>
		  		</div>
  			</div>
			)
	}
}