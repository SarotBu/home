import React, { Component } from 'react';

import HomeComponent from './home';
import HeaderComponent from './header';

import './styles.css';

class MainIndex extends Component {
  render() {
    return (
      <div class="bg-css">
        <div class="container">
          <div class="bg-css">
            <HeaderComponent />
            <div class="home-content">
              <HomeComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainIndex;
