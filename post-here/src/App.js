import React, { Component } from 'react';
import './App.css';
//components 
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
//routing 
import { Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/home">Home</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
        <hr />
        <Route  path="/register" component={ Register } />
        <Route  path="/login" component={ Login } />
        <Route  path="/home" component={ Homepage } />
      </div>
    );
  }
}

export default App;
