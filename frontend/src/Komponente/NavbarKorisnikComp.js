import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/NavbarMainCSS.css';
import HerojAppIkonica from '../Slike/HerojAppIkonica.png'

function NavbarKorisnik() {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar">
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <div className="navbar-logo">
                            <img src={HerojAppIkonica} alt="Ikonica aplikacije" className="slikaNavbarMain"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4 nb">
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <ul className="navbar-links">
                            <li className="navbar-link">
                                <p>Ime Osobe iz baze</p>
                            </li>
                            <li className="navbar-link">
                                <p>Prezime Osobe iz baze</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavbarKorisnik;