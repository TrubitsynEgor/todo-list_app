import React, { Component } from "react"


export default class ItemStatusFilter extends Component {

	buttons = [
		{ name: 'all', label: 'all' },
		{ name: 'active', label: 'active' },
		{ name: 'done', label: 'done' },
	];

	render() {

		const { filter, onFilterChange } = this.props;

		const buttons = this.buttons.map(({ name, label }) => {
			const isActive = filter === name;
			const classBtn = isActive ? 'btn-info' : 'btn-outline-secondary'
			return (
				<button type="button" className={`btn ${classBtn}`} key={name} onClick={() => onFilterChange(name)}>{label}</button>
			)
		});

		return (
			<div className='btn-group'>
				{buttons}
			</div>
		)
	}
}


