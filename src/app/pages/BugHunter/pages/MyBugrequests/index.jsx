/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import { withStyles } from '@material-ui/core';
// Material components
import { Grid, Paper, Typography } from '@material-ui/core';
// Shared layouts
import Header from '../../components/Header';
import DefaultContainer from '../../components/DefaultContainer';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Custom components
import palette from '../../../../theme/palette';
// Custom components
// Component styles
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
  centerContent: {
    flexGrow: 1,
    height: '100%',
    paddingBottom: 10,
    backgroundColor: theme.palette.background.paper
  },
  active: {
    border: `1px solid ${palette.primary.light}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    color: palette.primary.light,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: '12px'
  },
  titleSection: {
    paddingTop: '20px',
    paddingBottom: '20px',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(227, 227, 227, 0.32)'
    // width: '1168px',
    // height: '120px',
  }
});

function createData(status, bugs, category, company, project, value) {
  return { status, bugs, category, company, project, value };
}

const rows = [
  createData(
    'Pendente',
    'Problemas na integração do serviço de entrega',
    'Android',
    'Microsoft',
    'MicroHealth',
    'R$ 400'
  ),
  createData(
    'Resolvido',
    'Problemas na integração do serviço de entrega',
    'Integração',
    'Microsoft',
    'MicroBus',
    'R$ 400'
  ),
  createData(
    'Resolvido',
    'Problemas na integração do serviço de entrega',
    'Integração',
    'Apple',
    'Ifun',
    'R$ 400'
  )
];

const MyBugrequests = props => {
  const { classes } = props;

  return (
    <Grid container style={{ height: '100%' }} direction="column">
      <Header />
      <DefaultContainer>
        <Grid
          container
          justify="center"
          style={{ paddingTop: 90 }}
          className={classes.mainContainer}
        >
          <Grid item className={classes.centerContent}>
            <Grid item className={classes.titleSection}>
              <Grid
                container
                direction="row"
                justify="space-between"
                className={classes.title}
              >
                <Grid item>
                  <Typography variant="h3">Bugrequests</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Bugs</TableCell>
                  <TableCell align="center">Categoria</TableCell>
                  <TableCell align="center">Empresa</TableCell>
                  <TableCell align="center">Projeto</TableCell>
                  <TableCell align="center">Valor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.status}>
                    <TableCell component="th" scope="row">
                      <Typography className={classes.active}>
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">{row.bugs}</TableCell>
                    <TableCell align="center">{row.category}</TableCell>
                    <TableCell align="center">{row.company}</TableCell>
                    <TableCell align="center">{row.project}</TableCell>
                    <TableCell align="center">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </DefaultContainer>
    </Grid>
  );
};

MyBugrequests.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyBugrequests);
