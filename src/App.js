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

			],
			tern: '',
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

		this.searchItem = (items, tern) => {
			if (tern.length === 0) return items;
			return items.filter((item) => item.label.toLowerCase().indexOf(tern.toLowerCase()) > -1)
		}
		this.onSearchChange = (tern) => {
			this.setState({ tern });
		}

	};




	render() {
		const { todoData, tern } = this.state;
		const visibleItems = this.searchItem(todoData, tern)
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className='app' >
				<AppHeader toDo={todoCount} done={doneCount} />
				<SearchPanel onSearchChange={this.onSearchChange} />
				<TodoList
					todos={visibleItems}
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone} />

				<AddItem onItemAdded={this.addItem} />
			</div>
		)
	}
}
