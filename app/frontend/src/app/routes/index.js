import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import {Home} from '../pages'
import Dashboard from '../layouts/dashboard/Dashboard'
import {SignIn} from '../pages/SharedPages'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={Dashboard} exact path="/" />
        <Route component={SignIn} exact path="/login" />
        <Redirect to="/" />
      </Switch>
    );
  }
}
