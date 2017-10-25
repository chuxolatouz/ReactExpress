import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { TextField, RaisedButton, MenuItem, SelectField } from 'material-ui'
import { setUser } from '../../actions/index';
import Button from '../Buttons'

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      value: 1,
      password: '',
      error: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleType = this.handleType.bind(this)
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

  handleClick(){
    if(CreateUser.validateEmail(this.state.email)){
      this.props.setUser(this.state)
      browserHistory.push({pathname: '/users'})
    } else {
      this.setState({error: 'invalid tekton email'})
    }
  }
  handleType= (event, index, value) => this.setState({value});


  render() {

    return (
      <div className="rooms text-center">
        <h1>
          Create User
        </h1>
        <br/>
        <TextField
          onChange={ e => { this.setState({ name: e.target.value})}}
          floatingLabelText="Name"
          />
        <br />
        <TextField
          onChange={ e => { this.setState({ email: e.target.value})}}
          floatingLabelText="email"
          errorText={this.state.error}
          />
        <br />
        <TextField
          onChange={ e => { this.setState({ password: e.target.value})}}
          floatingLabelText="password"
          type="password"
          />
        <br />
        <SelectField
          floatingLabelText="Type"
          value={this.state.value}
          onChange={this.handleType}
          >
          <MenuItem value={1} primaryText="Normal"/>
          <MenuItem value={2} primaryText="Speaker"/>
          <MenuItem value={3} primaryText="VIP"/>
        </SelectField>

        <br />
          <div className="row">
            <div className="col-xs-6 right">
              <Button link_to="/users"  label="Back"/>
            </div>
            <div className="col-xs-6 left">
              <RaisedButton label="Create" onClick={this.handleClick}/>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps({ rooms }) {
  return { rooms };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
