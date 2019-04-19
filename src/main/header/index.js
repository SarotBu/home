import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">Sarot Busala</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Projects<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">Publications</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">Blogs</a>
            </li>
            
          </ul>
        </div>
      </nav>
                );
            }
        }
        
        export default HeaderComponent;
