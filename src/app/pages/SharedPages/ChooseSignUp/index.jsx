import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


import { Link } from 'react-router-dom';
import HunterImage from '../../../assets/HunterLogo.png';

const useStyles = (theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
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
          <Grid
            container
            direction="column"
            spacing={1}
            style={{ maxWidth: 750, height: '100%' }}
          >
            <Grid item>
              <Grid container direction="column" justify="space-around" alignItems="center" spacing={2}>
                <Grid item>
                  <img alt="logo" src={HunterImage} height={80} />
                </Grid>
                <Grid item>
                  <Typography variant="h2" color="primary">Olá empresa, Faça seu cadastro</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
                style={{ height: '100%' }}
              >
                <Grid item>
                  <Link to="/cadastro/empresa">
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      size="medium"
                    >
                      Sou empresa
                    </Button>
                  </Link>
                </Grid>
                <Grid item style={{ padding: 20 }}>
                  <Typography>
                    ou
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/cadastro/bughunter">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="medium"
                    >
                      Sou BugHunter
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    ) : (
      <div />
    );
  }
}
export default withStyles(useStyles)(SignUp);
