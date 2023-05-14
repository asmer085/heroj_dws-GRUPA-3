import Navbar2 from "./Navbar2"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from "../Slike/logo.png";
import Pretraga from "./Pretraga";
import { spacing } from '@mui/system';


function Glavna() {
    return (
    <>
    <Navbar2/>
    <Box style={{ width: '400px', height: '10px' }} sx = {{m: "auto"}}>
        <br/>
        <Typography variant = "h3">Mi smo Heroj App</Typography>
        <br/>
        <Typography variant = "paragraph">Naš cilj je pomoći ljudima da pravilno izvedu prvu pomoć uz detaljna uputstva,
        kao i mogućnost pretraživanja simptoma.</Typography>
        <br/>
        <Box component="img"sx={{ height: 300}} alt="Logo" src={logo}/>
        <Pretraga/>
    </Box>
    </>
    )
}

export default Glavna;