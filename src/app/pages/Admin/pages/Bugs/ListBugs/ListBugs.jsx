import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
// Material components
import { Grid, withStyles } from '@material-ui/core';
// Shared layouts
import Dashboard from 'app/layouts/Dashboard';
// Custom components
// Component styles
import Bugs from 'app/pages/Admin/pages/Bugs/ListBugs/Bugs';

const styles = theme => ({
  StorekeeperDashboard: {
    padding: theme.spacing.unit * 4,
    flexGrow: 1
  },
  Paperpendency: {
    padding: '18px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '2px'
  },
  subTitle: {
    fontSize: '12px'
  },
  item: {}
});

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      value: 0
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Dashboard title="Bugs" profile="admin">
        <div className={classes.StorekeeperDashboard}>
          <Grid container>
            <Grid item>
              <Tabs
                indicatorColor="primary"
                value={this.state.value}
                style={{ borderBottom: '1px solid gray' }}
                onChange={(e, newValue) => {
                  this.setState({ value: newValue });
                }}
              >
                <Tab label="Resolver/REsolvidos" />
              </Tabs>
              {this.state.value === 0 ? (
                <Bugs type="notSolved" />
              ) : (
                  <Bugs type="Solved" />
                )}
            </Grid>
          </Grid>
        </div>
      </Dashboard>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
