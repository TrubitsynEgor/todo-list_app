import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import AddItem from './components/AddItem'
import './App.css'

export default class App extends Component {

	constructor() {
		super();

		this.maxId = 100;

		this.state = {
			todoData: [
				{ label: 'Drink coffee', important: false, id: 1 },
				{ label: 'Create React App', important: true, id: 2 },
				{ label: 'Have a lunch', important: false, id: 3 },
			]
		};

		this.deleteItem = (id) => {
			this.setState(({ todoData }) => {
				const index = todoData.findIndex((el) => el.id === id);
				const newArray = [
					...todoData.slice(0, index),
					...todoData.slice(index + 1)
				];
				return { todoData: newArray }
			})
		}

		this.addItem = (text) => {
			const newItem = {
				label: text,
				important: false,
				id: this.maxId++
			};
			console.log(newItem.id);
			this.setState(({ todoData }) => {
				const newArray = [...todoData, newItem]
				return { todoData: newArray };
			})
		};

	}



	render() {
		const { todoData } = this.state;

		return (
			<div className='app' >
				<AppHeader />
				<SearchPanel />
				<TodoList todos={todoData} onDeleted={this.deleteItem} />
				<AddItem onItemAdded={this.addItem} />
			</div>
		)
	}
}
