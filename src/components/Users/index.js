import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/index';
import CreateUser from './CreateUser'

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <h1>
          Users
          <CreateUser />
        </h1>
      </div>
    );
  }
}

function mapStateToProps({ rooms }) { //weather = state.weather
  return { rooms };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUsers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
