import React, { Component } from 'react';
import './App.css';
import  Reddit from './img/reddit.svg'
//components 
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import { Footer } from './components/Footer';
//routing 
import { Route, NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';
//styled-components
const Nav = styled.div`
  display: flex;
  padding: 10px;
  background-color: purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav className="nav">
          <div>
            <Logo src={Reddit} />
          </div>
          <div>
            <NavLink className="link" to="/login">Login</NavLink>
            <NavLink className="link" to="/register">Register</NavLink>
            <NavLink className="link" to="/home">Home</NavLink>
          </div>
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
