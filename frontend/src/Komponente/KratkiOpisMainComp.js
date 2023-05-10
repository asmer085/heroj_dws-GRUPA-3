import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/KratkiOpisCSS.css';
import HerojAppIkonica from "../Slike/HerojAppIkonica.png";

function KratkiOpis(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Mi smo</h1>
                    <h1>HerojApp</h1>
                    <p>Naš cilj je pomoći ljudima da pravilno izvedu prvu pomoć uz detaljna upustva, kao i mogućnost traženja pomoći za određene simptome</p>
                    <img src={HerojAppIkonica} alt="Ikonica aplikacije" className="slikaLogin"/>
                </div>
            </div>
        </div>
    )
}
export default KratkiOpis;
