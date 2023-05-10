import NavbarMain from "./NavbarMain";
import Search from "./SearchDioMainComp";
import KratkiOpis from "./KratkiOpisMainComp";

function Main() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <NavbarMain/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <KratkiOpis/>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Search/>
                    </div>
                </div>
            </div>
         </div>

    )
}

export default Main;