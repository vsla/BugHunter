import React, { Fragment } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import BugReport from '@material-ui/icons/BugReport';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {
  SwipeableDrawer,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

import DefaultContainer from '../DefaultContainer';

import Logo from '../../../../assets/bughunter.png';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  loginButon: {
    marginRight: 10,
  },
}));

function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const {logged, type} = props.authState.auth

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <SwipeableDrawer
      anchor="right"
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{ minWidth: '200px' }}
    >
      {
        !logged || type === 'bughunter' ? (
          <>
            <MenuItem>
              <Link to="/login" style={{ width: '100%' }}>
                <Button fullWidth variant="contained">Login</Button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/cadastro/escolher" style={{ width: '100%' }}>
                <Button fullWidth color="default" variant="contained">Cadastre-se</Button>
              </Link>
            </MenuItem>
          </>
        )
          : (
            <List>
              <Link to="/bugs">
                <ListItem>

                  <ListItemIcon
                    color="inherit"
                  >
                    <BugReport />
                  </ListItemIcon>
                  <ListItemText primary="Meus Bugs" />


                </ListItem>
              </Link>
              <Link to="/">
                <ListItem>
                  <ListItemIcon
                    color="inherit"
                  >
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary="Meu Perfil" />
                </ListItem>
              </Link>

            </List>
          )
      }
    </SwipeableDrawer>
  );

  return (
    <div>
      <AppBar position="fixed">
        <DefaultContainer>
          <Toolbar style={{ padding: 0 }}>
            <Link to={!logged || type !== 'bughunter' ? '/' : '/dashboard'} style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={Logo}
                edge="start"
                className={classes.menuButton}
                alt="logo bughunter"
                height={40}
              />
            </Link>

            {
              logged && type === 'bughunter' ? (
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Projeto ou empresa..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              )
                : (
                  <div className={classes.grow} />
                )
            }
            <div className={classes.sectionDesktop}>
              {
                !logged || type !== 'bughunter' ? (
                  <>
                    <Link to="/login">
                      <Button className={classes.loginButon} variant="contained" size="medium">Login</Button>
                    </Link>
                    <Link to="/cadastro/escolher">
                      <Button color="default" variant="contained" size="medium">Cadastre-se</Button>
                    </Link>
                  </>
                )
                  : (
                    <>
                      <Link to="/bugs">
                        <IconButton
                          color="inherit"
                          style={{ color: 'white' }}
                        >
                          <BugReport />
                        </IconButton>
                      </Link>

                      <Link to="/perfil">
                        <IconButton
                          style={{ color: 'white' }}

                        >
                          <AccountCircle />
                        </IconButton>
                      </Link>

                    </>
                  )
              }
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>

          </Toolbar>
        </DefaultContainer>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  authState: state
});

export default connect(mapStateToProps)(PrimarySearchAppBar);
