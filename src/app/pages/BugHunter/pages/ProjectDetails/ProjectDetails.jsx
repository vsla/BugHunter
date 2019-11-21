/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { Link } from 'react-router-dom';

// Material components
import {
  withStyles,
  CircularProgress,
  Grid,
  Typography,
  Button,
  Paper,
} from '@material-ui/core';

// Shared layouts
import Dashboard from '../../../../layouts/Dashboard';

// Custom components
import palette from '../../../../theme/palette';

// Component styles
const styles = (theme) => ({
  StorekeeperDashboard: {
    // padding: theme.spacing(4),
    flexGrow: 1,
  },
  titleSection: {
    paddingTop: '20px',
    paddingBottom: '20px',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(227, 227, 227, 0.32)',
    // width: '1168px',
    // height: '120px',
  },
  content: {
    paddingTop: 26,
    padding: theme.spacing(4),
    maxWidth: '900px',
  },
  title: {
    maxWidth: '900px',
  },
  subTitle: {
    fontSize: '12px',
  },
  active: {
    border: `1px solid ${palette.primary.light}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    color: palette.primary.light,
  },
  inactive: {
    border: `1px solid ${palette.secondary.dark}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    color: palette.secondary.dark,
  },
  money: {
    border: '1px solid gray',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  category: {
    border: '1px solid gray',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  growContent: {
    // border: '1px solid gray',
    // padding: 5,
    // borderRadius: 5,
    // flexGrow: 1,
    // display: 'flex',
    marginLeft: 10,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  divider: {
    borderBottom: '1px solid gray',
    paddingBottom: 10,
  },
});

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      active: true,
    };
  }

  render() {
    const { classes, project } = this.props;
    const { loading, active } = this.state;
    console.log(project);
    return (
      // <Dashboard title="Detalhes do projeto" profile="bughunter">
      <div className={classes.StorekeeperDashboard}>
        {!loading ? (
          <Grid container direction="column">
            <Grid item className={classes.titleSection}>
              <Grid
                container
                direction="row"
                justify="space-between"
                className={classes.title}
              >
                <Grid item>
                  <Typography variant="h3">{project.name}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.content}>
              <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h5">Status</Typography>
                  <Typography
                    className={active ? classes.active : classes.inactive}
                  >
                    Ativo
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h5">Valor</Typography>
                  <Typography className={classes.money}>R$ 2.0X</Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h5">Categoria</Typography>
                  <Typography className={classes.category}>
                    {project.category}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="body1" className={classes.divider}>
                    {project.description}
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h5">Link para o git: </Typography>
                  <a href="https://github.com/vsla/bughunter">
                    <Typography
                      color="secondary"
                      className={classes.growContent}
                    >
                      {project.link1}
                    </Typography>
                  </a>
                </Grid>
                {
                  project.link1 ? (
                    <Grid
                      item
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="h5">Live App: </Typography>
                      <a href="https://bughunter-front.herokuapp.com">
                        <Typography
                          color="secondary"
                          className={classes.growContent}
                        >
                          {project.link1}
                        </Typography>
                      </a>
                    </Grid>
                  )
                    : (
                      <div />
                    )
                }

                <Grid item>
                  <Typography variant="h5">Descrição: </Typography>
                  <Paper elevation={2} style={{ padding: 15, marginTop: 8 }}>
                    <Typography>
                      {project.description}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
          : (
            <Grid container justify="center" align="center">
              <CircularProgress />
            </Grid>
          )}
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectDetails);
