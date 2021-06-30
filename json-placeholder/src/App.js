import './App.css';
import React from 'react';
import Home from './components/home/home'
import GetRequest from './components/getRequest/getRequest'
import PostRequest from './components/postRequest/postRequest'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/get_request"><GetRequest /></Route>
          <Route exact path="/post_request"><PostRequest /></Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
