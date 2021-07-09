import './App.css';
import Home from "./screens/Home"
import PreviewTask from "./screens/PreviewTask"
import CreateEditTask from './screens/CreateEditTask'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import history from './routeHistory';
import { useSelector } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

function App() {  
  
    const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    return (
      <Router history={history}>
        <Switch>
          <Provider store={store}>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/create_edit_task"><CreateEditTask edit={false}/></Route>
          <Route exact path="/create_edit_task/edit"><CreateEditTask edit={true}/></Route>
          <Route exact path="/preview_task/:id"><PreviewTask /></Route>
          </Provider>
        </Switch>
      </Router >
    );
  }

export default App;
