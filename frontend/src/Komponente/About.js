import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Navbar2 from "./Navbar2";
import Typography from "@mui/material/Typography";
import avatar from '../Slike/avatar.jpg';


const AboutComponenta = () => {

  return (
  <>
    <Navbar2/>
    <Box sx={ {display :"flex", justifyContent:"center", alignItems: 'center'} }>
      <Box component="img" sx={{ height: 100, borderRadius: '80px', position: 'absolute', top: '150px', center: '40px'}} src={avatar}/>
      <Paper elevation={10} style={{marginTop: '50px', borderRadius: '10px', width: '500px', height: '500px' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4" style={{ color: 'black', position: 'absolute', top: '260px', center: '20px'}}>ime prezime</Typography>
      <Typography variant="h5" style={{ color: 'black', position: 'absolute', top: '300px', center: '20px'}}>programer</Typography>
      </Paper>
    </Box>
  </>
  );
};


export default AboutComponenta;