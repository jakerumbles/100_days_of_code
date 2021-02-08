import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.addTodo = this.addTodo.bind(this);
		this.remove = this.remove.bind(this);
	}

	addTodo(newTodo) {
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	}

	remove(id) {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		});
	}

	render() {
		const todosList = this.state.todos.map(todo => {
			return <Todo key={todo.id} id={todo.id} todoItem={todo.task} removeTodo={this.remove} />;
		});

		return (
			<div>
				<h1>Todo List!</h1>
				<p>A Simple React Todo List App.</p>
				<ul>{todosList}</ul>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		)
	}
}

export default TodoList;