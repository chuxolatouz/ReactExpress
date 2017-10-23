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
    }
    this.formValidator = this.formValidator.bind(this)
  }

  static validateEmail = (email) => {
    console.log(email);

  }

  formValidator() {
    browserHistory.push({ pathname: '/rooms'})
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
