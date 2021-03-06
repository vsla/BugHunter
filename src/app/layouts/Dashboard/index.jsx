/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
// Material helpers
import { withStyles, withWidth } from '@material-ui/core';
// Material components
import { Drawer } from '@material-ui/core';
// Custom components
import { Sidebar, Topbar, Footer, SidebarAdmin } from './components/index.jsx';
// Component styles
import styles from './styles.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const isMobile = ['xs', 'sm', 'md'].includes(props.width);
    this.state = {
      isOpen: !isMobile
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  renderSidebar = (profile, classes) => {
    if (profile === 'company') {
      return <Sidebar className={classes.sidebar} />;
    } else {
      return <SidebarAdmin className={classes.Sidebar} />;
    }
  };

  render() {
    const { classes, width, title, children, profile } = this.props;
    const { isOpen } = this.state;
    const isMobile = ['xs', 'sm', 'md'].includes(width);
    const shiftTopbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;
    return (
      <>
        <Topbar
          className={classNames(classes.topbar, {
            [classes.topbarShift]: shiftTopbar
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title={title}
        />
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={this.handleClose}
          open={isOpen}
          variant={isMobile ? 'temporary' : 'persistent'}
        >
          {this.renderSidebar(profile, classes)}
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: shiftContent
          })}
        >
          {children}
          <Footer />
        </main>
      </>
    );
  }
}
Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};
export default compose(withStyles(styles), withWidth())(Dashboard);
