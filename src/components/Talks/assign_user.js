import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddUser from './add_user'
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AssignUser extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Assign User" onClick={this.handleOpen} />
        <Dialog
          title={this.props.talk.name}
          actions={actions}
          modal={true}
          open={this.state.open}
        >        
        <AddUser talk={this.props.talk}/>
        </Dialog>
      </div>
    );
  }
}
