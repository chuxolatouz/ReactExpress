import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRooms } from '../../actions/index';
import Button from '../Buttons'

import './style.css';

class Rooms extends Component {
  async componentWillMount() {
      await this.props.fetchRooms()
  }

  render() {
    return (
      <div className="container">
        <h1>Rooms</h1>
        <span>Rooms detail</span>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Name</h3>
            </div>
            <div className="col-md-4">
              <h3>Capacity</h3>
            </div>
          </div>
        </div>
        {this.props.rooms.map( item => {
          return (
          <div className="row room-details" key={`${item.name}-${item.capacity}`}>
          <div className='col-md-4'>
            <span>
              {item.name}
            </span>
          </div>
          <div className="col-md-4">
            {item.capacity}
          </div>
        </div>)
        })}
        <div className="row">
          <div className="col-xs-2">
            <Button link_to="/" label="Main Menu"/>
          </div>
          <div className="col-xs-2">
            <Button link_to="/create_room" label="Create Room"/>
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
  return bindActionCreators({fetchRooms}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
