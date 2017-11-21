import React, { Component } from 'react'
import { Link } from 'react-router'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar menu menu-horizontal">
          <ul className="menu-list navbar-right">
            <Link to="/registry" className="menu-heading menu-link">Registry</Link>
            <Link to="/registry-form" className="menu-heading menu-link">New Registration</Link>
          </ul>
          <Link to="/" className="menu-heading menu-link">OSN</Link>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default App
