import React from 'react';
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector(({tasks}) => tasks);
	

	return (
		<ul className="tasks-list">
			{todos && todos.map((todo) => (
				<li className="task-item">
					<div>
						{todo.title}
					</div>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
