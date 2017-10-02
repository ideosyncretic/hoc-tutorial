import React, { Component } from 'react'

export default function (ComposedComponent) {
  class Authentication extends Component {
    render () {
      console.log('Rendering', ComposedComponent)
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication
}
