import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export function requireAuthentication(Components) {
  class AuthenticatedComponent extends Component {
    componentWillMount() {
      this.checkAuth()
    }

    componentWillReceiveProps() {
      this.checkAuth()
    }

    checkAuth() {
      if (!sessionStorage.getItem('access')) {
        browserHistory.push({ pathname: '/login' })
      } else {
        browserHistory.push({ pathname: '/' })
      }
    }

    render() {
      return (
        <div>
          <Components {...this.props} />
        </div>
      )
    }
  }
}
