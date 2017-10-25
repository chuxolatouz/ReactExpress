import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import {
  TextField,
  RaisedButton,
  MenuItem,
  SelectField,
  DatePicker
} from 'material-ui'
import { setTalk, fetchUsers, fetchRooms } from '../../actions/index';
import Button from '../Buttons'

class CreateTalk extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      capacity: 0,
      speaker: '',
      date: '',
      room: '',
      capacityError: '',
      speakerError: '',
      roomError: '',
      nameError: '',
      dateError: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleRoom = this.handleRoom.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleCapacity = this.handleCapacity.bind(this)
    this.validate = this.validate.bind(this)
  }
  async componentWillMount() {
    await this.props.fetchUsers()
    await this.props.fetchRooms()
  }

  handleCapacity(){
    debugger;
    if(this.state.capacity <= 0 && this.state.capacity ) {

    }
  }
  validate(){
    let valid = true
    if(this.state.speaker === ''){
      this.setState({ speakerError: 'Select valid Speaker' })
      valid = false
    }
    if (this.state.room === '') {
      this.setState({ roomError: 'Select valid Room' })
      valid = false
    }
    if (this.state.capacity < 0) {
      this.setState({ capacityError: 'Select Valid Capacity'})
      valid = false
    }
    if (this.state.name === '') {
      this.setState({ nameError: 'Required'})
      valid = false
    }
    if (this.state.date === '') {
      this.setState({ dateError: 'Required'})
    }
    return valid;

  }

  handleClick(){
    if(this.validate()){
      this.props.setTalk(this.state)
      browserHistory.push({ pathname: '/talks'})
    }
  }

  handleSpeaker = (event,index,value) => {this.setState({speaker: value})}
  handleRoom = (event,index,value) => {this.setState({ room: value})}

  handleDate = (event, date) => {
    this.setState({ date });
  };
  render() {

    return (
      <div className="rooms text-center">
        <h1 >
          Create Talk
        </h1>
        <br/>
        <TextField
          onChange={ e => { this.setState({ name: e.target.value})}}
          floatingLabelText="Name"
          errorText={this.state.nameError}
          />
        <br />
        <SelectField
          floatingLabelText="Speaker"
          value={this.state.speaker}
          errorText={this.state.speakerError}
          onChange={this.handleSpeaker}>
          {this.props.users.map( (item, index) => {
            return (
              <MenuItem
                value={item._id}
                primaryText={`${item.name}`}
                key={`${item._id}`}/>
            )
          })}
        </SelectField>
        <br />
        <TextField
          onChange={ e => { this.setState({ capacity: e.target.value})}}
          floatingLabelText="Capacity"
          errorText={this.state.capacityError}
          />
          <br />
        <SelectField
          floatingLabelText="Room"
          value={this.state.room}
          errorText={this.state.roomError}
          style={{ textPosition: "left" }}
          onChange={this.handleRoom}>
          {this.props.rooms.map( (item, index) => {
            return (
              <MenuItem
                value={item._id}
                primaryText={`${item.name}`}
                key={`${item._id}`} />
            )
          })}
        </SelectField>
        <br />
        <DatePicker hintText="Talk Date"
          onChange={this.handleDate}
          errorText={this.state.dateError}
          />
        <br />
        <div className="row">
          <div className="col-xs-6 right">
            <Button link_to="/talks"  label="Back"/>
          </div>
          <div className="col-xs-6 left">
            <RaisedButton label="Create" onClick={this.handleClick}/>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ rooms, users }) {
  return { rooms, users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setTalk, fetchUsers, fetchRooms}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTalk);
