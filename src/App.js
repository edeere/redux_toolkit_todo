import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';

const App = () => {
	return (
		<div className="app">
			<Card style={{padding: 20}}>
				<h1 className="app-title">My Tasks</h1>
				<AddTodo />
				<TodoList />
			</Card>
		</div>
	);
};

export default App;
