import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginKorisnik from "./Komponente/LoginKorisnikComp";
import SignupKorisnikComp from "./Komponente/SignupKorisnikComp";
import Search from "./Komponente/SearchDioMainComp";
import NavbarMain from "./Komponente/NavbarMain";
import kratkiOpisMainComp from "./Komponente/KratkiOpisMainComp";
import App from "./Komponente/KarticaLogovaniKorisniciComp"
import NaslovLogovaniKorisnik from "./Komponente/NalovLogovaniKorisnikComp";
import Main from "./Komponente/MainComp";
import KorisnikFajl from "./Komponente/KorisnikComp";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    KorisnikFajl()
);

reportWebVitals();
