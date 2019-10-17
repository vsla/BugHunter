import React, { Component } from 'react';
import { Grid, withStyles, Typography, Paper, Button } from '@material-ui/core';
import Header from '../../components/Header';
import DefaultContainer from '../../components/DefaultContainer';

const styles = {
  mainContainer: {
    backgroundImage: 'url(https://source.unsplash.com/wh-RPfR_3_M/1600x900)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    paddingTop: 60,
  },
  centerContent: {
    backgroundColor: 'white',
  },
  paper: {
    padding: '40px 20px',
  }
};

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container style={{ height: '100%' }} direction="column">
        <Header />
        <Grid container className={classes.mainContainer}>
          <DefaultContainer style={{ height: '100%' }}>
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ height: '100%' }}
            >
              <Grid item className={classes.centerContent}>
                <Paper elevation={3} className={classes.paper} square>
                  <Grid container direction="column" spacing={3}>
                    <Grid item style={{ textAlign: 'center' }}>
                      <Typography variant="h3">
                        Tem vontade de achar bugs em vários projetos e ganhar
                        dinheiro com isso?
                      </Typography>
                      <Typography variant="h3">
                        ou
                      </Typography>
                      <Typography variant="h3">
                        É uma
                        <b>{' '}Empresa{' '}</b>
                        ou
                        <b>{' '}Startup{' '}</b>
                        e quer ter bugs encontrados na sua aplicação?
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row" justify="space-around" alignItems="center">
                        <Grid item>
                          <Button color="secondary" variant="contained" size="large">Login</Button>
                        </Grid>
                        <Grid item>
                          <Button color="primary" variant="contained" size="large">Cadastre-se</Button>
                        </Grid>
                      </Grid>


                    </Grid>
                  </Grid>
                </Paper>

              </Grid>
            </Grid>
          </DefaultContainer>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(index);
