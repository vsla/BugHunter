import React, { Component } from 'react';
import { Grid, withStyles, Select, TextField, Typography, CircularProgress, Paper} from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Header from '../../components/Header';
import DefaultContainer from '../../components/DefaultContainer';
import BugRequestService from 'app/services/BugRequestService';

// Redux
import { connect } from 'react-redux';

const styles = theme => ({
  mainContainer: {
    height: '100%',
    paddingTop: 90
  },
  root: {
    border: '1px solid gray'
  },
  title: {
    borderBottom: '1px solid gray',
    paddingBottom: 10
  },
  centerContent: {
    flexGrow: 1,
    height: '100%',
    paddingBottom: 10,
    backgroundColor: theme.palette.background.paper
  },
  content: {
    paddingTop: 30
  },
  active: {
    border: `1px solid ${theme.palette.primary.light}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    color: theme.palette.primary.light,
    textAlign: 'center'
  },
  inactive: {
    border: `1px solid ${theme.palette.secondary.dark}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    color: theme.palette.secondary.dark,
    textAlign: 'center'
  },
  paper: {
    padding: '40px 20px'
  },
  tabs: {
    borderBottom: '1px solid gray'
  }
});

class MyBugs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      bugRequests: [
        
      ]
    };
  }


  componentDidMount() {
    this.getAllBugRequests()
  }

  getAllBugRequests = async () => {
    const {id} = this.props.authState.auth
    const response = await BugRequestService.getAllBugRequestsBugHunter(id)
    if (!response.error) {
      this.setState({ loading: false, bugRequests: response.data })
    }
  }

  render() {
    const { classes } = this.props;
    const { bugRequests } = this.state;
    return (
      <Grid container style={{ height: '100%' }} direction="column">
        <Header />
        <DefaultContainer>
          <Grid container direction="column" className={classes.mainContainer}>

            <Grid item className={classes.titleSection}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                className={classes.title}
              >
                <Grid item>
                  <Typography color='primary' variant='h2'> Meus BugRequests </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.content}>
              <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Bug</TableCell>
                      <TableCell align="center">Categoria</TableCell>
                      <TableCell align="center">Empresa</TableCell>
                      <TableCell align="center">Projeto</TableCell>
                      <TableCell align="center">Valor</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bugRequests && bugRequests.map(bugRequest => (
                      <TableRow key={bugRequest.status}>
                        <TableCell component="th" scope="row">
                          <Typography
                            className={bugRequest.status==='solved' ? classes.active : classes.inactive}
                          >
                            {bugRequest.status==='solved' ? 'Resolvido' : 'Pendente'}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">{bugRequest.title}</TableCell>
                        <TableCell align="center">{bugRequest.category}</TableCell>
                        <TableCell align="center">{bugRequest.company}</TableCell>
                        <TableCell align="center">{bugRequest.project}</TableCell>
                        <TableCell align="center">{bugRequest.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>


          </Grid>
        </DefaultContainer>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  authState: state,
});

export default withStyles(styles)(connect(mapStateToProps)(MyBugs));
