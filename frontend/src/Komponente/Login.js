import React from "react";
import Navbar2 from './Navbar2';
import { Box,Typography,Button,Input} from "@mui/material";
import logo from '../Slike/logo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { useNavigate } from "react-router-dom";

export function InputText(props){
    return(
        <>
        <Input 
        type={props.type}
        placeholder={props.text}
        size="lg"
        sx={{mb: 2}}>
        </Input>
        <br></br>
        </>
    )
}

function Login () {
    const navigate = useNavigate();
    return(
        <>
        <Navbar2></Navbar2>
        <Box style={{ width: '15%'}} sx = {{m: "auto"}}>
        <Box component="img" sx={{ height: 150}} src={logo}/>
        <Typography
            sx={{ mb: 3 }}
            variant='h4' 
            className='title' 
            fontWeight={'bold'}>HerojApp
        </Typography>
        <br/>
        <InputText type="text" text="Your username"/>
        <InputText type="password" text="Your password"/>
        <br/>
        <Button variant = "contained" color = "secondary" sx={{mb:2, ml:4}} onClick = {() => navigate('/logovani')}>Login </Button><br/>
        <FacebookRoundedIcon sx={{ml:5}}></FacebookRoundedIcon>
        <TwitterIcon></TwitterIcon>
        <LinkedInIcon></LinkedInIcon> 
       </Box>
       </>
    )
}
export default Login;