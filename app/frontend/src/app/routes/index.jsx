import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import {Home} from '../pages'
import Dashboard1 from '../layouts/Dashboard1';
import { SignIn } from '../pages/SharedPages';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultRoute: '/',
    };
  }

  render() {
    const { defaultRoute } = this.state;
    return (
      <Switch>
        <Route component={Dashboard1} exact path="/" />
        <Route component={SignIn} exact path="/login" />
        <Redirect to={defaultRoute} />
      </Switch>
    );
  }
}
