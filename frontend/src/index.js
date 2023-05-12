import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./Komponente/Theme.js";
import MediaCard from "./Komponente/ImanKartica";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
            {MediaCard()}
    </ThemeProvider>,
);

reportWebVitals();
