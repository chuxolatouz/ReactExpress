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

class CreateTalk extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      capacity: 0,
      speaker: '',
      date: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleRoom = this.handleRoom.bind(this)
    this.handleDate = this.handleDate.bind(this)
  }
  async componentWillMount() {
    await this.props.fetchUsers()
    await this.props.fetchRooms()
  }

  handleClick(){
    this.props.setTalk(this.state)
    browserHistory.push({ pathname: '/talks'})
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
          />
        <br />
        <SelectField
          floatingLabelText="Speaker"
          value={this.state.speaker}
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
          />
          <br />
        <SelectField
          floatingLabelText="Room"
          value={this.state.room}
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
        <DatePicker hintText="Talk Date" onChange={this.handleDate}/>
        <br />
        <RaisedButton label="Create" onClick={this.handleClick}/>
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
