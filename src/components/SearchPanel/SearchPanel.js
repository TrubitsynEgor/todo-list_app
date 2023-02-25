import React, { Component } from 'react'
import './SearchPanel.css'



export default class SearchPanel extends Component {

	state = {
		tern: '',
	}
	onSearchChange = (event) => {
		const tern = event.target.value;
		this.setState({ tern });
		this.props.onSearchChange(tern)
	}

	render() {
		return (
			<div className="search-panel">
				<input
					className="search-panel__input input-group-text form-control"
					placeholder='Type here to search'
					value={this.state.tern}
					onChange={this.onSearchChange}
				/>
			</div>
		)
	}
}

