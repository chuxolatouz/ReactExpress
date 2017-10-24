import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, RaisedButton, MenuItem, SelectField } from 'material-ui'
import { setUser } from '../../actions/index';

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      value: 1,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleType = this.handleType.bind(this)
  }
  handleClick(){
    this.props.setUser(this.state)
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
        <RaisedButton label="Create" onClick={this.handleClick}/>
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
