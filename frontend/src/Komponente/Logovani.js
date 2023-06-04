import LogovaniNavbar from "./LogovaniNavbar";
import MojGrid from "./Kartice"
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

function Logovani() {
    const navigate = useNavigate();
    return (
        <>
        <LogovaniNavbar/>
        <br/>
        <MojGrid/>
        <Button onClick = {() => navigate('/viewfajlove')} variant = 'contained' color = 'secondary'>klikni</Button>
        </>
    )
}

export default Logovani;