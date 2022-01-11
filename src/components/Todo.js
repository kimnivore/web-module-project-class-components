import React from 'react';


    class Todo extends React.Component {
        handleClick = () => {
            this.props.handleToggle(this.props.todo);
        }

        render() {
            // return (<li onClick={this.handleClick}>{this.props.todo.task} { this.props.todo.completed ? <span>-completed</span> : <span></span> } </li>)
            return (
                <div onClick={this.handleClick} className={`todo${this.props.todo.completed ? ' completed' : ''}`}>
                    <p>{this.props.todo.task}</p>
                </div>
            )
        }
    }
export default Todo;