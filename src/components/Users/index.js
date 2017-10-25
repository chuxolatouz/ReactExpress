import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/index';
import Button from '../Buttons'

class Users extends Component {
  async componentWillMount(){
    await this.props.fetchUsers()
  }

  render() {
    return (
      <div className="container">
        <h1>Users</h1>
        <div className="details">users detail</div>
        <div className="col-md-5">
          <h3>Name</h3>
        </div>
        <div className="col-md-5">
          <h3>Email</h3>
        </div>
        <div className="col-md-2">
          <h3>type</h3>
        </div>
        <div className="container">
          {this.props.users.map( index => {
            return (
              <div className="row" key={index._id}>
                <div className="col-md-5">
                  {index.name}
                </div>
                <div className="col-md-5">
                  {index.email}
                </div>
                <div className="col-md-2">
                  {index.type}
                </div>
              </div>
            )
          })}
        </div>
        <div className="row">
          <div className="col-xs-2">
            <Button link_to="/" label="Main Menu"/>
          </div>
          <div className="col-xs-2">
            <Button link_to="/create_user" label="Create User"/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) { //weather = state.weather
  return { users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUsers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
