import React, { Component } from 'react';

import './style.css';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className="not-found">
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
