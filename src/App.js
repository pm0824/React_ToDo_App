import React, {Component} from 'react';
import Todos from './todos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos:[
      {id:1, content:'Buy fruits'},
      {id:2, content:'Watch Ted Talks'}
    ]
  }

  deleteTodo = (id)=>{
    console.log(id);
    const todos = this.state.todos.filter(todo=>{
      return todo.id!==id
    });
    this.setState({todos}) //key value same name  todos:todos
  }

  addTodo= (todo)=>{
      todo.id=Math.random();
      const todos = [...this.state.todos,todo];
      this.setState({
        todos
      })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
  
}

export default App;
