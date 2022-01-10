import React from 'react';

const Todo = props => {
    const handleClick = () => {
    props.handleToggleTodo(props.todo);
}

return (
    <div onClick={handleClick}>
        <p>{props.todo.task}</p>
    </div>
)
};

export default Todo;