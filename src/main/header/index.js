import React, { Component } from 'react';
import './header.css';

import ResumeFile from "../files/Sarot_Resume.pdf";

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark header-styles">
        <a className="navbar-brand" href="/home">Sarot Busala</a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">Publications</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href={ResumeFile}>Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">Blogs</a>
            </li>

          </ul>
      </nav>
    );
  }
}

export default HeaderComponent;
