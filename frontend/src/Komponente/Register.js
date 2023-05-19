import {useState} from "react";
import axios from "axios";
import { Box,Typography,Button,Input} from "@mui/material";
import {useNavigate} from "react-router-dom";

function provjeri(vals) {
    //doslovno provjerava ako nesto nije uneseno ispisuje ovu poruku
    let errors = {}

    if (!vals.ime.trim()) {
        errors.ime = "Unesite ime!"
    }

    if (!vals.prezime.trim()) {
        errors.prezime = "Unesite prezime!"
    }

    if (!vals.email) {
        errors.email = "Unesite email!"
    }

    if (!vals.pass) {
        errors.pass = "Unesite lozinku!"
    } else if (vals.pass.length < 6) {
        errors.pass = "Lozinka treba biti duza od 6 karaktera"
    }

    if (!vals.pass2) {
        errors.pass2 = "Potvrdite lozinku!"
    } else if (vals.pass !== vals.pass2) {
        errors.pass2 = "Lozinke se ne poklapaju"
    }
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
            <Box sx = {{m: "auto"}}>
                <Typography variant = "h2">Thank You for singing up!</Typography> 
                <Typography variant = "paragraph">Your account has been successfully created.</Typography> 
                <Button variant = "outlined" onClick = {() => navigate('/')}>Continue</Button>
            </Box>
            </>
        )
    }else {

        return (
            //tag za formu mora stajati, to je jedini nacin da se zna sta se veze za ono sto zelimo unositi u bazu.
            //to je generalno pravilo , sve u formi, i dugme sa opcijom submit znaci svako polje koje ima se kupi. Njemu se pridruzuje
            //name, koji se dalje siba u bazu itd i tako mu se pristupa. Ja uvijek sva ta imena drzim istim da se ne desi greska, al da znate
            //mora biti forma, a ove klase i to sam povukao automatski od nekad prije, svakako treba mijenjati.
            <div className='form-container'>
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Registruj se</h2>
                    <div className="inputs">
                        <label className="label" htmlFor="ime">
                            Unesite vase ime:
                        </label>
                        <input
                            className="input"
                            id="ime"
                            name="ime"
                            type="text"
                            placeholder="Ime..."
                            value={vals.ime}
                            onChange={postavi}
                        />
                        {errors.ime && <p>{errors.ime}</p>}
                    </div>
                    <div className="inputs">
                        <label className="label" htmlFor="prezime">
                            Unesite vase prezime:
                        </label>
                        <input
                            className="input"
                            id="prezime"
                            name="prezime"
                            type="text"
                            placeholder="Prezime..."
                            value={vals.prezime}
                            onChange={postavi}
                        />
                        {errors.prezime && <p>{errors.prezime}</p>}
                    </div>
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
                    <div className="inputs">
                        <label className="label" htmlFor="pass2">
                            Potvrdite lozinku:
                        </label>
                        <input
                            className="input"
                            id="pass2"
                            name="pass2"
                            type="password"
                            placeholder="Potvrda..."
                            value={vals.pass2}
                            onChange={postavi}
                        />
                        {errors.pass2 && <p>{errors.pass2}</p>}
                    </div>

                    <button className="input-btn" type="submit">Registruj se</button>
                </form>
            </div>
            //evo ovdje ovaj button ima type submit, umjesto onclick, i kad se submita poziva se ona funkcija onsubmit
            //koja je definisana u formi i kupi sve ovdje sto je navedeno.
        )
    }
}

export default Register