import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./Komponente/Theme.js";
import Logovani from "./Komponente/Logovani";
import Glavna from "./Komponente/Glavna"
import Register from './Komponente/Register';
import Login from './Komponente/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
           {Register()}
    </ThemeProvider>,
);

reportWebVitals();
