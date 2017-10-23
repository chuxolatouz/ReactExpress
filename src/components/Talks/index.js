import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTalks } from '../../actions/index';
import CreateTalk from './CreateTalk'

class Talks extends Component {
  render() {
    return (
      <div className="rooms">
        <h1>
          Talks
          <CreateTalk />
        </h1>
      </div>
    );
  }
}

function mapStateToProps({ rooms }) { //weather = state.weather
  return { rooms };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTalks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Talks);
