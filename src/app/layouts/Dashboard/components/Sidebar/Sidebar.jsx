import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';

// Material icons
import {
  Home as DashboardIcon,
  Person as PeopleIcon,
  Assignment,
} from '@material-ui/icons';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// Logo
import logo from '../../../../assets/bughunter.png'

// Component styles
import styles from './styles';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);

    const CustomNavLink = React.forwardRef((props, ref) => (
      <div ref={ref}>
        <NavLink {...props} />
      </div>
    ));

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link className={classes.logoLink} to="/">
            <img
              alt="BugHunter logo"
              className={classes.logoImage}
              src={logo}
            />
          </Link>
        </div>
        <Divider className={classes.logoDivider} />

        <List component="div" disablePadding>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={CustomNavLink}
            to="/empresa/home"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Inicial"
            />
          </ListItem>
          {/* <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={CustomNavLink}
            to="/empresa/perfil"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Perfil"
            />
          </ListItem> */}
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={CustomNavLink}
            to="/empresa/projetos"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Assignment />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Projetos"
            />
          </ListItem>
          {/*
          <ListItem
            onClick={this.handleClick}
            activeClassName={classes.activeListItem}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Projetos"
              classes={{ primary: classes.listItemText }}
            />
            {this.state.open ? <ExpandLess className={classes.listItemIcon} /> : <ExpandMore className={classes.listItemIcon} />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                className={classes.nested}
                activeClassName={classes.activeListItem}
                className={classes.nested}
                component={CustomNavLink}
                to="/admin-list">
                <ListItemText className={classes.listItemText} primary="Administadores" />
              </ListItem>
              <ListItem
                className={classes.nested}
                activeClassName={classes.activeListItem}
                className={classes.nested}
                component={CustomNavLink}
                to="/UserList"
              >
                <ListItemText className={classes.listItemText} primary="Consumidores" />
              </ListItem>
              <ListItem
                className={classes.nested}
                activeClassName={classes.activeListItem}
                className={classes.nested}
                component={CustomNavLink}
                to="/lojistas"
              >
                <ListItemText className={classes.listItemText} primary="Lojistas" />
              </ListItem>
            </List>
          </Collapse>
         */}
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
