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
import ListAdmin from 'app/pages/Admin/pages/AdminList/index';
import FormAdmin from 'app/pages/Admin/pages/CreateOrUpdate/index';
import SeeListBugs from '../pages/Admin/pages/Bugs/ListBugs/ListBugs';
import EditBugs from 'app/pages/Admin/pages/Bugs/SolveBugs/Edit';

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

  redirectHunter = (Component, routeProps) => {
    const { type } = this.props.authState.auth;
    const { development } = this.state;
    if (type === 'bughunter' || development === true) {
      return <Component {...routeProps} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  redirectCompany = (Component, routeProps) => {
    const { type } = this.props.authState.auth;
    const { development } = this.state;
    if (type === 'company' || development === true) {
      return <Component {...routeProps} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  redirectAdmin = (Component, routeProps) => {
    const { type } = this.props.authState.auth;
    const { development } = this.state;
    if (type === 'admin' || development === true) {
      return <Component {...routeProps} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  render() {
    const { defaultRoute } = this.state;
    return (
      <Switch>
        <Route
          render={routeProps => this.redirectCompany(Home, routeProps)}
          exact
          path="/empresa/home"
        />
        <Route
          render={routeProps => this.redirectCompany(Profile, routeProps)}
          exact
          path="/empresa/perfil"
        />
        <Route
          render={routeProps => this.redirectCompany(Projects, routeProps)}
          exact
          path="/empresa/projetos"
        />
        <Route
          render={routeProps => this.redirectCompany(FormProject, routeProps)}
          exact
          path="/empresa/projetos/novo"
        />
        <Route
          render={routeProps => this.redirectCompany(FormProject, routeProps)}
          exact
          path="/empresa/projetos/editar/:id"
        />
        <Route
          render={routeProps => this.redirectCompany(SeeProject, routeProps)}
          exact
          path="/empresa/projetos/:id"
        />

        <Route component={SignUp} exact path="/cadastro/empresa" />
        <Route component={ChooseSignUp} exact path="/cadastro/escolher" />
        <Route component={AfterLogged} exact path="/cadastro/cadastrado" />

        <Route component={SignIn} exact path="/empresa/login" />

        {/* BugHunter */}

        <Route component={NotLoggedHome} exact path="/" />
        <Route component={BugHunterSignUp} exact path="/cadastro/bughunter" />
        <Route
          render={routeProps => this.redirectHunter(Dashboard, routeProps)}
          exact
          path="/dashboard"
        />
        <Route
          render={routeProps =>
            this.redirectHunter(ProfileBugHunter, routeProps)
          }
          exact
          path="/perfil"
        />
        <Route
          render={routeProps => this.redirectHunter(MyBugs, routeProps)}
          exact
          path="/bugs"
        />
        <Route component={SignIn} exact path="/login" />
        <Route
          render={routeProps =>
            this.redirectHunter(DashboardDetails, routeProps)
          }
          exact
          path="/bughunter/projetos/:id"
        />

        {/* Admin */}

        <Route component={SeeListBugs} exact path="/admin/bugs" />
        <Route component={EditBugs} exact path="/admin/bugs/edit/:id" />

        <Route component={ListAdmin} exact path="/admin/list" />
        <Route component={FormAdmin} exact path="/admin/novo" />

        <Route component={FormAdmin} exact path="/admin/editar/:id" />

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
