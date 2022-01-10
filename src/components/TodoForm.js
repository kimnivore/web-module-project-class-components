import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleChange}
                type='text'
                name='todo'
                placeholder='...todo'
                />
                <button onClick={this.handleAddTodo}>Add Todo</button>
            </form>
        );
    }
    }

export default TodoForm;