import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { TextField, RaisedButton } from 'material-ui'
import { setRoom } from '../../actions/index';
import Button from '../Buttons'

import './style.css';

class CreateRoom extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      capacity: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.setRoom(this.state)
    browserHistory.push({ pathname: '/users'})
  }

  render() {

    return (
      <div className="rooms text-center">
        <h1>
          Create Room
        </h1>
        <br/>
        <TextField
          onChange={ e => { this.setState({ name: e.target.value})}}
          floatingLabelText="Name"
          />
        <br />
        <TextField
          onChange={ e => { this.setState({ capacity: e.target.value})}}
          floatingLabelText="Capacity"
          />
        <br />
          <div className="row">
            <div className="col-xs-6 right">
              <Button link_to="/rooms"  label="Back"/>
            </div>
            <div className="col-xs-6 left">
              <RaisedButton label="Create" onClick={this.handleClick}/>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps({ rooms }) { //weather = state.weather
  return { rooms };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setRoom}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);
