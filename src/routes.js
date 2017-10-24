import React from 'react';
import { Router, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Login from './components/Login'
import Rooms from './components/Rooms'
import Talks from './components/Talks'
import Users from './components/Users'
import CreateUser from './components/Users/CreateUser'
import CreateRoom from './components/Rooms/CreateRoom'
import CreateTalk from './components/Talks/CreateTalk'
// import {requireAuthentication} from './components/Login/auth'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/login" component={Login}/>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/rooms" component={Rooms} />
    <Route path="/create_room" component={CreateRoom} />
    <Route path="/talks" component={Talks} />
    <Route path="/create_talk" component={CreateTalk} />
    <Route path="/create_user" component={CreateUser} />
    <Route path="/users" component={Users} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
