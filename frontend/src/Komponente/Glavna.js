import Navbar2 from "./Navbar2"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from "../Slike/logo.png";
import Pretraga from "./Pretraga";


function Glavna() {
    return (
    <>
    <Navbar2/>
    <Box style={{ width: '400px', height: '10px' }} sx = {{m: "auto"}}>
        <br/>
        <Typography variant = "h3">We are Hero App</Typography>
        <br/>
        <Typography variant = "paragraph">Our goal is to educate people to save lives but also we give them an ability
        to search the symptoms and get proper first aid steps!</Typography>
        <br/>
        <Box component="img"sx={{ height: 300}} alt="Logo" src={logo}/>
        <Pretraga/>
    </Box>
    </>
    )
}

export default Glavna;