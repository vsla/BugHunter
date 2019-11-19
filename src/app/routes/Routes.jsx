/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import {Home} from '../pages'

import Home from 'app/pages/Company/pages/Home/Home';
import { SignIn } from 'app/pages/SharedPages';
import Profile from 'app/pages/Company/pages/Profile/Profile';
import Projects from 'app/pages/Company/pages/Projects/ProjectsList/Projects';
import FormProject from 'app/pages/Company/pages/Projects/FormProject/FormProject';
import SignUp from 'app/pages/Company/pages/CompanySignUp';
import ChooseSignUp from 'app/pages/SharedPages/ChooseSignUp';
import AfterLogged from 'app/pages/Company/pages/CompanySignUp/AfterLogged';

import BugHunterSignUp from 'app/pages/BugHunter/pages/BughunterSIgnUp';
import NotLoggedHome from 'app/pages/BugHunter/pages/NotLoggedHome';
import Dashboard from 'app/pages/BugHunter/pages/MainPage';
import SeeProject from 'app/pages/Company/pages/Projects/SeeProject';
import DashboardDetails from 'app/pages/BugHunter/pages/ProjectDetails';
import ListAdmin from 'app/pages/Admin/pages/AdminList/index';
export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultRoute: '/'
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
        <Route
          component={FormProject}
          exact
          path="/empresa/projetos/editar/:id"
        />
        <Route component={SeeProject} exact path="/empresa/projetos/:id" />

        <Route component={SignUp} exact path="/cadastro/empresa" />
        <Route component={ChooseSignUp} exact path="/cadastro/escolher" />
        <Route component={AfterLogged} exact path="/cadastro/cadastrado" />

        <Route component={SignIn} exact path="/empresa/login" />

        {/* BugHunter */}

        <Route component={NotLoggedHome} exact path="/" />
        <Route component={BugHunterSignUp} exact path="/cadastro/bughunter" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={SignIn} exact path="/login" />
        <Route
          component={DashboardDetails}
          exact
          path="/bughunter/projetos/:id"
        />

        {/* Admin */}

        <Route component={ListAdmin} exact path="/admin/list" />

        <Redirect to={defaultRoute} />
      </Switch>
    );
  }
}
