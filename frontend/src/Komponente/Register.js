import {useState} from "react";
import axios from "axios";
import { Box,Typography,Button,Input, FormLabel, InputLabel, FormGroup, colors, responsiveFontSizes} from "@mui/material";
import {useNavigate} from "react-router-dom";
import logo from '../Slike/logo.png'
import { red } from "@mui/material/node/colors";
import Grid from '@mui/material/Grid';



function provjeri(vals) {
    //doslovno provjerava ako nesto nije uneseno ispisuje ovu poruku
    let errors = {}

    if (!vals.ime.trim()) {
        console.log("nema imena")
        errors.ime = "You haven't entered first name"
    }

    if (!vals.prezime.trim()) {
        errors.prezime = "You haven't entered last name"
    }

    if (!vals.email) {
        errors.email = "You haven't entered email"
    }

    if (!vals.pass) {
        errors.pass = "You haven't entered password"
    } else if (vals.pass.length < 6) {
        errors.pass = "Lozinka treba biti duza od 6 karaktera"
    }

    if (!vals.pass2) {
        errors.pass2 = "You haven't confirmed your password!"
    } else if (vals.pass !== vals.pass2) {
        errors.pass2 = "Passwords don't match"
    }
    return errors;
}

//mislim da ovo treba ici preko funkcija, kao da ste tako prije radili, nisam sig, ja sam vako uradio pa me kamenujte, samo mi je
//bilo bitno logiku i backend zavrsiti pravo da vam kazem...
const  Register = () =>{
    const [vals,setVals] = useState({
        ime: '',
        prezime: '',
        email: '',
        pass: '',
        pass2: ''
    })

    function provjera(n){
        //sve trivialno, ako je brojac veci od nule ima neki problem.
        let brojac = 0;
        if(!vals.ime.trim()){
            brojac++
        }

        if(!vals.prezime.trim()){
            brojac++
        }

        if(!vals.email){
            brojac++
        }

        if(!vals.pass){
            brojac++
        }else if(vals.pass.length < 6) {
            brojac++
        }

        if(!vals.pass2){
            brojac++
        }else if(vals.pass !== vals.pass2) {
            brojac++
        }
        return brojac === 0
    }

    const [isSub, setIsSub] = useState(false)

    const [errors,setErrors] = useState({})

    const URL = "http://127.0.0.1:8000/api"

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(provjeri(vals))
        if(provjera(vals)){
            //ovo se desava ako je kliknut submit i ukoliko imamo unesene sve ove stvari, onda se radi axios.post na naznaceni url i ide u bazu, u mom
            //slucaju to je baza korisnik1
            const formData = new FormData()
            formData.append("ime",vals.ime)
            formData.append("prezime",vals.prezime)
            formData.append("email", vals.email)
            formData.append("passW", vals.pass)
            try {
                axios.post(URL + "/korisnik/",formData).then((response) => {
                    console.log("insert")
                })
            }catch (error){
                console.log(error)
            }
            setIsSub(true)
            console.log("Desi se")
        }
       
    }
    const postavi = e => {//intuitivno, postavlja vijednosti na imena vrijednosti haha
        const {name,value} = e.target
        setVals({
            ...vals,
            [name] : value
        })
    }

    const navigate = useNavigate()

    if(isSub){
        //ako je prosla stranica
        //ne znam da li se ovako radi Link to, u liniji 117, svakako treba promijeniti jer nije MUI biblioteka jer je nisam ogao vcrs vala iskr jos i to
        return(
           <> 
            <Box sx = {{m: "auto", width:"65%", marginTop:"8%"}}>
            <Box component="img"
                   sx={{ height: 150}} 
                   src={logo}/>
                <Typography variant = "h2">Thank you for signing up!</Typography> 
                <Typography variant = "paragraph">Your account has been successfully created</Typography><br></br><br></br>
                <Button variant = "contained" onClick = {() => navigate('/login')} className="input-btn">Login</Button>
            </Box>
            </>
        )
    }else {
        return (
            //tag za formu mora stajati, to je jedini nacin da se zna sta se veze za ono sto zelimo unositi u bazu.
            //to je generalno pravilo , sve u formi, i dugme sa opcijom submit znaci svako polje koje ima se kupi. Njemu se pridruzuje
            //name, koji se dalje siba u bazu itd i tako mu se pristupa. Ja uvijek sva ta imena drzim istim da se ne desi greska, al da znate
            //mora biti forma, a ove klase i to sam povukao automatski od nekad prije, svakako treba mijenjati.
            <Box className='form-container' style={{ width: '33%'}} sx = {{m: "auto"}}>
                <Box component="img"
                   sx={{ height: 150}} 
                   src={logo}/>
                <FormGroup>
                    <Typography variant="h4">Sign up</Typography><br/>
                    <Box className="inputs"  sx={{ display: "flex", alignItems: "center" }}>
                        <Input
                            className="input"
                            id="ime"
                            name="ime"
                            type="text"
                            placeholder="Enter your first name"
                            value={vals.ime}
                            onChange={postavi}
                        />
                        {errors.ime && <Typography
                         sx={{ color: "#EE2616"
                        }}
                         variant="caption">{errors.ime}</Typography>}
                        </Box>
                    <Box className="inputs">
                        <Input
                            className="input"
                            id="prezime"
                            name="prezime"
                            type="text"
                            placeholder="Enter your last name"
                            value={vals.prezime}
                            onChange={postavi}
                        />
                        {errors.prezime &&<Typography
                         sx={{ color: "#EE2616" }}
                         variant="caption">{errors.prezime}</Typography>}
                    </Box>
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
                        {errors.email && <Typography
                         sx={{ color: "#EE2616" }}
                         variant="caption">{errors.email}</Typography>}
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
                        {errors.pass && <Typography
                         sx={{ color: "#EE2616" }}
                         variant="caption">{errors.pass}</Typography>}
                    </Box>
                    <Box className="inputs">
                        <Input
                            className="input"
                            id="pass2"
                            name="pass2"
                            type="password"
                            placeholder="Confirm your password"
                            value={vals.pass2}
                            onChange={postavi}
                        />
                        {errors.pass2 && <Typography
                         
                         sx={{ color: "#EE2616" }}
                         variant="caption">{errors.pass2}</Typography>}
                    </Box>
                    <br/>
                    <Button variant="contained"  onClick={handleSubmit} className="input-btn">Sign up</Button>
                </FormGroup>
            </Box>
            //evo ovdje ovaj button ima type submit, umjesto onclick, i kad se submita poziva se ona funkcija onsubmit
            //koja je definisana u formi i kupi sve ovdje sto je navedeno.
        )
    }
}

export default Register