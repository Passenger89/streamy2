import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '284830427990-am6p02p9ldgjut6jn55p7lu2ee25u7g9.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'streamy',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance() // Get reference to auth object
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange) // listens for change in signIn status.
        })
    })
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    switch (this.props.isSignedIn) {
      case null:
        return null
      case true:
        return (
          <button
            onClick={this.onSignOutClick}
            className='ui red google button'
          >
            <i className='google icon' />
            Sign Out
          </button>
        )
      default:
        return (
          <button
            onClick={this.onSignInClick}
            className='ui blue google button'
          >
            <i className='google icon' />
            Sign In
          </button>
        )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
