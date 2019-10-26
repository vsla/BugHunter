import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SignUpForm from './Form';

const useStyles = theme => ({
  root: {
    height: '100vh'
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  render() {
    const { classes } = this.props;
    const { logged } = this.state;
    return !logged ? (
      <Grid container component="main" className={classes.root}>
        <Grid
          item
          xs={false}
          sm={5}
          md={6}
          lg={6}
          xl={7}
          className={classes.image}
        />
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
          lg={6}
          xl={5}
          component={Paper}
          elevation={6}
          square
          className={classes.paper}
        >
          <SignUpForm />
        </Grid>
      </Grid>
    ) : (
      <div />
    );
  }
}
export default withStyles(useStyles)(SignUp);
