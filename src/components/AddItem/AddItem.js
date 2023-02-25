import React, { Component } from "react";
import './AddItem.css'


export default class AddItem extends Component {
	constructor() {
		super();

		this.state = {
			label: '',
		}

		this.onLabelChange = (event) => {
			this.setState({
				label: event.target.value
			})
		}



		this.onSubmit = (event) => {
			event.preventDefault();
			this.props.onItemAdded(this.state.label)
			this.setState({
				label: ''
			})
		}
	}

	render() {

		return (
			<form className="add-item d-flex" onSubmit={this.onSubmit}>
				<input type='text'
					className="form-control"
					onChange={this.onLabelChange}
					placeholder='Whats need to be done?'
					value={this.state.label}
				></input>
				<button className="add-item__btn btn btn-outline-secondary" >Add todo!</button>
			</form>
		)
	}
}


