import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {
  authButton() {
    const { authenticated, authenticate } = this.props
    if (authenticated) {
      return (
        <button
          onClick={() => { authenticate(false) }}>
          Sign out
        </button>
      )
    }
    return (
      <button
        onClick={() => { authenticate(true) }}>
        Sign in
      </button>
    )
  }
  render () {
    return (
      <nav className="navbar navbar-light">
        <ul className="navbar navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps (state) {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, actions)(Header)
