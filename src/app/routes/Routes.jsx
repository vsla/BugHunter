import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import {Home} from '../pages'
import Home from '../pages/Company/pages/Home/Home';
import { SignIn } from '../pages/SharedPages';
import Profile from '../pages/Company/pages/Profile/Profile';
import Projects from '../pages/Company/pages/Projects/ProjectsList/Projects';
import FormProject from '../pages/Company/pages/Projects/FormProject/FormProject';
import SignUp from '../pages/Company/pages/CompanySignUp';
import ChooseSignUp from '../pages/SharedPages/ChooseSignUp';
import AfterLogged from '../pages/Company/pages/CompanySignUp/AfterLogged';

// BugHunter
import NotLoggedHome from '../pages/BugHunter/pages/NotLoggedHome';
import BugHunterSignUp from '../pages/BugHunter/pages/BughunterSIgnUp';

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
        <Route component={Home} exact path="/empresa/home" />
        <Route component={Profile} exact path="/empresa/perfil" />
        <Route component={Projects} exact path="/empresa/projetos" />
        <Route component={FormProject} exact path="/empresa/projetos/novo" />
        
        <Route component={SignUp} exact path="/cadastro/empresa" />
        <Route component={ChooseSignUp} exact path="/cadastro/escolher" />
        <Route component={AfterLogged} exact path="/cadastro/cadastrado" />
        <Route component={SignIn} exact path="/login" />

        {/* BugHunter */}

        <Route component={NotLoggedHome} exact path="/" />
        <Route component={BugHunterSignUp} exact path="/cadastro/bughunter" />

        <Redirect to={defaultRoute} />
      </Switch>
    );
  }
}
