/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { Grid, Paper, Typography, Button } from '@material-ui/core';
// Shared layouts
import Dashboard from '../../../../layouts/Dashboard';
// Custom components
// Component styles
//icon
import EditIcon from '@material-ui/icons/Edit';

import palette from '../../../../theme/palette';

import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AdminService from 'app/services/AdminService'

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
  mainContainer: {
    height: '100%',
    paddingTop: 90
  },
  centerContent: {
    flexGrow: 1,
    height: '100%',
    paddingBottom: 10,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: '40px 20px'
  },
  tabs: {
    borderBottom: '1px solid gray'
  },
  table: {
    minWidth: 650,
    border: 1
  },
  button: {
    backgroundColor: palette.secondary.dark,
    color: '#fff',
    marginBottom: '20px'
  },
  StorekeeperDashboard: {
    // padding: theme.spacing(4),
    flexGrow: 1
  },
  active: {
    border: `1px solid ${palette.primary.light}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    color: palette.primary.light,
    textAlign: 'center'
  }
});



class ListAdmin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      data: null
    }
  }

  componentDidMount() {
    this.getProjectInformation()
  }

  getProjectInformation = async () => {
    const response = await AdminService.getAllAdmins()
    if (!response.error) {
      this.setState({ loading: false, data: response.data });
    }
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state

    return (
      <Dashboard title="Admin" profile="Admin">
        <div className={classes.StorekeeperDashboard}>
          <Grid
            container
            direction="column"
            style={{ maxWidth: '800px', padding: 20 }}
          >
            <Grid item className={classes.titleSection}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                className={classes.title}
              >
                <Grid item>
                  <Link to="/admin/novo">
                    <Button variant="outlined" className={classes.button}>
                      Novo Administrador
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.content}>
              <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Editar</TableCell>
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Nome</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data && data.map(admin => (
                      <TableRow key={admin.status}>
                        <TableCell align="center">
                          <Link to="/admin/novo">
                            <EditIcon />
                          </Link>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {
                            admin.status ? (
                              <Typography className={classes.active}>
                                ativo
                          </Typography>
                            ) : (
                                <Typography className={classes.inactive}>
                                  ativo
                          </Typography>
                              )
                          }

                        </TableCell>
                        <TableCell align="center">{admin.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Dashboard>
    );
  }

};

ListAdmin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListAdmin);
