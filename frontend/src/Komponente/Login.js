import React, {useEffect, useState} from "react";
import { Box,Typography,Button,Input,FormGroup} from "@mui/material";
import logo from '../Slike/logo.png'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar2 from "./Navbar2"

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

    const URL = "http://127.0.0.1:8000/api";
    useEffect(() => {
        axios.get(URL + '/korisnik/').then((response) => {
            setUsers(response.data)
        })
    },[])


    function provjera() {
        let brojac = 0;

        let n = users.length


        for (let i = 0; i < n; i++) {
            if (vals.email === users[i].email && vals.pass === users[i].passW) {
                brojac++
                console.log(users[i])
                localStorage.setItem("Tip", "korisnik")
                localStorage.setItem("Ime", users[i].ime)
                localStorage.setItem("Prezime", users[i].prezime)
                localStorage.setItem("Email", users[i].email)
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
        return (
            <>
            <Navbar2/>
            <Box sx = {{m: "auto "}}>
                <Typography variant = "h2"> Thank You for singing up! </Typography> 
                <Button variant = "outlined" onClick = {() => navigate('/')}>Continue</Button>
            </Box>
            </>
        )
    } else {

        return (
            <>
            <Navbar2/>
            <Box  className='form-container' style={{ width: '200px', height: '10px' }} sx = {{m: "auto"}}>
                <Box component="img"
                   sx={{ height: 150}} 
                   src={logo}/>
                <FormGroup className="form" onSubmit={handleSubmit}>
                    <Typography variant="h4" >Log in</Typography><br></br>
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
                    </Box><br/>

                    <Box textAlign='center'>
                    
                    <Button variant="contained" className="input-btn" onClick={handleSubmit}>Sign in</Button>
            
                    </Box>

                    <br/>
                
                    <Box textAlign='center'>

                        <Button variant="contained" className="input-btn" sx={{marginBottom:"5px"}}><Link to='/Register' 
                        className='nav-links' style={{ textDecoration: 'none', color: "#F6F6F6" }}
                        >Sign up</Link></Button>
                    
                    </Box>

                </FormGroup>
            </Box>
            </>
        )

    }
}

export default Login