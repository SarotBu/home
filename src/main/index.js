import React, { Component } from 'react';

import HomeComponent from './home';
import HeaderComponent from './header';

import './styles.css';

class MainIndex extends Component {
  render() {
    return (
      <div className="bg-img">
      <br/>
        <div className="container">
            <HeaderComponent />
            <div className="bg-content">
              <HomeComponent />
            </div>
        </div>
        <br/>
      </div>
    );
  }
}

export default MainIndex;
