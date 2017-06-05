import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Good to Go!</h1>
            <p>Your Truffle Box is installed and ready.</p>
            <h2>UPort Authentication</h2>
            <p>This particular box comes with UPort autentication built-in.</p>
            <p>NOTE: To interact with your smart contracts through UPort's web3 instance, make sure they're deployed to the Ropsten testnet.</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with UPort. There is an authenticated route, "/dashboard", that displays the UPort user's name once authenticated.</p>
            <h3>Redirect Path</h3>
            <p>This example redirects home ("/") when trying to access an authenticated route without first authenticating. You can change this path in the failureRedriectUrl property of the UserIsAuthenticated wrapper on <strong>line 9</strong> of util/wrappers.js.</p>
            <h3>Accessing User Data</h3>
            <p>Once authenticated, any component can access the user's data by assigning the authData object to a component's props.</p>
            <pre><code>
              {"// In component's constructor."}<br/>
              {"constructor(props, { authData }) {"}<br/>
              {"  super(props)"}<br/>
              {"  authData = this.props"}<br/>
              {"}"}<br/><br/>
              {"// Use in component."}<br/>
              {"Hello { this.props.authData.name }!"}
            </code></pre>
            <h3>Further Reading</h3>
            <p>The React/Redux portions of the authentication fuctionality are provided by <a href="https://github.com/mjrussell/redux-auth-wrapper" target="_blank">mjrussell/redux-auth-wrapper</a>.</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
