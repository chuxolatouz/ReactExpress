import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTalks, fetchUsers, fetchRooms } from '../../actions/index';
import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors';
import Button from '../Buttons'

class Talks extends Component {
  constructor(){
    super()
    this.getUser = this.getUser.bind(this)
    this.getRoom = this.getRoom.bind(this)
  }

  async componentWillMount() {
    await this.props.fetchTalks()
    await this.props.fetchUsers()
    await this.props.fetchRooms()
  }
  getUser(userId) {
    if(this.props.users.length){
      const user = this.props.users.find( x => x._id == userId)
      return user.name
    } else {
      return ''
    }
  }
  getRoom(roomId) {
    if(this.props.rooms.length){
      const room = this.props.rooms.find( x => x._id == roomId)
      return room.name
    } else {
      return ''
    }
  }
   render() {
    return (
      <div className="container">
        <h1>
          Talks
        </h1>
        <div className="row">
          <div className="col-md-2"><h3>Name</h3></div>
          <div className="col-md-2"><h3>Speaker</h3></div>
          <div className="col-md-2"><h3>Capacity</h3></div>
          <div className="col-md-2"><h3>Room</h3></div>
          <div className="col-md-2"><h3>{`Date`}</h3></div>
          <div className="col-md-2"><h3>Actions</h3></div>
        </div>
        {this.props.talks.map( item => {
          return (
            <div className="row" key={item._id}>
              <div className="col-md-2">{item.name}</div>
              <div className="col-md-2">{this.getUser(item.speaker)}</div>
              <div className="col-md-2">{item.capacity}</div>
              <div className="col-md-2">{this.getRoom(item.room)}</div>
              <div className="col-md-2">{item.date}</div>
              <div className="col-md-2">                
                <a>view_users</a>
              </div>
            </div>
          )
        })}
        <div className="row">
          <div className="col-xs-2">
            <Button link_to="/" label="Main Menu"/>
          </div>
          <div className="col-xs-2">
            <Button link_to="/create_talk" label="Create Talk"/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ talks, users, rooms }) {
  return { talks, users, rooms };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTalks, fetchUsers, fetchRooms}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Talks);
