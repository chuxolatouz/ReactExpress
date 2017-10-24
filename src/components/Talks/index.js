import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTalks } from '../../actions/index';

class Talks extends Component {

  async componentWillMount() {
    await this.props.fetchTalks()
  }
   render() {
    return (
      <div className="container">
        <h1>
          Talks
        </h1>
        <div className="row">
          <div className="col-md-2"><h3>Name</h3></div>
          <div className="col-md-2"><h3>Speaker</h3></div>
          <div className="col-md-2"><h3>Capacity</h3></div>
          <div className="col-md-2"><h3>Room</h3></div>
          <div className="col-md-2"><h3>{`Date`}</h3></div>
        </div>
        {this.props.talks.map( item => {
          return (
            <div className="row">
              <div className="col-md-2">{item.name}</div>
              <div className="col-md-2">{item.speaker}</div>
              <div className="col-md-2">{item.capacity}</div>
              <div className="col-md-2">{item.room}</div>
              <div className="col-md-2">{item.date}</div>
            </div>
          )
        })}
      </div>
    );
  }
}

function mapStateToProps({ talks }) {
  return { talks };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTalks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Talks);
