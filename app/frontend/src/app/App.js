import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
// import { ThemeProvider } from '@material-ui/styles';

// Theme
// import theme from './theme';

// Routes
import Routes from './routes';

// Browser history
const browserHistory = createBrowserHistory();


export default class App extends Component {
  render() {
    return (
      // <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      // </ThemeProvider>
    );
  }
}