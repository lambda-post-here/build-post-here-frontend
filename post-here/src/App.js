import React, { Component } from 'react';
import './App.css';
//components 
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
//routing 
import { Route, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
//styled-components
const Nav = styled.div`
  display: flex;
  padding: 10px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
          <Link to="/home">Home</Link>
          <br />
          <Link to="/register">Register</Link>
          <br />
          <Link to="/login">Login</Link>
          <hr />
        </Nav>
        <Route  path="/register" component={ Register } />
        <Route  path="/login" component={ Login } />
        <Route  path="/home" component={ Homepage } />
      </div>
    );
  }
}

export default App;
