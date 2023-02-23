import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import './App.css'

const App = () => {
	const todoData = [
		{ label: 'Drink coffee', important: false, id: 1 },
		{ label: 'Create React App', important: true, id: 2 },
		{ label: 'Have a lunch', important: false, id: 3 },
	];

	return (
		<div className='app'>
			<AppHeader />
			<SearchPanel />
			<TodoList todos={todoData} />
		</div>
	)
}

export default App;