import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {

	constructor() {
		super();

		this.state = {
			done: false,
			important: false,
		};

		this.onLabelClick = () => {
			this.setState(({ done }) => {
				return {
					done: !done
				}
			})
		};
		this.onMarkImportant = () => {
			this.setState(({ important }) => {
				return {
					important: !important
				}
			})
		};

	};


	render() {
		const { label } = this.props;
		const { done, important } = this.state;

		let classNames = 'todo-list-item';
		if (done) {
			classNames += ' done'
		}
		if (important) {
			classNames += ' important'
		}

		return (
			<span className={classNames}>
				<span
					className="todo-list-item-label "
					onClick={this.onLabelClick}>
					{label}
				</span>


				<div className='todo-list-item__svg' >

					<button className='todo-list-item__btn btn'>
						<svg xmlns="http://www.w3.org/2000/svg" className="bi bi-trash todo-list-item__svg" viewBox="0 0 16 16">
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
							<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
						</svg>
					</button>

					<button className='todo-list-item__btn btn' onClick={this.onMarkImportant}>
						<svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-lg todo-list-item__svg" viewBox="0 0 16 16">
							<path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
						</svg>
					</button>
				</div>

			</span>


		)

	}
}

// const TodoListItemF = ({ label, important = false }) => {
// 	const style = {
// 		color: important ? 'tomato' : 'Grey',
// 		fontWeight: important ? '600' : '400'
// 	}
// 	return (
// 		<span
// 			className="todo-list-item"
// 			style={style}>
// 			{label}

// 			<div className='todo-list-item__svg'>

// 				<button className='todo-list-item__btn btn'>
// 					<svg xmlns="http://www.w3.org/2000/svg" className="bi bi-trash todo-list-item__svg" viewBox="0 0 16 16">
// 						<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
// 						<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
// 					</svg>
// 				</button>

// 				<button className='todo-list-item__btn btn'>
// 					<svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-lg todo-list-item__svg" viewBox="0 0 16 16">
// 						<path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
// 					</svg>
// 				</button>
// 			</div>
// 		</span>



// 	)
// }



