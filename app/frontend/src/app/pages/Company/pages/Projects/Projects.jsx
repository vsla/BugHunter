/* eslint-disable react/forbid-prop-types */
import React from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core'; 

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import Dashboard from '../../../../layouts/Dashboard';

// Custom components
import StatusCard from './components/StatusCards';
import ProjectsList from './components/ProjectsList';

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
    <Dashboard title="Projetos" profile="company">

      <div
        className={classes.StorekeeperDashboard}
      >
        <Grid
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <StatusCard />
          </Grid>
          <Grid item>
            <ProjectsList />
          </Grid>
        </Grid>
      </div>
    </Dashboard>
  );
};

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
