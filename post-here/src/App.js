import React, { Component } from 'react';
import './App.css';
import  Reddit from './img/reddit.svg'
//components 
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import { Footer } from './components/Footer';
//canvas 
import Canvas from './components/Canvas';
//react-spring
import {useSpring, animated} from 'react-spring';
//transition-groups

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
  -webkit-box-shadow: -1px 2px 28px -9px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 2px 28px -9px rgba(0,0,0,0.75);
  box-shadow: -1px 2px 28px -9px rgba(0,0,0,0.75);
  background: #e570e7; /* Old browsers */
  background: linear-gradient(to right, #e570e7 0%,#e0641d 54%,#a849a3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e570e7', endColorstr='#a849a3',GradientType=0 ); /* IE6-9 */
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
`;

const App = () => {
  
  const fade = useSpring({opacity: 1, from: {opacity: 0}});
    return (
      <animated.div className="App" style={fade}>
        <Nav className="nav">
          <div>
            <Logo src={Reddit} />
          </div>
          <div>
            <NavLink className="link" to="/home">Home</NavLink>
          </div>
        </Nav>
        <Route exact path="/register" component={ Register } />
        <Route exact path="/" component={ Login } />
        <PrivateRoute exact path="/home" component={ Homepage } />
        <Canvas />
        <Footer />
      </animated.div>
    );

}

export default App;
