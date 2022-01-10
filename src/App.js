import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './style.css';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }
//Clear Completed Button
  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    });
  }

//Add Todo Button
  handleAddTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }
  //Toggle Completed
  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(item => {
        if(item.id === selectedTodo.id) {
          return({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
      })
    })
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList handleToggleTodo={this.handleToggleTodo} todos={todos} />
        <TodoForm handleAddTodo={this.handleAddTodo}/>
        <button onClick={this.handleClearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
