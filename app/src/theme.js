import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#349525',
      light: '#66bb6a',
      dark: '#276220',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8FBF5A',
      contrastText: '#fff',
    },
    background: {
      default: '#f7fbf6',
      paper: '#ffffff',
    },
    text: {
      primary: '#222',
      secondary: '#546e3a',
    },
  },
  typography: {
    fontFamily: 'Roboto, Afacad Flux, Zain, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: 'none' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
  },
});

export default theme;
