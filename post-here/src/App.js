import React, { Component } from 'react';
import './App.css';
//components 
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
//routing 
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ Register } />
        <Route path="login" component={ Login } />
        <Route path="/homepage" component={ Homepage } />
      </div>
    );
  }
}

export default App;
