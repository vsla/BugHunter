/* eslint-disable import/extensions */
import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// Theme
import theme from './theme/theme.jsx';

// Routes
import Routes from './routes';

// Browser history
const browserHistory = createBrowserHistory();


const App = () => (
  <ThemeProvider theme={theme}>
    <Router history={browserHistory}>
      <Routes />
    </Router>
  </ThemeProvider>
);
export default App;
