import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import Login from './Login';

export default function App() {
  return (        
      <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} hideNavBar={true}></Scene>
          <Scene key="Home" component={Home} hideNavBar={true}></Scene>
        </Scene>
      </Router>

     
  );
}