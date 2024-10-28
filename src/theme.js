import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007bff', // Primärfarbe
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#121212', // Dunkler Hintergrund für Dark Mode
      paper: '#1d1d1d',
    },
  },
});

export default theme;