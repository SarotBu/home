import React, { Component } from 'react';

import HomeComponent from './home';
import HeaderComponent from './header';

import './styles.css';

class MainIndex extends Component {
  render() {
    return (
      
      <div class = "bg-css">
        <HeaderComponent />
        <HomeComponent />
      
      </div>
      
    );
  }
}

export default MainIndex;
