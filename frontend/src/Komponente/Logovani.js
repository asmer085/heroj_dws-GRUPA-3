import LogovaniNavbar from "./LogovaniNavbar";
import MojGrid from "./Kartice"
import Button from '@mui/material/Button';
import backgroundImage from "../Slike/map_city.jpg";

import { useNavigate } from "react-router-dom";

function Logovani() {
    const navigate = useNavigate();
    return (
        <>
        <LogovaniNavbar/>
        <div style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: "cover",
      minHeight: "90vh"}}>
        <br/>
        <MojGrid/></div>
        </>
    )
}

export default Logovani;