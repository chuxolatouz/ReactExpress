import React from 'react';
import { Router, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Login from './components/Login'
import Rooms from './components/Rooms'
import Talks from './components/Talks'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/about" component={About} />
    <Route path="/login" component={Login}/>
    <Route path="/" component={App} />
    <Route path="/rooms" component={Rooms} />
    <Route path="/talks" component={Talks} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
