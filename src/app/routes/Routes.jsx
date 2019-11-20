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
import MyBugs from 'app/pages/BugHunter/pages/MyBugs/MyBugs';
import NotLoggedHome from 'app/pages/BugHunter/pages/NotLoggedHome';
import Dashboard from 'app/pages/BugHunter/pages/MainPage';
import ProfileBugHunter from 'app/pages/BugHunter/pages/Profile/Profile';
import SeeProject from 'app/pages/Company/pages/Projects/SeeProject';
import DashboardDetails from 'app/pages/BugHunter/pages/ProjectDetails';

//Redux
import { connect } from 'react-redux';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultRoute: '/',
      development: false
    };
  }

  redirectHunter = Component => {
    const { type } = this.props.authState.auth;
    const { development } = this.state;
    if (type === 'bughunter' || development === true) {
      return <Component />;
    } else {
      return <Redirect to='/login' />;
    }
  };
  redirectCompany = Component => {
    const { type } = this.props.authState.auth;
    const { development } = this.state;
    if (type === 'company' || development === true) {
      return <Component />;
    } else {
      return <Redirect to='/login' />;
    }
  };

  render() {
    const { defaultRoute } = this.state;
    return (
      <Switch>
        <Route render={() => this.redirectCompany(Home)} exact path="/empresa/home" />
        <Route render={() => this.redirectCompany(Profile)} exact path="/empresa/perfil" />
        <Route render={() => this.redirectCompany(Projects)} exact path="/empresa/projetos" />
        <Route render={() => this.redirectCompany(FormProject)} exact path="/empresa/projetos/novo" />
        <Route render={() => this.redirectCompany(FormProject)} exact path="/empresa/projetos/editar/:id" />
        <Route render={() => this.redirectCompany(SeeProject)} exact path="/empresa/projetos/:id" />

        <Route component={SignUp} exact path="/cadastro/empresa" />
        <Route component={ChooseSignUp} exact path="/cadastro/escolher" />
        <Route component={AfterLogged} exact path="/cadastro/cadastrado" />


        {/* BugHunter */}

        <Route component={NotLoggedHome} exact path="/" />
        <Route component={BugHunterSignUp} exact path="/cadastro/bughunter" />
        <Route render={() => this.redirectHunter(Dashboard)} exact path="/dashboard" />
        <Route render={() => this.redirectHunter(ProfileBugHunter)} exact path="/perfil" />
        <Route render={() => this.redirectHunter(MyBugs)} exact path="/bugs" />
        <Route component={SignIn} exact path="/login" />
        <Route
          render={() => this.redirectHunter(DashboardDetails)}
          exact
          path="/bughunter/projetos/:id"
        />

        <Redirect to={defaultRoute} />
      </Switch>
    );
  }
}
const mapStateToProps = state => {
  return {
    authState: state
  };
};
export default connect(mapStateToProps)(Routes);