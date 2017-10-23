import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, RaisedButton } from 'material-ui'
import { fetchTalks } from '../../actions/index';

class CreateTalk extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      capacity: 0,
      speaker: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){

  }

  render() {

    return (
      <div className="rooms text-center">
        <h1>
          Create Talk
        </h1>
        <br/>
        <TextField
          onChange={ e => { this.setState({ name: e.target.value})}}
          floatingLabelText="Name"
          />
        <br />
        <TextField
          onChange={ e => { this.setState({ name: e.target.value})}}
          floatingLabelText="Speaker"
          />
        <br />
        <TextField
          onChange={ e => { this.setState({ capacity: e.target.value})}}
          floatingLabelText="Capacity"
          />
          <br />
        <TextField
          onChange={ e => { this.setState({ capacity: e.target.value})}}
          floatingLabelText="Room"
          />
        <br />
        <RaisedButton label="Create" onClick={this.handleClick}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateTalk);
