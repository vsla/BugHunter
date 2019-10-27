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
      data: [],
      status: 'loading',
    };
  }

  async componentDidMount() {
    try {
      const response = await ProjectService.getAllProjects();
      if (response.data.length === 0) {
        this.setState({ status: 'noProjects' });
      } else {
        this.setState({ data: response.data, status: 'hasProjects' });
      }
      console.log(response, response.data, this.state.status);
    } catch (error) {
      console.log(error);
    }
  }

  renderContent = () => {
    const { status, hasProjects, data } = this.state;
    const { classes } = this.props;
    if (status == 'hasProjects') {
        return (
          <>
            <Grid item style={{ width: '100%' }}>
              <StatusCard />
            </Grid>
            <Grid item style={{ width: '100%' }}>
              <ProjectsList data={data} />
            </Grid>
          </>
        )

      } else if (status == 'noProjects') {
        return (
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
        )

      } else {
      return (

        <Grid container justify="center" alignItems="center" style={{height: '100%'}}>
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      )
    }
  }

  render() {
    const { status, hasProjects, data } = this.state;
    const { classes } = this.props;

    return (
      <Dashboard title="Projetos" profile="company">
        <Grid container className={classes.StorekeeperDashboard}>

          <Grid container spacing={2} direction="column">
            {this.renderContent()}
          </Grid>
        </Grid>
      </Dashboard>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
