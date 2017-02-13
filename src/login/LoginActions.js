import { uport, web3 } from './../util/connectors.js'
import { browserHistory } from 'react-router'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  return function(dispatch) {
    web3.eth.getCoinbase(function (err, address) {
      if (err) { throw err }
      web3.eth.defaultAccount = address

      uport.getUserPersona().then((userPersona) => {
        dispatch(userLoggedIn(userPersona.profile))

        // Used a manual redirect here as opposed to a wrapper.
        // This way, once logged in a user can still access the home page.
        var currentLocation = browserHistory.getCurrentLocation()

        if ('redirect' in currentLocation.query)
        {
          return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
        }

        return browserHistory.push('/dashboard')
      })
    })
  }
}
