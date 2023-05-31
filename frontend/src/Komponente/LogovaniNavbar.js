import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { useNavigate } from "react-router-dom";
import Logout from './Logout';

function LogovaniNavbar() {
  const navigate = useNavigate();
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="paragraph" component="div" sx={{ flexGrow: 1 }}>
            <WavingHandIcon />
               Pozdrav 
            </Typography>
            <Button color="inherit" onClick = {() => navigate('/')}>Home</Button>
            <Button color = "inherit" onClick = {() => navigate('/about')}>About me</Button>
            <Logout/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  export default LogovaniNavbar;