import React, { Component } from 'react';

import HomeComponent from './home';
import HeaderComponent from './header';

import './styles.css';

class MainIndex extends Component {
  render() {
    return (
      <div className="bg-css">
        <div className="container">
          <div className="bg-css">
            <HeaderComponent />
            <div className="home-content">
              <HomeComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainIndex;
