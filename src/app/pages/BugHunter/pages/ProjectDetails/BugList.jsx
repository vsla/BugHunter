/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Material components
import {
  withStyles,
  CircularProgress,
  Grid,
  Typography,
  Button,
  Paper
} from '@material-ui/core';

// Custom components
import palette from '../../../../theme/palette';

//icon
import BugReport from '@material-ui/icons/BugReport';

// Component styles
const styles = theme => ({
  StorekeeperDashboard: {
    // padding: theme.spacing(4),
    flexGrow: 1
  },
  titleSection: {
    paddingTop: '20px',
    paddingBottom: '20px',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(227, 227, 227, 0.32)'
    // width: '1168px',
    // height: '120px',
  },
  content: {
    paddingTop: 26,
    padding: theme.spacing(4),
    maxWidth: '965px'
  },
  title: {
    maxWidth: '900px'
  },
  subTitle: {
    fontSize: '12px'
  },
  active: {
    border: `1px solid ${palette.primary.light}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    color: palette.primary.light,
    textAlign: 'center'
  },
  inactive: {
    border: `1px solid ${palette.secondary.dark}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    color: palette.secondary.dark,
    textAlign: 'center'
  },
  money: {
    border: '1px solid gray',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10
  },
  category: {
    border: '1px solid gray',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10
  },
  growContent: {
    // border: '1px solid gray',
    // padding: 5,
    // borderRadius: 5,
    // flexGrow: 1,
    // display: 'flex',
    marginLeft: 10,
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  divider: {
    borderBottom: '1px solid gray',
    paddingBottom: 10
  },
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650,
    border: 1
  },
  button: {
    backgroundColor: palette.secondary.dark,
    color: '#fff'
  }
});

function createData(status, bugs, category, author, value) {
  return { status, bugs, category, author, value };
}

const rows = [
  createData(
    'Pendente',
    'Problemas na integração do serviço de entrega',
    'Android',
    'Hudson',
    'R$ 400'
  ),
  createData(
    'Resolvido',
    'Problemas na integração do serviço de entrega',
    'Integração',
    'Hudson',
    'R$ 400'
  ),
  createData(
    'Resolvido',
    'Problemas na integração do serviço de entrega',
    'Integração',
    'Hudson',
    'R$ 400'
  )
];
class BugList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      NewProjectBug: false,
      bugs: this.props.bugs
    };
  }
  newProject = () => {
    if (this.state.newProjectBug === true){
      this.setState({NewProjectBug: false})
    } else {
      this.setState({NewProjectBug: true})
    }
  }

  render() {
    const { classes,createNewBugRequest } = this.props;
    const { active, bugs } = this.state;
    console.log(this.props.bugs)
    return (
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
                <Button variant="outlined" onClick={() => createNewBugRequest(true)} className={classes.button}>
                  NOVO
                  <BugReport />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.content}>
            <Paper className={classes.root}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Bugs</TableCell>
                    <TableCell align="center">Categoria</TableCell>
                    <TableCell align="center">Autor</TableCell>
                    <TableCell align="center">Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bugs.map(bug => (
                    <TableRow key={bug.status}>
                      <TableCell component="th" scope="row">
                        <Typography
                          className={active ? classes.active : classes.inactive}
                        >
                          {bug.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">{bug.title}</TableCell>
                      <TableCell align="center">{bug.category}</TableCell>
                      <TableCell align="center">{bug.author}</TableCell>
                      <TableCell align="center">{bug.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
      
    );
  }
}

BugList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BugList);
