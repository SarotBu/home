import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">Sarot Busala</a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">Projects<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/home">Publications</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/home">Blogs</a>
            </li>

          </ul>
      </nav>
    );
  }
}

export default HeaderComponent;
