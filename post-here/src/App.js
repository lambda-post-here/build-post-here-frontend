import React, { Component } from 'react';
import './App.css';
//components 
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import { Footer } from './components/Footer';
//routing 
import { Route, NavLink, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';
//styled-components
const Nav = styled.div`
  display: flex;
  padding: 10px;
  
`;

const Link = styled.a`
  text-decoration: none;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav className="nav">
          <NavLink className="link" to="/login">Login</NavLink>
          <NavLink className="link" to="/register">Register</NavLink>
          <NavLink className="link" to="/home">Home</NavLink>
        </Nav>
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
        <PrivateRoute path="/home" component={ Homepage } />
        <Footer />
      </div>
    );
  }
}

export default App;
