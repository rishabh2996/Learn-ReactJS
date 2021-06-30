import './App.css';
import Home from "./screens/Home"
import PreviewTask from "./screens/PreviewTask"
import CreateEditTask from './screens/CreateEditTask'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';


function App() {

  const [todos, addTodos] = useState([]);
  const addingDataHandler = (data) => {
    addTodos((prevTodos) => {
      return [data, ...prevTodos];
    });
  };


  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home todoList={todos} /></Route>
        <Route exact path="/create_edit_task"><CreateEditTask onAddingData={addingDataHandler} todoList={todos} /></Route>
        <Route exact path="/preview_task"><PreviewTask todoList={todos} /></Route>
      </Switch>
    </Router >
  );
}

export default App;
