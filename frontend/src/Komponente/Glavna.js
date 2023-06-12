import Navbar2 from "./Navbar2";
import LogovaniNavbar from "./LogovaniNavbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../Slike/logo.png";
import Pretraga from "./Pretraga";
import { useNavigate } from "react-router-dom";
import PretragaSimptomi from "./PretragaSimptomi";
import backgroundImage from "../Slike/map_city.jpg";

function Glavna() {
  const navigate = useNavigate();
  return (
    <>
      {localStorage.getItem("token") ? <LogovaniNavbar /> : <Navbar2 />}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Box style={{ width: "600px", height: "10px" }} sx={{ m: "auto" }}>
          <br />
          <Typography variant="h3">We are Hero App</Typography>
          <br />
          <Typography variant="paragraph">
            Whether you're a concerned citizen, a caregiver, or someone who
            wants to be prepared for emergency situations, our app is here to
            provide you with the knowledge and guidance you need to confidently
            administer first aid. Gain valuable insights on recognizing common
            health problems and learn step-by-step techniques to provide
            immediate assistance. From CPR to wound care, our comprehensive
            resources and interactive modules will equip you with the skills to
            make a difference. Join us on this journey of learning and become a
            vital link in the chain of lifesaving actions!
          </Typography>
          <br />
          <Box component="img" sx={{ height: 250 }} alt="Logo" src={logo} />
          {localStorage.getItem("token") && <PretragaSimptomi />}
        </Box>
      </div>
    </>
  );
}

export default Glavna;
