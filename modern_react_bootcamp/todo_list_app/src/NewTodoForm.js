import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid';

class taskForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addTodo({...this.state, id: uuidv4()});
		this.setState({
			task: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='task'>New Todo</label>
				<input 
					id='task'
					type='text' 
					placeholder='New Todo' 
					name='task'
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>ADD TODO</button>
			</form>
		)
	}
}

export default taskForm;