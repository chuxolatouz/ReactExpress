import React, { Component } from 'react'
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { bindActionCreators } from 'redux';
import { updateTalk } from '../../actions/index'

class AddUser extends Component {
  constructor(){
    super()
    this.state = {
      something: 15,
    }
    this.checkUser = this.checkUser.bind(this)
    this.checkUpdate = this.checkUpdate.bind(this)
  }
  checkUser(user){
    return this.props.talk.users.some( aYs => (aYs._id === user._id))
  }
  checkUpdate(user){
    let newTalk = this.props.talk
    if(typeof newTalk !== 'undefined'){
      if(this.checkUser(user)){
        const index = newTalk.users.indexOf(user)
        newTalk.users.splice(index,1)
      } else {
        newTalk.users.push(user);
      }
      this.props.updateTalk(newTalk);
    }
  }
  checkFuelTalk(){
    return this.props.talk.users.length >= this.props.talk.capacity
  }

  render()  {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"><p>Name</p></div>
          <div className="col-md-3"><p>Email</p></div>
          <div className="col-md-3"><p>Type</p></div>
          <div className="col-md-3"><p>Added</p></div>
        </div>
        {this.props.users.map( (user, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-3"><p>{user.name}</p></div>
              <div className="col-md-3"><p>{user.email}</p></div>
              <div className="col-md-3"><p>{user.type}</p></div>
              <div className="col-md-3">
                <Checkbox
                  checked={this.checkUser(user)}
                  onCheck={() => this.checkUpdate(user)}
                  disabled={!this.checkUser(user) && this.checkFuelTalk() }
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateTalk}, dispatch);
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
