import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRooms } from '../../actions/index';

import './style.css';

class Rooms extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  async componentWillMount() {
    await this.props.fetchRooms()
  }

  render() {

    return (
      <div className="rooms">
        <h1>
          Rooms
        </h1>
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
