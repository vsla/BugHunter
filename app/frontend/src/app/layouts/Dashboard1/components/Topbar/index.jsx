import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, AppBar } from '@material-ui/core';

// Material components
import {
  IconButton,
  Popover,
  Toolbar,
  Typography
} from '@material-ui/core';

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Input as InputIcon
} from '@material-ui/icons';

// Shared services
// import { getNotifications } from 'services/notification';

// Custom components
import { NotificationList } from './components';

// Component styles
import styles from './styles';

class Topbar extends Component {
  constructor(props) {
    super(props)
    this.signal = true;
    this.state = {
      notifications: [],
      notificationsLimit: 4,
      notificationsCount: 0,
      notificationsEl: null
    };
  }




  // async getNotifications() {
  //   try {
  //     const { notificationsLimit } = this.state;

  //     const { notifications, notificationsCount } = await getNotifications(
  //       notificationsLimit
  //     );

  //     if (this.signal) {
  //       this.setState({
  //         notifications,
  //         notificationsCount
  //       });
  //     }
  //   } catch (error) {
  //     return;
  //   }
  // }

  componentDidMount() {
    this.signal = true;
    // this.getNotifications();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSignOut = () => {
    const { history } = this.props;

    localStorage.setItem('isAuthenticated', false);
    history.push('/sign-in');
  };

  handleShowNotifications = event => {
    this.setState({
      notificationsEl: event.currentTarget
    });
  };

  handleCloseNotifications = () => {
    this.setState({
      notificationsEl: null
    });
  };

  render() {
    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar
    } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { notifications, notificationsCount, notificationsEl } = this.state;

    const rootClassName = classNames(classes.root, className);
    const showNotifications = Boolean(notificationsEl);



    return (
      <AppBar className={rootClassName} position='fixed'>
        <Toolbar >
          <IconButton
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text">
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          {/* <IconButton
              className={classes.notificationsButton}
              onClick={this.handleShowNotifications}
            >
              <Badge
                badgeContent={notificationsCount}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          {/* <IconButton
              className={classes.signOutButton}
              onClick={this.handleSignOut}>
              <InputIcon />
            </IconButton> */}
        </Toolbar>

      </AppBar>

    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => { }
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
