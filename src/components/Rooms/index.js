import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRooms } from '../../actions/index';

import CreateRoom from './CreateRoom'
import './style.css';

class Rooms extends Component {
  render() {

    return (
      <div className="rooms">
        <h1>
          Rooms
        </h1>
        <span>
          Rooms detail
        </span>
        {this.props.rooms.map( item => {
          return (
          <div className="room-details" key={`${item.name}-${item.capacity}`}>
          <div className='name'>
            <span>
              {item.name}
            </span>
          </div>
          <div className="capacity">
            {item.capacity}
          </div>
        </div>)
        })}
        <CreateRoom />

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
