import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'


const TodoList = ({ todos }) => {

	const elements = todos.map((item) => {

		const { id, ...other } = item;
		return (
			<li className="list-group-item" key={id}><TodoListItem {...other} /></li>
		)
	})
	return (
		<ul className="list-group todo-list">
			{elements}
		</ul>
	)
}

export default TodoList;