import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./Komponente/Theme.js";
import Logovani from "./Komponente/Logovani";
import Glavna from "./Komponente/Glavna"
import Register from './Komponente/Register';
import Login from './Komponente/Login';

import App from "./App.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <ThemeProvider theme={theme}>
        <CssBaseline />
           {Register()}
    </ThemeProvider>,
            <App/>
    </ThemeProvider>
    </Router>
);


