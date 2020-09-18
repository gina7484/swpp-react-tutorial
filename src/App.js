import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList/TodoList';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import NewTodo from './containers/TodoList/NewTodo/NewTodo'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/todos' exact render={()=> <TodoList title="My TODOs!"/>}/>
        <Route path='/new-todo' exact component={NewTodo}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
