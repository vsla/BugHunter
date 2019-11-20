/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import BugRequestForm from './NewBugForm';
import BugList from './BugList';

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

// Shared layouts
import Dashboard from '../../../../layouts/Dashboard';

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
  }
});

class BugsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      newBug: false,
      project: this.props.project
    };
  }

  createNewBugRequest = (value) => {
    this.setState({ newBug: value })
  }

  render() {
    const { classes } = this.props;
    const { loading, newBug, project } = this.state;
    console.log(project)
    return (
      <div className={classes.StorekeeperDashboard}>
        {
          !loading ? (
            <Grid container direction="column">
              {
                !newBug ?
                  <BugList
                    createNewBugRequest={this.createNewBugRequest} />
                  :
                  <BugRequestForm
                    createNewBugRequest={this.createNewBugRequest}
                    projectId={project.id} />
              }
            </Grid>
          )
            : (
              <Grid container justify="center" align="center">
                <CircularProgress />
              </Grid>
            )
        }
      </div>
    );
  }
}

BugsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BugsList);
