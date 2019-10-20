import React, { Component } from 'react';
import { Grid, withStyles, Select, TextField, Button } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Header from '../../components/Header';
import DefaultContainer from '../../components/DefaultContainer';
import DashProjects from './DashProjects';


const styles = (theme) => ({
  mainContainer: {
    height: '100%',
    paddingTop: 90,
  },
  centerContent: {
    flexGrow: 1,
    height: '100%',
    paddingBottom: 10,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: '40px 20px',
  },
  tabs: {
    borderBottom: '1px solid gray'
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      value: 0,
    };
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Grid container style={{ height: '100%' }} direction="column">
        <Header />
        <DefaultContainer>
          <Grid
            container
            justify="center"
            className={classes.mainContainer}
          >
            <Grid item className={classes.centerContent}>
              <Grid container className={classes.tabs}>
                <Grid item xs={9}>
                  <Tabs
                    indicatorColor="secondary"
                    value={value}

                    onChange={(e, newValue) => { this.setState({ value: newValue }) }}>
                    <Tab label="Projetos" />
                    <Tab label="Empresas" />
                  </Tabs>
                </Grid>
                <Grid item xs={3}>
                  <Select
                    fullWidth
                    onChange={() => { }}
                    value={''}
                    input={(
                      <TextField
                        id="outlined-age-simple"
                        name="category"
                        label="Categoria"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
              </Grid>

              {
                value === 0 ? (
                  <DashProjects />
                )
                  : (
                    <div />
                  )
              }
            </Grid>
          </Grid>
        </DefaultContainer>
      </Grid>
    );
  }
}

export default withStyles(styles)(Dashboard);
