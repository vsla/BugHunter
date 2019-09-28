import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import {Home} from '../pages'
import Dashboard from '../layouts/Dashboard';
import { SignIn } from '../pages/SharedPages';
import Projects from '../pages/Company/pages/Projects';

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
        <Route component={Dashboard} exact path="/" />
        <Route component={Projects} exact path="/empresa/projetos" />
        <Route component={SignIn} exact path="/login" />
        <Redirect to={defaultRoute} />
      </Switch>
    );
  }
}
