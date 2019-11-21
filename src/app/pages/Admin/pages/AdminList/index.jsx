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
    color: '#fff'
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

function createData(status, name) {
  return { status, name };
}

const rows = [
  createData('Ativo', 'João Gabriel'),
  createData('Ativo', 'Adriana'),
  createData('Inativo', 'Gabriel Ramos')
];

const ListAdmin = props => {
  const { classes } = props;

  return (
    <Dashboard title="Projetos" profile="Admin">
      <div className={classes.StorekeeperDashboard}>
        <Grid container direction="column">
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
                  {rows.map(row => (
                    <TableRow key={row.status}>
                      <TableCell align="center">
                        <Link to="/admin/novo">
                          <EditIcon />
                        </Link>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography className={classes.active}>
                          {row.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
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
};

ListAdmin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListAdmin);
