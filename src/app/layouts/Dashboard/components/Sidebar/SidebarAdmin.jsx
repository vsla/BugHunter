import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Button } from '@material-ui/core';

// Material components
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core';

// Material icons
import {
  Home as DashboardIcon,
  Person as PeopleIcon,
  BugReport,
  People,
  Assignment
} from '@material-ui/icons';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// Logo
import logo from '../../../../assets/bughunter.png';

// Component styles
import styles from './styles';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

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

        <List component="div" className={classes.list}>
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
              primary="Home"
            />
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={CustomNavLink}
            to="/empresa/home"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Perfil"
            />
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={CustomNavLink}
            to="/empresa/home"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <People />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Admins"
            />
          </ListItem>

          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={CustomNavLink}
            to="/empresa/home"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <BugReport />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Bugs"
            />
          </ListItem>

          <div className={classes.grow} />
          <Divider className={classes.logoDivider} />
          <div className={classes.button}>
            <Button fullWidth variant="outlined" color="primary">
              Sair
            </Button>
          </div>
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
