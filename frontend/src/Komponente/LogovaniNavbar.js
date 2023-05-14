import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WavingHandIcon from '@mui/icons-material/WavingHand';

function LogovaniNavbar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="paragraph" component="div" sx={{ flexGrow: 1 }}>
            <WavingHandIcon />
               Pozdrav 
            </Typography>
            <Button color="inherit">Home</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  export default LogovaniNavbar;