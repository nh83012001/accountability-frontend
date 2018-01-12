import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Task from './components/Task';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/addtask" component={Task} />

      </div>
    );
  }
}

export default App;
