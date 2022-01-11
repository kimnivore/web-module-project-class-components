import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './style.css';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //Handles:
  //1. setState
  //2. change todos
  //3. find the todo we clicked on
  //4. flip the value of the completed for the todo
  //5. keep all other todos the same

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
          completed: false
        }
      ]
    }
  }
//Clear Button
  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

//Add Todo Button
  handleAddTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }
  //Toggle Completed
  handleToggle = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === selectedTodo) {
          return({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo;
        }
      })
    })
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <TodoForm handleAddTodo={this.handleAddTodo}/>
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
