/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import withStyles from '@material-ui/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

// Material components
import { Grid, Button, Typography } from '@material-ui/core';

import axios from 'axios';

// Shared layouts
import Dashboard from '../../../../../layouts/Dashboard';
import sadface from '../../../../../assets/sadface.png';

// Services
import ProjectService from '../../../../../services/ProjectService';

// Custom components
import StatusCard from './components/StatusCards';
import ProjectsList from './components/ProjectsList';

// Component styles

const styles = (theme) => ({
  StorekeeperDashboard: {
    padding: theme.spacing.unit * 4,
    display: 'flex',
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
  link: {
    textDecoration: 'none',
  },
});

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hasProjects: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await ProjectService.getAllProjects();
      if (response.data.length === 0) {
        this.setState({ loading: false, hasProjects: false });
      } else {
        this.setState({ data: response.data, loading: false });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { loading, hasProjects, data } = this.state;
    const { classes } = this.props;

    return (
      <Dashboard title="Projetos" profile="company">
        <Grid container className={classes.StorekeeperDashboard}>
          {!loading ? (
            <Grid container spacing={2} direction="column">
              {hasProjects ? (
                <>
                  <Grid item>
                    <StatusCard />
                  </Grid>
                  <Grid item>
                    <ProjectsList data={data} />
                  </Grid>
                </>
              ) : (
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  direction="column"
                  spacing={4}
                  style={{ flexGrow: 1 }}
                >
                  <Grid item>
                    <img src={sadface} alt="sad face" height={100} />
                  </Grid>
                  <Grid item>
                    <Typography> Você não tem projetos, crie um! </Typography>
                  </Grid>
                  <Grid item>
                    <Link to="/empresa/projetos/novo" className={classes.link}>
                      <Button variant="contained" color="primary">
                        Novo Projeto
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              )}
            </Grid>
          ) : (
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <CircularProgress />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Dashboard>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
