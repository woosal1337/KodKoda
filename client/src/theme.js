import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import palette from './palette';
import typography from './typography';


// Create a theme instance.
const theme = createMuiTheme({
  shape: {
    borderRadius: 14,
  },
  palette,
  typography
});

export default theme;
