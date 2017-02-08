import React, { Component } from 'react'

// UI Components
import LoginButtonContainer from './login/LoginButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

// Images
import uPortLogo from './img/uport-logo.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
            <ul className="pure-menu-list navbar-right">
                <LoginButtonContainer />
            </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default App
