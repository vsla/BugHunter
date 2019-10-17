import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography';
import palette from './palette';

const theme = createMuiTheme({
  // https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=AD1457&primary.color=2E7D32&primary.text.color=ffffff
  palette,
  typography,
  status: {
    danger: 'orange',
  },
});
export default theme;
