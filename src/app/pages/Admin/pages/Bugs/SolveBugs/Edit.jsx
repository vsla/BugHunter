/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { Grid, Paper, Typography } from '@material-ui/core';
// Shared layouts
import Dashboard from 'app/layouts/Dashboard';
import Form from './EditBugForm'
// Custom components
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

const Projects = (props) => {
  const { classes } = props;
  console.log(props)
  return (
    <Dashboard title="Bugs" profile="Admin">
      <div
        className={classes.StorekeeperDashboard}
      >
        <Grid
          container
        >
          <Form id={props.match.params.id} />
        </Grid>
      </div>
    </Dashboard>
  );
};

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
