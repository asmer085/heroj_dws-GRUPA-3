import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/NavbarMainCSS.css';
import HerojAppIkonica from '../Slike/HerojAppIkonica.png'

function NavbarMain() {
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
                                <a href="#">Login</a>
                            </li>
                            <li className="navbar-link">
                                <a href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavbarMain;