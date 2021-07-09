import './App.css';
import Home from "./screens/Home"
import PreviewTask from "./screens/PreviewTask"
import CreateEditTask from './screens/CreateEditTask'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import history from './routeHistory';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [],
    }
  }
  render(){
    const addingDataHandler = (data) => {
      this.setState((state)=>({
        todos: [data, ...state.todos]
      }))
    };

    const editingDataHandler = (data) =>{
        const id = localStorage.getItem('id')
        const task = this.state.todos.find(element => element.id == id)
        const todoList = this.state.todos
        const index = todoList.indexOf(task)
        todoList[index] = data
        this.setState((state)=>({
          todos: todoList
        }))
    }

    const deleteDataHandler = (data)=>{
      const id = localStorage.getItem('id')
      // const task = this.state.todos.find(element => element.id == id)
      const todoList = this.state.todos
      const index = todoList.indexOf(data)
      todoList.splice(index, 1);
      this.setState((state)=>({
        todos: todoList
      }))
    }

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/"><Home todoList={this.state.todos} /></Route>
          <Route exact path="/create_edit_task"><CreateEditTask onAddingData={addingDataHandler} todoList={this.state.todos} /></Route>
          <Route exact path="/create_edit_task/edit"><CreateEditTask onAddingData={addingDataHandler} todoList={this.state.todos} edit={true} onEditingData={editingDataHandler}/></Route>
          <Route exact path="/preview_task/:id"><PreviewTask todoList={this.state.todos} onDeletingData={deleteDataHandler} /></Route>
        </Switch>
      </Router >
    );
  }
}

export default App;
