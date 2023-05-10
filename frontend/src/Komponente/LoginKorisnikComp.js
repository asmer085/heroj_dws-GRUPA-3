import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/LoginKorisnikCSS.css';
import HerojAppIkonica from '../Slike/HerojAppIkonica.png'


function LoginKorisnik(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="login">
                        <img src={HerojAppIkonica} alt="Ikonica aplikacije" className="slikaLogin"/>
                        <form method="post" action="/users/login">
                            <p>
                                <input
                                    type="email"
                                    name="email"
                                    value=""
                                    placeholder="Unesite email"
                                />
                            </p>
                            <p>
                                <input
                                    type="password"
                                    name="sifra"
                                    value=""
                                    placeholder="Unesite šifru"
                                />
                            </p>
                            <button className="dugmeLogin">Prijavi se</button>
                        </form>
                        <p>Niste registrovani? Registrujte se!</p>
                        <button className="dugmeRegistracija">Registuj se</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginKorisnik;

