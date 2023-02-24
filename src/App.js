import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import AddItem from './components/AddItem'
import './App.css'

export default class App extends Component {

	constructor() {
		super();

		this.toggleProperty = (arr, id, propName) => {
			const index = arr.findIndex((el) => el.id === id);
			const oldItem = arr[index]
			const newItem = { ...oldItem, [propName]: !oldItem[propName] }
			return [
				...arr.slice(0, index),
				newItem,
				...arr.slice(index + 1)
			];
		}

		this.createTodoItem = (label) => {
			return {
				label,
				important: false,
				id: this.maxId++
			}
		}

		this.maxId = 100;

		this.state = {
			todoData: [
				this.createTodoItem('Drink coffee'),
				this.createTodoItem('Create React App'),
				this.createTodoItem('Have a lunch'),
			],
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
		};

		this.addItem = (text) => {
			const newItem = this.createTodoItem(text);

			this.setState(({ todoData }) => {
				const newArray = [...todoData, newItem]
				return { todoData: newArray };
			})
		};

		this.onToggleImportant = (id) => {
			this.setState(({ todoData }) => {
				return {
					todoData: this.toggleProperty(todoData, id, 'important')
				}
			})
		};

		this.onToggleDone = (id) => {
			this.setState(({ todoData }) => {
				return {
					todoData: this.toggleProperty(todoData, id, 'done')
				}
			})
		}
	};





	render() {
		const { todoData } = this.state;
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className='app' >
				<AppHeader toDo={todoCount} done={doneCount} />
				<SearchPanel />
				<TodoList
					todos={todoData}
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone} />

				<AddItem onItemAdded={this.addItem} />
			</div>
		)
	}
}
