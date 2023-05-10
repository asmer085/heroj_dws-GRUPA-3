import NavbarKorisnikComp from "./NavbarKorisnikComp";
import KarticaLogovaniKorisniciComp from "./KarticaLogovaniKorisniciComp";
import NaslovLogovaniKorisnik from "./NalovLogovaniKorisnikComp";



function KorisnikFajl() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <NavbarKorisnikComp/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <NaslovLogovaniKorisnik/>
                        <KarticaLogovaniKorisniciComp/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default KorisnikFajl;