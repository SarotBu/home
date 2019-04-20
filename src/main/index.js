import React, { Component } from 'react';

import HomeComponent from './home';
import HeaderComponent from './header';

import './styles.css';

class MainIndex extends Component {
  render() {
    return (
      <div className="bg-img">
      adfdsafadasf
        <div className="container">
            <HeaderComponent />
            <div className="bg-content">
              <HomeComponent />
            </div>
        </div>
      </div>
    );
  }
}

export default MainIndex;
