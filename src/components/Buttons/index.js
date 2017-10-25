import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'

export default class Button extends Component {
  render() {
    return (        
      <Link to={this.props.link_to}>
        <RaisedButton label={this.props.label} primary={true}/>
      </Link>
    );
  }
}
