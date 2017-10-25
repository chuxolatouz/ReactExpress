import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { attemptLogin } from '../../actions/index';
import isEmpty from 'lodash/isEmpty'

import './style.css';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.formValidator = this.formValidator.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if(!isEmpty(nextProps.login)){
      browserHistory.push({pathname: '/'})
    } else {
      this.setState({
        error: 'Wrong User/Password',
        password: ''
        })
    }
  }

  static validateEmail = (email) => {
    // eslint-disable-next-line
    var splitted = email.match("^(.+)@tektonlabs\.com$");
    if (splitted == null) return false;
    if (splitted[1] != null)
    {
      // eslint-disable-next-line
        var regexp_user = /^\"?[\w-_\.]*\"?$/;
        if (splitted[1].match(regexp_user) == null) return false;
        return true;
    }
    return false;

  }

  formValidator() {
    if(Login.validateEmail(this.state.email)){
      // sessionStorage.setItem('access', true)
      // browserHistory.push({ pathname: '/'})
      let body = this.state
      body.error = undefined
      this.props.attemptLogin(body)
    } else {
      this.setState({error: 'Invalid tekton email'})
    }
  }

  render() {
    return (
      <div className="container">
        <div className="login text-center">
          <h1>
            Login
          </h1>
          <div className="form">
            <TextField
              onChange={ e => { this.setState({ email: e.target.value})}}
              hintText="example@tektonlabs"
              floatingLabelText="Email"
              errorText={this.state.error}
              />
            <br/>
            <TextField
              onChange={ e => { this.setState({ password: e.target.value})}}
              hintText="Password Field"
              floatingLabelText="Password"
              type="password"
              value={this.state.password}
              />
          </div>
          <RaisedButton label="Go" onClick={this.formValidator} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ login }) {
  return { login };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({attemptLogin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
