/* eslint-disable import/extensions */
import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

// Theme
import theme from './theme/theme.jsx';

// Routes
import Routes from './routes/Routes';

// Browser history
const browserHistory = createBrowserHistory();

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
export default App;
