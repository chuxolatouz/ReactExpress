import React, { Component } from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { browserHistory } from 'react-router'

export function requireAuthentication(Components) {
  class AuthenticatedComponent extends Component {
    componentWillMount() {
      this.checkAuth()
    }

    componentWillReceiveProps() {
      this.checkAuth()
      console.log(this.props);
    }

    checkAuth() {
      if (sessionStorage.getItem('access')) {
        browserHistory.push({ pathname: '/' })
      } else {
        browserHistory.push({ pathname: '/login' })
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
