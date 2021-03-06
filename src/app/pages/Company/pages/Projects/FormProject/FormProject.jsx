/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers

// Material components
import { withStyles, CircularProgress, Grid } from '@material-ui/core';
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
    console.log(this.props)
    const { params } = this.props.match;
    this.state = {
      loading: false,
      params,
      edit: Object.keys(params).length > 0,
    };
  }

  render() {
    const { classes } = this.props;
    const { loading, params, edit } = this.state;

    return (
      <Dashboard title="Projetos" profile="company">
        <div
          className={classes.StorekeeperDashboard}
        >
          {
            !loading ? (
              <Grid
                container
              >
                <Form params={params} edit={edit} />
              </Grid>
            ) : (
              <Grid container justify="center" align="center">
                <CircularProgress />
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
