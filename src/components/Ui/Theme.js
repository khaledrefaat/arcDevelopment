import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0984e3';
const arcOrange = '#f0932b';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },

  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});
