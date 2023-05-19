import React, {useEffect, useState} from "react";
import Navbar2 from './Navbar2';
import { Box,Typography,Button,Input} from "@mui/material";
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
            <Box sx = {{m: "auto "}}>
                <Typography variant = "h2"> Thank You for singing up! </Typography> 
                <Button variant = "outlined" onClick = {() => navigate('/')}>Continue</Button>
            </Box>
            </>
        )
    } else {

        return (
            <div>

                <form className="form" onSubmit={handleSubmit}>
                    <h2>Prijavi se</h2>
                    <div className="inputs">
                        <label className="label" htmlFor="email">
                            Unesite email:
                        </label>
                        <input
                            className="input"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email..."
                            value={vals.email}
                            onChange={postavi}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="inputs">
                        <label className="label" htmlFor="pass">
                            Unesite lozinku:
                        </label>
                        <input
                            className="input"
                            id="pass"
                            name="pass"
                            type="password"
                            placeholder="Lozinka..."
                            value={vals.pass}
                            onChange={postavi}
                        />
                        {errors.pass && <p>{errors.pass}</p>}
                    </div>
                    <div>
                        <button><Link to='/Register' className='nav-links'>Registrujte se ako niste</Link></button>
                    </div>
                    <button className="input-btn" type="submit">Prijavi se</button>
                </form>

            </div>
        )

    }
}

export default Login