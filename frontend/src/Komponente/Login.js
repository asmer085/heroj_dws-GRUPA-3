import React, {useEffect, useState} from "react";
import Navbar2 from './Navbar2';
import { Box,Typography,Button,Input,FormGroup} from "@mui/material";
import logo from '../Slike/logo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login  = () => {
    const [vals, setVals] = useState({
        email: '',
        pass: '',
    })

    const postavi = e => {
        const {name, value} = e.target
        setVals({
            ...vals,
            [name]: value
        })
    }

    const [users, setUsers] = useState([])
    const [ok, setOk] = useState(false)

    //evo ovdje url mozda treba promijeniti. dodati ono nesto /v1 cini mi se... A mozda i ne npm. Ja mislim da da. Prso sam radim od 8 sad je 2
    const URL = "http://127.0.0.1:8000/api";
    useEffect(() => {
        axios.get(URL + '/korisnik/').then((response) => {
            setUsers(response.data)
        })
    },[])


    function provjera() {
        let brojac = 0;

        let n = users.length
        //broj kolona u tabeli, u mom slucaju trenutno korisnik1


        for (let i = 0; i < n; i++) {
            if (vals.email === users[i].email && vals.pass === users[i].passW) {
                brojac++
                console.log(users[i])
                localStorage.setItem("Tip", "korisnik")
                localStorage.setItem("Ime", users[i].ime)
                localStorage.setItem("Prezime", users[i].prezime)
                localStorage.setItem("Email", users[i].email)
                //sve cuvaj u localStorage ako ikada bude trebalo ispisivati neke personalizovane poruke
            }
        }

        return brojac > 0
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (provjera()) {
            setOk(true)
        }else{
        }
    }


    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    if (ok) {
        //ako je prosla provjera na liniji 61
//ne znam kako se ovo tacno linkuje, svakako treba urediti opet ovo izvinjavam se sto sam nesposoban hahahah
        return (
            <>
            <Box sx = {{m: "auto",width:"65%", marginTop:"8%"}}>
            <Box component="img"
                   sx={{ height: 150}} 
                   src={logo}/>
                <Typography variant = "h4"> Thank You for sigining up! </Typography> 
                <Button variant = "contained" onClick = {() => navigate('/')} className="input-btn">Continue</Button>
            </Box>
            </>
        )
    } else {
        return (
            <Box  className='form-container' style={{ width: '15%'}} sx = {{m: "auto"}}>
                <Box component="img"
                   sx={{ height: 150}} 
                   src={logo}/>
                <FormGroup className="form" onSubmit={handleSubmit}>
                    <Typography variant="h4" sx={{m: "auto"}}>Log in</Typography><br></br>
                    <Box className="inputs">
                        <Input
                            className="input"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={vals.email}
                            onChange={postavi}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </Box>
                    <Box className="inputs">
                        <Input
                            className="input"
                            id="pass"
                            name="pass"
                            type="password"
                            placeholder="Enter password"
                            value={vals.pass}
                            onChange={postavi}
                        />
                        {errors.pass && <p>{errors.pass}</p>}
                    </Box><br></br>
                
                        <Button variant="contained" className="input-btn" sx={{marginBottom:"5px"}}><Link to='/Register' 
                        className='nav-links'
                        style={{ textDecoration: 'none', color: "#F6F6F6" }}
                        >Sign up</Link></Button>
                    
                    <Button variant="contained" className="input-btn" onClick={handleSubmit}>Sign in</Button>
                </FormGroup>
            </Box>
        )

    }
}

export default Login