import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from "../Slike/logo.png"
import { useNavigate } from "react-router-dom";

function Navbar2() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

            <Box component="img"sx={{ height: 80}} alt="Logo" src={logo}/> 
            <Button color = "inherit" onClick = {() => navigate('/')}>Home</Button>
            <Button color = "inherit" >Login</Button>
            <Button color = "inherit" >Register</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar2;