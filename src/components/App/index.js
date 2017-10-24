import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}


  render() {

    return (
      <MuiThemeProvider>


        <div className="container">
          <div className="text-center p-35">
            <div className="row">
              <Link to='/rooms'>
                <div className="structure room col-md-4">Rooms</div>
              </Link>
              <Link to='/talks'>
                <div className="structure talks col-md-4">Talks</div>
              </Link>
              <Link to='/users'>
                <div className="structure users col-md-4">Users</div>
              </Link>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
