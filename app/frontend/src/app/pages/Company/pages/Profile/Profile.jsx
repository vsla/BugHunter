/* eslint-disable react/forbid-prop-types */
import React from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles, Grid } from '@material-ui/core';
// Material components
// Shared layouts
import Dashboard from '../../../../layouts/Dashboard';
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

  return (
    <Dashboard title="Perfil" profile="company">
      <div
        className={classes.StorekeeperDashboard}
      >
        <Grid
          container
        >
          
        </Grid>
      </div>
    </Dashboard>
  );
};

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
