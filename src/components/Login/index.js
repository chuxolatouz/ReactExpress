import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
      browserHistory.push({ pathname: '/rooms'})
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
              hintText="Password Field"
              floatingLabelText="Password"
              type="password"
              />
          </div>
          <RaisedButton label="Go" onClick={this.formValidator} />
        </div>
      </div>
    );
  }
}

export default Login
