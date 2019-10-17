import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';
import DefaultContainer from '../DefaultContainer';

import Logo from '../../../../assets/bughunter.png';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  loginButon: {
    marginRight: 10,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <DefaultContainer>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item style={{ display: 'flex' }}>
                <img
                  src={Logo}
                  edge="start"
                  className={classes.menuButton}
                  alt="logo bughunter"
                  height={40}
                />
              </Grid>
              <Grid item>
                <Link to="/login">
                  <Button className={classes.loginButon} variant="contained" size="medium">Login</Button>
                </Link>
                <Link to="/cadastro">
                  <Button color="default" variant="contained" size="medium">Cadastre-se</Button>
                </Link>
              </Grid>
            </Grid>
          </DefaultContainer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
