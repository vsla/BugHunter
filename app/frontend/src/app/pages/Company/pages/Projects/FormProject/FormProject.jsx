/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import axios from 'axios';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles, CircularProgress } from '@material-ui/core';
// Material components
import { Grid, Paper, Typography } from '@material-ui/core';
// Shared layouts
import Dashboard from '../../../../../layouts/Dashboard';
// Custom components
import Form from './components/Form';
// Component styles
const styles = (theme) => ({
  StorekeeperDashboard: {
    padding: theme.spacing.unit * 4,
    flexGrow: 1,
  },
  Paperpendency: {
    padding: '18px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  subTitle: {
    fontSize: '12px',
  },
  item: {
  },

});

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    const { classes } = this.props;
    const { loading } = this.state;

    return (
      <Dashboard title="Projetos" profile="Admin">
        <div
          className={classes.StorekeeperDashboard}
        >
          {
            !loading ? (
              <Grid
                container
              >
                <Form />
              </Grid>
            ) : (
              <Grid container justify='center' align='center'>
                <CircularProgress/>
              </Grid>
            )
          }

        </div>
      </Dashboard>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
