import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  // https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=AD1457&primary.color=2E7D32&primary.text.color=ffffff
  palette: {
    primary: {
      light: '#2e7d32',
      main: '#60ad5e',
      dark: '#005005',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ad1457',
      main: '#e35183',
      dark: '#78002e',
      contrastText: '#000',
    },
  },
  status: {
    danger: 'orange',
  },
});
export default theme