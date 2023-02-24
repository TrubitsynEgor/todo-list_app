import React from 'react';
import './AppHeader.css'

const AppHeader = ({ toDo, done }) => {
	return (
		<header className="header">
			<h1 className="header__title">My Todo list</h1>
			<div className="header__status">
				{toDo} more to do, {done} done
			</div>
		</header>)

}

export default AppHeader;