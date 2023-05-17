import React, {useState} from 'react'
import Navbar2 from './Navbar2';
import { Box, Input, Typography,Button } from '@mui/material';
import logo from '../Slike/logo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { InputText } from './Login';


function Register() {
    return(
      <>
       <Navbar2/>
       <Box style={{ width: '15%'}} sx = {{m: "auto"}}>
       <Box component="img"
            sx={{ height: 150}} 
            src={logo}/>
       <Typography sx={{ mb: 3 }}
         variant='h4' 
         className='title' 
         fontWeight={'bold'}>HerojApp
       </Typography>
       <br/>
      <InputText type="text" text="Your username"/>  
      <InputText type="text" text="Your email"/>     
      <InputText type="password" text="Your password"/>     
      <InputText type="text" text="Your professsion"/>     
      <br/>   
      <Button variant='contained' color = "secondary" sx={{mb:2, ml:4}}>Register</Button>
      <br/>
      <FacebookRoundedIcon sx={{ml:5}}></FacebookRoundedIcon>
      <TwitterIcon></TwitterIcon>
      <LinkedInIcon></LinkedInIcon>
       </Box>
       </>
    )
}
export default Register;