import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: { main: '#1565C0', light: '#1E88E5', dark: '#0D47A1' },
    secondary: { main: '#E65100', light: '#FF8A65', dark: '#BF360C' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '2rem', fontWeight: 700 },
    body1: { fontSize: '1rem' },
  },
  shape: { borderRadius: 8 },
  components: {
    // Przykład nadpisania stylu przycisku
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8, paddingLeft: 20, paddingRight: 20 },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined', size: 'small' },
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderRadius: 12 },
      },
    },
  }
});

export default muiTheme;
