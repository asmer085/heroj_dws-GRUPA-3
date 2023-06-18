import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import grey from "@mui/material/colors/grey";


const theme = (mode) =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: grey[900]
      },
      secondary: {
        light: red[400],
        main: red[600],
        dark: red[900],
        contrastText: grey[50]
      },
      text: {
        primary: grey[50],
        secondary: grey[900]
      },
      background: {
        default: grey[900]

      },
      common: {
        black: grey[900],
        white: grey[200]
      }
      
    }
  });

export default theme;