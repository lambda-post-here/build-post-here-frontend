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
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';
//styled-components
const Nav = styled.div`
  display: flex;
  padding: 5px;
  background-color: #364A7D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: -1px 2px 28px -9px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 2px 28px -9px rgba(0,0,0,0.75);
  box-shadow: -1px 2px 28px -9px rgba(0,0,0,0.75);
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
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
            <a className="link" href="https://post-here-marketing.netlify.com/index.html">Home</a>
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
