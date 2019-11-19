import React, { Component } from 'react';
import { Grid, withStyles, Typography, Button, Paper } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import palette from '../../../../theme/palette';

import Header from '../../components/Header';
import DefaultContainer from '../../components/DefaultContainer';

//icon
import BugReport from '@material-ui/icons/Edit';

const styles = theme => ({
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
  createData('Pendente', 'João Gabriel'),
  createData('Resolvido', 'Adriana'),
  createData('Resolvido', 'Gabriel Ramos')
];

class ListAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      value: 0
    };
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Grid container style={{ height: '100%' }} direction="column">
        <Header />
        <DefaultContainer>
          <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.centerContent}>
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
                        <Button variant="outlined" className={classes.button}>
                          Novo Administrador
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.content}>
                    <Paper className={classes.root}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
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
                                <BugReport />
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
            </Grid>
          </Grid>
        </DefaultContainer>
      </Grid>
    );
  }
}

export default withStyles(styles)(ListAdmin);
